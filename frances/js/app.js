/* ==========================================================================
   APP — interfaz, router y lógica de estudio
   --------------------------------------------------------------------------
   Dos modos sobre los mismos datos:
     ÉTUDE     pantalla grande: lecciones largas, teoría, tablas
     PRATIQUE  celular: tarjetas, memoria, drills, sesiones de tres minutos
   El modo se elige solo por el ancho de pantalla y se puede forzar a mano.
   ========================================================================== */

(function (global) {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var app = null;
  var S = global.Store;

  /* ======================================================================
     UTILIDADES
     ====================================================================== */

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* Para comparar respuestas: quita mayúsculas, espacios sobrantes y unifica
     los dos tipos de apóstrofo, que en francés se escriben indistintamente. */
  function normaliser(s) {
    return String(s || '')
      .toLowerCase().trim()
      .replace(/[’‘`]/g, "'")
      .replace(/\s+/g, ' ');
  }

  /* Igual que la anterior pero además quita acentos. Sirve para detectar
     respuestas que serían correctas si no fuera por las tildes: en francés
     eso es un error real, pero merece un aviso distinto a estar mal. */
  function sansAccents(s) {
    return normaliser(s).normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  function melanger(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  var NIVEAUX = ['A1', 'A2', 'B1', 'B2'];

  function toutesLecons() {
    return []
      .concat(global.GRAMMAIRE_A1 || [])
      .concat(global.GRAMMAIRE_A2 || [])
      .concat(global.GRAMMAIRE_B1 || [])
      .concat(global.GRAMMAIRE_B2 || []);
  }

  function leconParId(id) {
    var t = toutesLecons();
    for (var i = 0; i < t.length; i++) if (t[i].id === id) return t[i];
    return null;
  }

  /* ======================================================================
     MODO
     ====================================================================== */

  function modeActuel() {
    var p = S.etat().prefs.mode;
    if (p === 'etude' || p === 'pratique') return p;
    return window.innerWidth < 820 ? 'pratique' : 'etude';
  }

  /* ======================================================================
     COMPONENTES REUTILIZABLES
     ====================================================================== */

  /* Botón de audio. data-fr lleva el texto; el handler global lo lee. */
  function btnAudio(texte, langue, classe) {
    return '<button class="say ' + (classe || '') + '" data-say="' + esc(texte) +
           '" data-lang="' + (langue || 'fr') + '" aria-label="Escuchar" title="Escuchar">🔊</button>';
  }

  function barre(pct) {
    return '<div class="bar"><i style="width:' + Math.max(0, Math.min(100, pct)) + '%"></i></div>';
  }

  function chipNiveau(lvl) {
    return '<span class="chip lv-' + lvl + '">' + lvl + '</span>';
  }

  /* ======================================================================
     VISTA · ACCUEIL
     ====================================================================== */

  function vueAccueil() {
    var e = S.etat();
    var mode = modeActuel();

    if (!e.niveau) return vueBienvenue();

    var lecons = toutesLecons();
    var duNiveau = lecons.filter(function (l) { return l.lvl === e.niveau; });
    var faites = duNiveau.filter(function (l) { return e.lecons[l.id] && e.lecons[l.id].terminee; });
    var suivante = duNiveau.filter(function (l) { return !e.lecons[l.id] || !e.lecons[l.id].terminee; })[0]
                || lecons.filter(function (l) { return !e.lecons[l.id] || !e.lecons[l.id].terminee; })[0];

    var stats = global.SRS.statistiques(e.srs);
    var serie = S.serie();
    var hoy = e.stats.jours[S.jourISO()] || { exercices:0, corrects:0 };

    var h = '';
    h += '<header class="hd">';
    h += '  <div><h1>Bonjour, Dante</h1><p class="sub">' +
         (mode === 'pratique' ? 'Modo práctica' : 'Modo estudio') + ' · nivel ' + e.niveau + '</p></div>';
    h += '</header>';

    /* --- tres números que importan --- */
    h += '<div class="stats3">';
    h += '  <div class="stat"><b>' + serie + '</b><span>día' + (serie === 1 ? '' : 's') + ' seguido' + (serie === 1 ? '' : 's') + '</span></div>';
    h += '  <div class="stat"><b>' + stats.du + '</b><span>por repasar</span></div>';
    h += '  <div class="stat"><b>' + hoy.exercices + '</b><span>hoy</span></div>';
    h += '</div>';

    /* --- lo que toca ahora --- */
    if (stats.du > 0) {
      h += '<a class="card action" href="#/exercices/repaso">';
      h += '  <div class="ico">🔁</div><div><b>Repasar ' + stats.du + ' cosa' + (stats.du === 1 ? '' : 's') + '</b>';
      h += '  <span>Lo que estás a punto de olvidar. Empieza por aquí.</span></div></a>';
    }

    if (suivante) {
      h += '<a class="card action" href="#/lecon/' + suivante.id + '">';
      h += '  <div class="ico">' + (mode === 'pratique' ? '📱' : '📘') + '</div><div>';
      h += '  <b>' + esc(suivante.titre) + '</b>';
      h += '  <span>' + chipNiveau(suivante.lvl) + ' Lección ' + suivante.ordre + ' · ' + suivante.minutos + ' min</span></div></a>';
    } else {
      h += '<div class="card"><b>Terminaste todas las lecciones disponibles.</b>' +
           '<span>Sigue con los repasos y los recursos externos.</span></div>';
    }

    /* --- accesos, distintos según el modo --- */
    h += '<h2 class="sec">' + (mode === 'pratique' ? 'Sesiones cortas' : 'Explorar') + '</h2>';
    h += '<div class="grid">';
    if (mode === 'pratique') {
      h += tuile('#/vocab', '🃏', 'Tarjetas', 'Vocabulario, 3 min');
      h += tuile('#/memoire', '🧩', 'Memoria', 'Juego de parejas');
      h += tuile('#/drill', '⚡', 'Drill de verbos', 'Conjuga contrarreloj');
      h += tuile('#/expressions', '💬', 'Expresiones', 'Lo que sí se dice');
      h += tuile('#/ecoute', '🎧', 'Escuchar lección', 'Sin ver la pantalla');
      h += tuile('#/verbes', '📖', 'Conjugador', '178 verbos');
    } else {
      h += tuile('#/lecons', '📚', 'Lecciones', toutesLecons().length + ' en total');
      h += tuile('#/verbes', '📖', 'Verbos', 'Conjugador completo');
      h += tuile('#/vocab', '🃏', 'Vocabulario', '307 palabras');
      h += tuile('#/expressions', '💬', 'Expresiones', '118 frases reales');
      h += tuile('#/ressources', '🌐', 'Recursos', 'Videos y sitios');
      h += tuile('#/progres', '📊', 'Progreso', 'Y respaldo');
    }
    h += '</div>';

    /* --- avance del nivel --- */
    h += '<h2 class="sec">Avance en ' + e.niveau + '</h2>';
    h += '<div class="card">';
    h += barre(duNiveau.length ? (faites.length / duNiveau.length) * 100 : 0);
    h += '<span class="mut">' + faites.length + ' de ' + duNiveau.length + ' lecciones terminadas</span>';
    h += '</div>';

    return h;
  }

  function tuile(href, ico, titre, sub) {
    return '<a class="tuile" href="' + href + '"><div class="ico">' + ico + '</div>' +
           '<b>' + esc(titre) + '</b><span>' + esc(sub) + '</span></a>';
  }

  function vueBienvenue() {
    var h = '';
    h += '<div class="hero">';
    h += '  <div class="hero-ico">🇫🇷</div>';
    h += '  <h1>Français</h1>';
    h += '  <p>Antes de empezar necesito saber dónde estás parado. Son 40 preguntas ' +
         'de dificultad creciente. No las adivines: si no sabes, el resultado sirve más ' +
         'si respondes lo que de verdad crees.</p>';
    h += '  <p class="mut">Toma unos 10 minutos. Se puede repetir cuando quieras.</p>';
    h += '  <a class="btn big" href="#/placement">Empezar el examen</a>';
    h += '  <a class="btn ghost" href="#/lecons">Prefiero ver las lecciones</a>';
    h += '</div>';
    return h;
  }

  /* ======================================================================
     VISTA · PLACEMENT
     ====================================================================== */

  var placementEtat = null;

  function vuePlacement() {
    var P = global.PLACEMENT;
    if (!placementEtat) placementEtat = { i: 0, reponses: [] };
    var st = placementEtat;

    if (st.i >= P.length) return vuePlacementResultat();

    var q = P[st.i];
    var h = '';
    h += '<div class="quiz">';
    h += '  <div class="qtop"><span>' + (st.i + 1) + ' / ' + P.length + '</span>' +
         '<a class="lien" href="#/">Salir</a></div>';
    h += barre(((st.i) / P.length) * 100);
    h += '  <h2 class="qq">' + esc(q.q) + '</h2>';
    h += '  <div class="opts">';
    q.opts.forEach(function (o, k) {
      h += '<button class="opt" data-place="' + k + '">' + esc(o) + '</button>';
    });
    h += '  </div>';
    h += '</div>';
    return h;
  }

  function vuePlacementResultat() {
    var r = global.calculerNiveau(placementEtat.reponses);
    S.set('niveau', r.niveau);
    S.set('placement', r);
    S.marquerActivite();

    var textos = {
      A1: 'Estás construyendo los cimientos. Nada que lamentar: es donde todos empiezan y es el nivel donde más rápido se ve el avance.',
      A2: 'Te defiendes en lo cotidiano. El salto que viene — partitivos, pronombres y, en, pasados — es el que separa a quien sobrevive de quien conversa.',
      B1: 'Ya conversas. Ahora toca precisión: subjuntivo, relativos y matices. Es el nivel más largo de atravesar, así que no te midas en semanas.',
      B2: 'Manejas el idioma. Lo que queda es registro, literatura y argumentación. A partir de aquí se avanza leyendo y escuchando cosas reales, no con ejercicios.'
    };

    var h = '';
    h += '<div class="quiz resultat">';
    h += '  <p class="mut">Tu nivel</p>';
    h += '  <div class="niv">' + r.niveau + '</div>';
    h += '  <p class="lead">' + esc(textos[r.niveau]) + '</p>';
    h += '  <div class="card"><b>' + r.score + ' de ' + r.total + ' aciertos</b>';
    if (r.suivant) {
      h += '<span class="mut">Del nivel ' + r.suivant + ' acertaste el ' + r.progresSuivant + '%. ' +
           (r.progresSuivant >= 40
             ? 'Ya lo estás rozando: cuando termines ' + r.niveau + ' vas a ir rápido.'
             : 'Todavía no. Consolida ' + r.niveau + ' primero.') + '</span>';
    }
    h += '</div>';

    h += '<h2 class="sec">Por dónde vas floja y fuerte</h2>';
    h += '<div class="card">';
    r.diagnostic.forEach(function (d) {
      h += '<div class="diag"><span>' + esc(d.nom) + '</span>' + barre(d.taux) +
           '<b>' + d.taux + '%</b></div>';
    });
    h += '</div>';

    if (r.pointFaible) {
      h += '<div class="card note"><b>Lo más flojo: ' + esc(r.pointFaible.nom) + '</b>' +
           '<span>Ahí es donde más vas a ganar poniendo horas.</span></div>';
    }

    h += '<a class="btn big" href="#/">Empezar a estudiar</a>';
    h += '<a class="btn ghost" href="#/placement/reset">Repetir el examen</a>';
    h += '</div>';

    placementEtat = null;
    return h;
  }

  /* ======================================================================
     VISTA · LISTA DE LECCIONES
     ====================================================================== */

  function vueLecons() {
    var e = S.etat();
    var h = '<header class="hd"><div><h1>Lecciones</h1>' +
            '<p class="sub">' + toutesLecons().length + ' lecciones, de A1 a B2</p></div></header>';

    NIVEAUX.forEach(function (n) {
      var ls = toutesLecons().filter(function (l) { return l.lvl === n; });
      if (!ls.length) return;
      var faites = ls.filter(function (l) { return e.lecons[l.id] && e.lecons[l.id].terminee; }).length;
      h += '<h2 class="sec">' + chipNiveau(n) + ' <span class="mut">' + faites + '/' + ls.length + '</span></h2>';
      h += '<div class="liste">';
      ls.forEach(function (l) {
        var st = e.lecons[l.id] || {};
        var estado = st.terminee ? '✓' : (st.vue ? '·' : '');
        h += '<a class="ligne' + (st.terminee ? ' fait' : '') + '" href="#/lecon/' + l.id + '">';
        h += '  <span class="num">' + l.ordre + '</span>';
        h += '  <div><b>' + esc(l.titre) + '</b><span>' + esc(l.resume) + '</span></div>';
        h += '  <span class="etat">' + estado + '</span>';
        h += '</a>';
      });
      h += '</div>';
    });
    return h;
  }

  /* ======================================================================
     VISTA · LECCIÓN
     ====================================================================== */

  function rendreBloc(b) {
    switch (b.t) {
      case 'p':
        return '<p>' + esc(b.es) + '</p>';

      case 'regle':
        return '<div class="regle"><p>' + esc(b.es) + '</p>' +
               (b.fr ? '<div class="fr">' + esc(b.fr) + btnAudio(b.fr) + '</div>' : '') + '</div>';

      case 'ex':
        return '<div class="ex"><div class="fr">' + esc(b.fr) + btnAudio(b.fr) + '</div>' +
               '<div class="es">' + esc(b.es) + '</div></div>';

      case 'piege':
        return '<div class="piege"><b>Ojo</b><p>' + esc(b.es) + '</p></div>';

      case 'son':
        return '<div class="son"><b>Pronunciación</b>' +
               '<div class="fr">' + esc(b.fr) + btnAudio(b.fr) + '</div>' +
               '<p>' + esc(b.es) + '</p></div>';

      case 'table':
        var h = '<div class="tw"><table>';
        if (b.head && b.head.some(function (x) { return x; })) {
          h += '<thead><tr>' + b.head.map(function (x) { return '<th>' + esc(x) + '</th>'; }).join('') + '</tr></thead>';
        }
        h += '<tbody>';
        b.rows.forEach(function (r) {
          h += '<tr>' + r.map(function (c) { return '<td>' + esc(c) + '</td>'; }).join('') + '</tr>';
        });
        h += '</tbody></table></div>';
        return h;

      default:
        return '';
    }
  }

  function vueLecon(id) {
    var l = leconParId(id);
    if (!l) return '<p class="mut">No encuentro esa lección.</p>';
    S.marquerLecon(id, { vue: true });

    var h = '';
    h += '<div class="lecon-top"><a class="lien" href="#/lecons">← Lecciones</a>' +
         '<a class="lien" href="#/ecoute/' + l.id + '">🎧 Escuchar</a></div>';
    h += '<header class="hd"><div>' + chipNiveau(l.lvl) +
         '<h1>' + esc(l.titre) + '</h1><p class="sub">' + esc(l.resume) + '</p></div></header>';

    h += '<article class="theorie">';
    l.theorie.forEach(function (b) { h += rendreBloc(b); });
    h += '</article>';

    if (l.exercices && l.exercices.length) {
      h += '<h2 class="sec">Ejercicios</h2>';
      h += '<div id="exos" data-lecon="' + l.id + '"></div>';
    }
    return h;
  }

  /* ======================================================================
     MOTOR DE EJERCICIOS
     ====================================================================== */

  function rendreExercices(conteneur, exos, idBase, onFin) {
    var i = 0, corrects = 0;

    function suivant() {
      if (i >= exos.length) {
        var pct = Math.round((corrects / exos.length) * 100);
        conteneur.innerHTML =
          '<div class="card fin"><b>' + corrects + ' de ' + exos.length + ' correctas</b>' +
          '<span>' + (pct >= 80 ? 'Bien. Esto ya está.'
                    : pct >= 50 ? 'A medias. Vale la pena volver a leer la teoría.'
                                : 'Todavía no. Relee la lección y vuelve — no es tiempo perdido, es como funciona.') +
          '</span></div>';
        if (onFin) onFin(pct, corrects, exos.length);
        return;
      }

      var ex = exos[i];
      var idItem = idBase + ':' + i;
      var h = '<div class="exo"><div class="qtop"><span>' + (i + 1) + ' / ' + exos.length + '</span></div>';
      h += '<p class="qq">' + esc(ex.q) + '</p>';

      if (ex.type === 'qcm') {
        h += '<div class="opts">';
        ex.opts.forEach(function (o, k) {
          h += '<button class="opt" data-opt="' + k + '">' + esc(o) + '</button>';
        });
        h += '</div>';
      } else {
        var n = Array.isArray(ex.r) && ex.r.length > 1 && ex.q.split('___').length - 1 > 1
              ? ex.q.split('___').length - 1 : 1;
        h += '<div class="champs">';
        for (var k = 0; k < n; k++) {
          h += '<input class="inp" type="text" autocomplete="off" autocapitalize="off" ' +
               'spellcheck="false" data-idx="' + k + '" placeholder="…">';
        }
        h += '</div><button class="btn verif">Comprobar</button>';
      }
      h += '<div class="fb"></div></div>';
      conteneur.innerHTML = h;

      var fb = $('.fb', conteneur);

      function resoudre(ok, presque) {
        corrects += ok ? 1 : 0;
        S.enregistrerReponse(idItem, ok);
        var msg = ok ? '<b class="ok">Correcto</b>'
                : presque ? '<b class="presque">Casi — te faltaron los acentos</b>'
                          : '<b class="mal">No</b>';
        var sol = Array.isArray(ex.r)
                ? (ex.type === 'qcm' ? '' : ex.r.slice(0, 1).join(' '))
                : '';
        if (!ok) {
          if (ex.type === 'qcm') sol = ex.opts[ex.r];
          msg += '<div class="sol">Respuesta: <b>' + esc(sol) + '</b>' + btnAudio(sol) + '</div>';
        }
        if (ex.expl) msg += '<p class="expl">' + esc(ex.expl) + '</p>';
        msg += '<button class="btn suite">' + (i + 1 >= exos.length ? 'Ver resultado' : 'Siguiente') + '</button>';
        fb.innerHTML = msg;
        fb.classList.add('on');
        var b = $('.suite', fb);
        if (b) b.onclick = function () { i++; suivant(); };
      }

      if (ex.type === 'qcm') {
        Array.prototype.forEach.call(conteneur.querySelectorAll('.opt'), function (btn) {
          btn.onclick = function () {
            var k = +btn.getAttribute('data-opt');
            Array.prototype.forEach.call(conteneur.querySelectorAll('.opt'), function (b2) {
              b2.disabled = true;
              var kk = +b2.getAttribute('data-opt');
              if (kk === ex.r) b2.classList.add('bon');
              else if (kk === k) b2.classList.add('faux');
            });
            resoudre(k === ex.r, false);
          };
        });
      } else {
        var verifier = function () {
          var inputs = conteneur.querySelectorAll('.inp');
          var attendues = Array.isArray(ex.r) ? ex.r : [ex.r];
          var ok = true, presque = false;

          if (inputs.length === 1) {
            var v = inputs[0].value;
            var exact = attendues.some(function (a) { return normaliser(a) === normaliser(v); });
            var sin = attendues.some(function (a) { return sansAccents(a) === sansAccents(v); });
            ok = exact; presque = !exact && sin;
          } else {
            for (var k = 0; k < inputs.length; k++) {
              var att = attendues[k];
              if (att === undefined) continue;
              if (normaliser(att) !== normaliser(inputs[k].value)) {
                ok = false;
                if (sansAccents(att) === sansAccents(inputs[k].value)) presque = true;
              }
            }
            if (!ok && !presque) presque = false;
          }
          Array.prototype.forEach.call(inputs, function (x) { x.disabled = true; });
          var bv = $('.verif', conteneur); if (bv) bv.style.display = 'none';
          resoudre(ok, presque && !ok);
        };
        var bv = $('.verif', conteneur);
        if (bv) bv.onclick = verifier;
        var first = $('.inp', conteneur);
        if (first) {
          first.focus();
          Array.prototype.forEach.call(conteneur.querySelectorAll('.inp'), function (x) {
            x.onkeydown = function (ev) { if (ev.key === 'Enter') verifier(); };
          });
        }
      }
    }
    suivant();
  }

  /* ======================================================================
     VISTA · MODO ESCUCHA
     ====================================================================== */

  var cola = null;

  function construireCola(l) {
    var items = [];
    items.push({ texte: l.titre, langue: 'es', pause: 500 });
    items.push({ texte: l.resume, langue: 'es', pause: 600 });

    l.theorie.forEach(function (b) {
      if (b.t === 'p') items.push({ texte: b.es, langue: 'es', pause: 400 });
      else if (b.t === 'regle') {
        items.push({ texte: b.es, langue: 'es', pause: 250 });
        if (b.fr) items.push({ texte: b.fr, langue: 'fr', pause: 500 });
      } else if (b.t === 'ex') {
        items.push({ texte: b.fr, langue: 'fr', pause: 300 });
        items.push({ texte: b.es, langue: 'es', pause: 450 });
      } else if (b.t === 'piege') {
        items.push({ texte: 'Ojo. ' + b.es, langue: 'es', pause: 500 });
      } else if (b.t === 'son') {
        items.push({ texte: b.fr, langue: 'fr', pause: 250 });
        items.push({ texte: b.es, langue: 'es', pause: 450 });
      }
      /* Las tablas no se leen: en audio no se entienden. */
    });
    return items;
  }

  function vueEcoute(id) {
    var e = S.etat();
    if (!id) {
      var h = '<header class="hd"><div><h1>Escuchar</h1>' +
              '<p class="sub">La lección leída en voz alta. Explicación en español, ejemplos en francés. ' +
              'Para el coche, el metro o el gimnasio.</p></div></header><div class="liste">';
      toutesLecons().forEach(function (l) {
        h += '<a class="ligne" href="#/ecoute/' + l.id + '"><span class="num">🎧</span>' +
             '<div><b>' + esc(l.titre) + '</b><span>' + chipNiveau(l.lvl) + ' ' + l.minutos + ' min</span></div></a>';
      });
      return h + '</div>';
    }

    var l = leconParId(id);
    if (!l) return '<p class="mut">No encuentro esa lección.</p>';

    var h = '';
    h += '<div class="lecon-top"><a class="lien" href="#/ecoute">← Escuchar</a>' +
         '<a class="lien" href="#/lecon/' + l.id + '">📘 Leer</a></div>';
    h += '<header class="hd"><div>' + chipNiveau(l.lvl) + '<h1>' + esc(l.titre) + '</h1></div></header>';

    if (!global.Audio2.disponible()) {
      h += '<div class="card note"><b>Tu navegador no tiene síntesis de voz.</b>' +
           '<span>El modo escucha no va a funcionar aquí. En Safari de iPhone y en Chrome sí.</span></div>';
      return h;
    }

    h += '<div class="player">';
    h += '  <div class="pcontrols">';
    h += '    <button class="pbtn" id="pPrev" aria-label="Anterior">⏮</button>';
    h += '    <button class="pbtn main" id="pPlay" aria-label="Reproducir">▶</button>';
    h += '    <button class="pbtn" id="pNext" aria-label="Siguiente">⏭</button>';
    h += '  </div>';
    h += '  <div class="speed">Velocidad ' +
         '<button class="sp" data-sp="0.8">0.8×</button>' +
         '<button class="sp on" data-sp="1">1×</button>' +
         '<button class="sp" data-sp="1.2">1.2×</button></div>';
    h += '</div>';

    h += '<div class="script" id="script"></div>';
    return h;
  }

  function monterEcoute(id) {
    var l = leconParId(id);
    if (!l || !global.Audio2.disponible()) return;

    var items = construireCola(l);
    var script = $('#script');
    script.innerHTML = items.map(function (it, k) {
      return '<p class="li ' + it.langue + '" data-k="' + k + '">' + esc(it.texte) + '</p>';
    }).join('');

    cola = new global.Audio2.Cola();
    cola.charger(items);
    cola.vitesse = S.etat().prefs.vitesse || 1;

    var play = $('#pPlay');
    cola.onPas = function (k) {
      Array.prototype.forEach.call(script.querySelectorAll('.li'), function (p) {
        p.classList.remove('now');
      });
      var el = script.querySelector('[data-k="' + k + '"]');
      if (el) {
        el.classList.add('now');
        el.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    };
    cola.onFin = function () {
      play.textContent = '▶';
      S.marquerLecon(l.id, { vue: true });
    };

    play.onclick = function () {
      if (cola.actif) { cola.pause(); play.textContent = '▶'; }
      else { cola.reprendre(); play.textContent = '⏸'; }
    };
    $('#pPrev').onclick = function () { cola.allerA(cola.index - 1); };
    $('#pNext').onclick = function () { cola.allerA(cola.index + 1); };

    Array.prototype.forEach.call(document.querySelectorAll('.sp'), function (b) {
      b.onclick = function () {
        Array.prototype.forEach.call(document.querySelectorAll('.sp'), function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        cola.vitesse = parseFloat(b.getAttribute('data-sp'));
        S.set('prefs.vitesse', cola.vitesse);
        if (cola.actif) cola.jouer(cola.index);
      };
    });

    Array.prototype.forEach.call(script.querySelectorAll('.li'), function (p) {
      p.onclick = function () {
        cola.allerA(+p.getAttribute('data-k'));
        if (!cola.actif) { cola.jouer(cola.index); play.textContent = '⏸'; }
      };
    });
  }

  /* ======================================================================
     VISTA · VERBOS
     ====================================================================== */

  var NOMS_TEMPS = {
    present:'Presente', imparfait:'Imperfecto', futur:'Futuro simple',
    conditionnel:'Condicional', subjonctif:'Subjuntivo', imperatif:'Imperativo',
    passeSimple:'Passé simple (literario)',
    passeCompose:'Passé composé', plusQueParfait:'Pluscuamperfecto',
    futurAnterieur:'Futuro anterior', conditionnelPasse:'Condicional pasado',
    subjonctifPasse:'Subjuntivo pasado'
  };
  var ORDRE_TEMPS = ['present','passeCompose','imparfait','futur','conditionnel',
                     'subjonctif','imperatif','plusQueParfait','futurAnterieur',
                     'conditionnelPasse','subjonctifPasse','passeSimple'];

  function vueVerbes(inf) {
    var V = global.VERBES;
    if (inf) return vueVerbe(decodeURIComponent(inf));

    var h = '<header class="hd"><div><h1>Verbos</h1>' +
            '<p class="sub">' + V.length + ' verbos conjugados en 12 tiempos. ' +
            'Busca el que quieras.</p></div></header>';
    h += '<input class="search" id="qv" type="search" placeholder="Buscar un verbo… (parler, être, boire)" autocomplete="off">';
    h += '<div class="liste" id="lv"></div>';
    return h;
  }

  function monterVerbes() {
    var V = global.VERBES.slice().sort(function (a, b) { return (a.n || 999) - (b.n || 999); });
    var lv = $('#lv'), q = $('#qv');
    if (!lv) return;

    function rendre(filtre) {
      var f = sansAccents(filtre || '');
      var liste = f ? V.filter(function (v) {
        return sansAccents(v.i).indexOf(f) !== -1 || sansAccents(v.es).indexOf(f) !== -1;
      }) : V;
      if (!liste.length) { lv.innerHTML = '<p class="mut">Ningún verbo con eso.</p>'; return; }
      lv.innerHTML = liste.slice(0, 200).map(function (v) {
        return '<a class="ligne" href="#/verbes/' + encodeURIComponent(v.i) + '">' +
               '<span class="num g' + v.g + '">' + v.g + '</span>' +
               '<div><b>' + esc(v.i) + '</b><span>' + esc(v.es) + '</span></div>' +
               '<span class="etat">' + (v.lvl || '') + '</span></a>';
      }).join('');
    }
    rendre('');
    if (q) q.oninput = function () { rendre(q.value); };
  }

  function vueVerbe(inf) {
    var t = global.Conjugueur.tableau(inf);
    if (!t) return '<p class="mut">No tengo ese verbo. <a class="lien" href="#/verbes">Volver</a></p>';
    var v = global.Conjugueur.trouver(inf);
    var P = global.Conjugueur.PERSONNES;

    var h = '<div class="lecon-top"><a class="lien" href="#/verbes">← Verbos</a>' +
            '<a class="lien" href="#/drill/' + encodeURIComponent(inf) + '">⚡ Practicar este</a></div>';
    h += '<header class="hd"><div><h1>' + esc(t.infinitif) + btnAudio(t.infinitif) + '</h1>' +
         '<p class="sub">' + esc(t.traduction) + ' · grupo ' + v.g +
         ' · auxiliar <b>' + t.auxiliaire + '</b> · participio <b>' + esc(t.participe) + '</b></p></div></header>';

    if (v.ortho) {
      var notas = {
        ger:'Lleva una e ante a y o para conservar el sonido suave de la g.',
        cer:'La c se vuelve ç ante a y o para conservar el sonido de s.',
        yer:'La y se vuelve i ante e muda.',
        e_er:'La e del radical se abre en è ante terminación muda.',
        'é_er':'La é se abre en è en presente y subjuntivo, pero se conserva en futuro.',
        eler:'Dobla la l ante terminación muda.',
        eter:'Dobla la t ante terminación muda.'
      };
      if (notas[v.ortho]) h += '<div class="card note"><b>Cambio ortográfico</b><span>' + esc(notas[v.ortho]) + '</span></div>';
    }

    ORDRE_TEMPS.forEach(function (tp) {
      var f = t.temps[tp];
      if (!f) return;
      h += '<h2 class="sec">' + esc(NOMS_TEMPS[tp] || tp) + '</h2>';
      h += '<div class="conj">';
      if (tp === 'imperatif') {
        ['(tu)', '(nous)', '(vous)'].forEach(function (p, k) {
          if (f[k] === '—') return;
          h += '<div class="cl"><span class="pr">' + p + '</span><b>' + esc(f[k]) + ' !</b>' + btnAudio(f[k]) + '</div>';
        });
      } else {
        f.forEach(function (forme, k) {
          if (forme === '—') return;
          var complet = global.Conjugueur.avecPronom(v, tp, k);
          h += '<div class="cl"><span class="pr">' + esc(P[k]) + '</span><b>' + esc(forme) + '</b>' +
               btnAudio(complet) + '</div>';
        });
      }
      h += '</div>';
    });

    if (v.aux === 'être') {
      h += '<div class="card note"><b>Concordancia</b><span>Este verbo usa <b>être</b>, así que el participio ' +
           'concuerda con el sujeto: il est ' + esc(t.participe) + ', elle est ' + esc(t.participe) + 'e, ' +
           'ils sont ' + esc(t.participe) + 's, elles sont ' + esc(t.participe) + 'es.</span></div>';
    }
    return h;
  }

  /* ======================================================================
     VISTA · DRILL DE CONJUGACIÓN
     Los ejercicios no están escritos a mano: se generan del motor. Por eso
     no se acaban nunca.
     ====================================================================== */

  function vueDrill() {
    return '<header class="hd"><div><h1>Drill de verbos</h1>' +
           '<p class="sub">Conjuga. Se generan solos, así que no se terminan.</p></div></header>' +
           '<div id="drill"></div>';
  }

  function monterDrill(infFixe) {
    var cont = $('#drill');
    if (!cont) return;
    var e = S.etat();
    var niveauIdx = NIVEAUX.indexOf(e.niveau || 'A1');

    /* Los tiempos se desbloquean con el nivel: no tiene sentido pedir
       subjuntivo a alguien que va en A1. */
    var temps = ['present'];
    if (niveauIdx >= 1) temps = temps.concat(['passeCompose', 'imparfait', 'futur']);
    if (niveauIdx >= 2) temps = temps.concat(['conditionnel', 'subjonctif', 'plusQueParfait']);
    if (niveauIdx >= 3) temps = temps.concat(['passeSimple', 'conditionnelPasse']);

    var pool = global.VERBES.filter(function (v) {
      if (v.imperso) return false;
      if (infFixe) return v.i === infFixe;
      return NIVEAUX.indexOf(v.lvl || 'A1') <= niveauIdx;
    });
    if (!pool.length) pool = global.VERBES.filter(function (v) { return !v.imperso; });

    var serie = 0, aciertos = 0;

    function question() {
      var v = pool[Math.floor(Math.random() * pool.length)];
      var tp = temps[Math.floor(Math.random() * temps.length)];
      var formes = global.Conjugueur.conjuguer(v, tp);
      if (!formes) { question(); return; }

      var candidatos = [];
      formes.forEach(function (f, k) { if (f && f !== '—') candidatos.push(k); });
      if (!candidatos.length) { question(); return; }
      var p = candidatos[Math.floor(Math.random() * candidatos.length)];
      var attendu = formes[p];
      var pronom = tp === 'imperatif' ? ['(tu)', '(nous)', '(vous)'][p] : global.Conjugueur.PERSONNES[p];

      var h = '<div class="drill">';
      h += '  <div class="dtop"><span>' + esc(NOMS_TEMPS[tp]) + '</span><span class="mut">' +
           aciertos + '/' + serie + '</span></div>';
      h += '  <div class="dverbe">' + esc(v.i) + '<span class="mut"> — ' + esc(v.es) + '</span></div>';
      h += '  <div class="dprompt"><span class="pr">' + esc(pronom) + '</span>' +
           '<input class="inp big" id="dinp" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="…"></div>';
      h += '  <button class="btn" id="dok">Comprobar</button>';
      h += '  <div class="fb"></div>';
      h += '</div>';
      cont.innerHTML = h;

      var inp = $('#dinp'), fb = $('.fb', cont);
      inp.focus();

      function verifier() {
        var val = inp.value;
        var exact = normaliser(val) === normaliser(attendu);
        var sin = sansAccents(val) === sansAccents(attendu);
        serie++;
        if (exact) aciertos++;
        S.enregistrerReponse('drill:' + v.i + ':' + tp + ':' + p, exact);

        inp.disabled = true;
        $('#dok').style.display = 'none';
        var msg = exact ? '<b class="ok">Correcto</b>'
                : sin ? '<b class="presque">Casi — te faltaron los acentos</b>'
                      : '<b class="mal">No</b>';
        if (!exact) {
          msg += '<div class="sol">Es <b>' + esc(attendu) + '</b>' +
                 btnAudio(global.Conjugueur.avecPronom(v, tp, p)) + '</div>';
        }
        msg += '<button class="btn suite" id="dnext">Siguiente</button>';
        fb.innerHTML = msg;
        fb.classList.add('on');
        $('#dnext').onclick = question;
        $('#dnext').focus();
      }

      $('#dok').onclick = verifier;
      inp.onkeydown = function (ev) { if (ev.key === 'Enter') verifier(); };
    }
    question();
  }

  /* ======================================================================
     VISTA · VOCABULARIO (tarjetas)
     ====================================================================== */

  function vueVocab(deckId) {
    var V = global.VOCABULAIRE;
    if (!deckId) {
      var h = '<header class="hd"><div><h1>Vocabulario</h1>' +
              '<p class="sub">Tarjetas por tema. El género va incluido porque un sustantivo ' +
              'sin su artículo se aprende mal.</p></div></header><div class="grid">';
      V.forEach(function (d) {
        h += '<a class="tuile" href="#/vocab/' + d.id + '"><div class="ico">' + d.icone + '</div>' +
             '<b>' + esc(d.titre) + '</b><span>' + d.mots.length + ' palabras · ' + d.lvl + '</span></a>';
      });
      return h + '</div>';
    }
    return '<div class="lecon-top"><a class="lien" href="#/vocab">← Mazos</a></div><div id="cartes"></div>';
  }

  function monterVocab(deckId) {
    var cont = $('#cartes');
    if (!cont) return;
    var deck = global.VOCABULAIRE.filter(function (d) { return d.id === deckId; })[0];
    if (!deck) { cont.innerHTML = '<p class="mut">Ese mazo no existe.</p>'; return; }

    var mots = melanger(deck.mots);
    var i = 0, sabidas = 0, revele = false;

    function carte() {
      if (i >= mots.length) {
        cont.innerHTML = '<div class="card fin"><b>' + sabidas + ' de ' + mots.length + '</b>' +
          '<span>Las que fallaste vuelven en los repasos.</span></div>' +
          '<a class="btn" href="#/vocab">Otro mazo</a>';
        return;
      }
      var m = mots[i];
      var h = '<div class="qtop"><span>' + (i + 1) + ' / ' + mots.length + '</span>' +
              '<span class="mut">' + esc(deck.titre) + '</span></div>';
      h += '<div class="carte" id="carte">';
      h += '  <div class="cfr">' + esc(m[0]) + btnAudio(m[0]) + '</div>';
      h += '  <div class="ces" id="ces" hidden><b>' + esc(m[1]) + '</b>' +
           (m[2] ? '<span class="mut">' + esc(m[2]) + '</span>' : '') + '</div>';
      h += '</div>';
      h += '<div class="cbtns" id="cbtns"><button class="btn" id="reveler">Ver traducción</button></div>';
      cont.innerHTML = h;

      global.Audio2.dire(m[0], 'fr');

      $('#reveler').onclick = function () {
        revele = true;
        $('#ces').hidden = false;
        $('#cbtns').innerHTML =
          '<button class="btn mal2" id="nope">No la sabía</button>' +
          '<button class="btn ok2" id="yep">La sabía</button>';
        $('#nope').onclick = function () { juger(false); };
        $('#yep').onclick = function () { juger(true); };
      };

      function juger(ok) {
        if (ok) sabidas++;
        S.enregistrerReponse('vocab:' + deck.id + ':' + m[0], ok);
        i++; revele = false; carte();
      }
    }
    carte();
  }

  /* ======================================================================
     VISTA · JUEGO DE MEMORIA
     ====================================================================== */

  function vueMemoire() {
    return '<header class="hd"><div><h1>Memoria</h1>' +
           '<p class="sub">Une cada palabra francesa con su traducción. Ocho parejas.</p></div></header>' +
           '<div id="mem"></div>';
  }

  function monterMemoire() {
    var cont = $('#mem');
    if (!cont) return;
    var e = S.etat();
    var niveauIdx = NIVEAUX.indexOf(e.niveau || 'A1');

    var pool = [];
    global.VOCABULAIRE.forEach(function (d) {
      if (NIVEAUX.indexOf(d.lvl) <= niveauIdx) pool = pool.concat(d.mots);
    });
    if (pool.length < 8) global.VOCABULAIRE.forEach(function (d) { pool = pool.concat(d.mots); });

    var paires = melanger(pool).slice(0, 8);
    var cartes = [];
    paires.forEach(function (p, k) {
      cartes.push({ id: k, txt: p[0], lang: 'fr' });
      cartes.push({ id: k, txt: p[1], lang: 'es' });
    });
    cartes = melanger(cartes);

    var choisies = [], trouvees = 0, coups = 0, bloque = false;

    function rendre() {
      var h = '<div class="mtop"><span>' + trouvees + '/8 parejas</span><span class="mut">' + coups + ' intentos</span></div>';
      h += '<div class="mgrid">';
      cartes.forEach(function (c, k) {
        var cls = c.trouvee ? 'mc trouvee' : (choisies.indexOf(k) !== -1 ? 'mc on' : 'mc');
        h += '<button class="' + cls + ' ' + c.lang + '" data-k="' + k + '"' +
             (c.trouvee ? ' disabled' : '') + '>' + esc(c.txt) + '</button>';
      });
      h += '</div>';
      if (trouvees === 8) {
        h += '<div class="card fin"><b>Completo en ' + coups + ' intentos</b>' +
             '<span>' + (coups <= 10 ? 'Impecable.' : coups <= 16 ? 'Bien.' : 'Otra ronda y baja.') + '</span></div>' +
             '<button class="btn" id="rejouer">Otra ronda</button>';
      }
      cont.innerHTML = h;

      Array.prototype.forEach.call(cont.querySelectorAll('.mc'), function (b) {
        b.onclick = function () { cliquer(+b.getAttribute('data-k')); };
      });
      var rj = $('#rejouer');
      if (rj) rj.onclick = function () { monterMemoire(); };
    }

    function cliquer(k) {
      if (bloque || cartes[k].trouvee || choisies.indexOf(k) !== -1) return;
      choisies.push(k);
      if (cartes[k].lang === 'fr') global.Audio2.dire(cartes[k].txt, 'fr');
      rendre();

      if (choisies.length === 2) {
        coups++;
        var a = cartes[choisies[0]], b = cartes[choisies[1]];
        if (a.id === b.id) {
          a.trouvee = b.trouvee = true;
          trouvees++;
          S.enregistrerReponse('mem:' + a.txt, true);
          choisies = [];
          rendre();
        } else {
          bloque = true;
          setTimeout(function () { choisies = []; bloque = false; rendre(); }, 800);
        }
      }
    }
    rendre();
  }

  /* ======================================================================
     VISTA · EXPRESIONES
     ====================================================================== */

  var NOMS_REG = { fam:'familiar', cour:'corriente', form:'formal' };

  function vueExpressions() {
    var h = '<header class="hd"><div><h1>Expresiones</h1>' +
            '<p class="sub">Lo que los franceses dicen de verdad. Cada una con su registro: ' +
            'usar la equivocada con la persona equivocada se nota más que un error de gramática.</p></div></header>';

    global.EXPRESSIONS.forEach(function (g) {
      h += '<h2 class="sec">' + g.icone + ' ' + esc(g.titre) + '</h2>';
      h += '<div class="liste">';
      g.items.forEach(function (it) {
        h += '<div class="expr">';
        h += '  <div class="efr">' + esc(it.fr) + btnAudio(it.fr) + '</div>';
        h += '  <div class="ees">' + esc(it.es) + ' <span class="reg r-' + it.reg + '">' + NOMS_REG[it.reg] + '</span></div>';
        if (it.note) h += '  <div class="enote">' + esc(it.note) + '</div>';
        h += '</div>';
      });
      h += '</div>';
    });
    return h;
  }

  /* ======================================================================
     VISTA · RECURSOS
     ====================================================================== */

  function vueRessources() {
    var e = S.etat();
    var sugeridos = (global.PARCOURS_RESSOURCES || {})[e.niveau] || [];

    var h = '<header class="hd"><div><h1>Recursos</h1>' +
            '<p class="sub">Material externo, verificado uno por uno. Se enlaza a la raíz del canal ' +
            'o del sitio, no a videos sueltos: los videos se borran, los canales no.</p></div></header>';

    if (sugeridos.length) {
      h += '<div class="card note"><b>Para tu nivel (' + e.niveau + ') empieza por</b><span>' +
           esc(sugeridos.join(' · ')) + '</span></div>';
    }

    global.RESSOURCES.forEach(function (g) {
      h += '<h2 class="sec">' + g.icone + ' ' + esc(g.titre) + '</h2>';
      if (g.intro) h += '<p class="intro">' + esc(g.intro) + '</p>';
      h += '<div class="liste">';
      g.items.forEach(function (r) {
        var reco = sugeridos.indexOf(r.nom) !== -1;
        h += '<a class="res' + (reco ? ' reco' : '') + '" href="' + esc(r.url) + '" target="_blank" rel="noopener noreferrer">';
        h += '  <div class="rtop"><b>' + esc(r.nom) + '</b>' + chipNiveau(r.lvl === 'todos' ? 'A1' : r.lvl) +
             (reco ? '<span class="tag">para ti</span>' : '') + '</div>';
        h += '  <p class="rq">' + esc(r.quoi) + '</p>';
        h += '  <p class="rp">' + esc(r.pourquoi) + '</p>';
        h += '</a>';
      });
      h += '</div>';
    });
    return h;
  }

  /* ======================================================================
     VISTA · PROGRESO
     ====================================================================== */

  function vueProgres() {
    var e = S.etat();
    var st = global.SRS.statistiques(e.srs);
    var lecons = toutesLecons();
    var faites = lecons.filter(function (l) { return e.lecons[l.id] && e.lecons[l.id].terminee; });
    var pct = e.stats.totalExercices
            ? Math.round((e.stats.totalCorrects / e.stats.totalExercices) * 100) : 0;

    var h = '<header class="hd"><div><h1>Progreso</h1>' +
            '<p class="sub">Nivel ' + (e.niveau || '—') + '</p></div></header>';

    h += '<div class="stats3">';
    h += '  <div class="stat"><b>' + S.serie() + '</b><span>racha</span></div>';
    h += '  <div class="stat"><b>' + e.serie.record + '</b><span>récord</span></div>';
    h += '  <div class="stat"><b>' + pct + '%</b><span>aciertos</span></div>';
    h += '</div>';

    h += '<h2 class="sec">Lecciones</h2><div class="card">';
    NIVEAUX.forEach(function (n) {
      var ls = lecons.filter(function (l) { return l.lvl === n; });
      var f = ls.filter(function (l) { return e.lecons[l.id] && e.lecons[l.id].terminee; }).length;
      h += '<div class="diag"><span>' + n + '</span>' +
           barre(ls.length ? (f / ls.length) * 100 : 0) + '<b>' + f + '/' + ls.length + '</b></div>';
    });
    h += '</div>';

    h += '<h2 class="sec">Memoria</h2><div class="card">';
    h += '<div class="diag"><span>Por repasar hoy</span><b>' + st.du + '</b></div>';
    h += '<div class="diag"><span>Frescas (menos de 3 semanas)</span><b>' + st.jeunes + '</b></div>';
    h += '<div class="diag"><span>Asentadas</span><b>' + st.murs + '</b></div>';
    h += '<div class="diag"><span>Total en memoria</span><b>' + st.total + '</b></div>';
    h += '</div>';

    /* --- calendario de los últimos 30 días --- */
    h += '<h2 class="sec">Últimos 30 días</h2><div class="card"><div class="cal">';
    for (var d = 29; d >= 0; d--) {
      var fecha = new Date(Date.now() - d * 86400000);
      var k = S.jourISO(fecha);
      var j = e.stats.jours[k];
      var n = j ? j.exercices : 0;
      var cls = n === 0 ? '' : n < 5 ? 'n1' : n < 15 ? 'n2' : 'n3';
      h += '<i class="' + cls + '" title="' + k + ': ' + n + '"></i>';
    }
    h += '</div><span class="mut">Cada cuadro es un día. Más oscuro, más ejercicios.</span></div>';

    h += '<h2 class="sec">Respaldo</h2>';
    h += '<div class="card"><span>El progreso vive solo en este dispositivo. Para pasarlo del ' +
         'celular a la computadora, exporta aquí e importa allá.</span>';
    h += '<div class="cbtns"><button class="btn" id="exp">Exportar</button>' +
         '<button class="btn ghost" id="imp">Importar</button></div>';
    h += '<textarea class="ta" id="ta" hidden placeholder="Pega aquí el respaldo y dale a Importar"></textarea>';
    h += '<div class="fb" id="fbio"></div></div>';

    h += '<h2 class="sec">Ajustes</h2><div class="card">';
    h += '<div class="pref"><span>Modo</span><div class="seg">' +
         segBtn('mode', 'auto', 'Automático', e.prefs.mode) +
         segBtn('mode', 'pratique', 'Práctica', e.prefs.mode) +
         segBtn('mode', 'etude', 'Estudio', e.prefs.mode) + '</div></div>';
    h += '<div class="pref"><span>Tema</span><div class="seg">' +
         segBtn('theme', 'auto', 'Auto', e.prefs.theme) +
         segBtn('theme', 'clair', 'Claro', e.prefs.theme) +
         segBtn('theme', 'sombre', 'Oscuro', e.prefs.theme) + '</div></div>';
    var v = global.Audio2.voixTrouvees();
    h += '<div class="pref"><span>Voces</span><b class="mut">' +
         esc((v.fr || 'ninguna francesa') + ' · ' + (v.es || 'ninguna española')) + '</b></div>';
    h += '</div>';

    h += '<div class="card danger"><b>Empezar de cero</b>' +
         '<span>Borra el nivel, el progreso y la memoria. No se puede deshacer.</span>' +
         '<button class="btn ghost" id="reset">Borrar todo</button></div>';
    return h;
  }

  function segBtn(cle, val, label, actuel) {
    return '<button class="sg' + (actuel === val ? ' on' : '') + '" data-pref="' + cle +
           '" data-val="' + val + '">' + label + '</button>';
  }

  function monterProgres() {
    var exp = $('#exp'), imp = $('#imp'), ta = $('#ta'), fb = $('#fbio');

    if (exp) exp.onclick = function () {
      ta.hidden = false;
      ta.value = S.exporter();
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) {}
      if (navigator.clipboard) {
        navigator.clipboard.writeText(ta.value).then(function () {
          fb.innerHTML = '<b class="ok">Copiado al portapapeles</b>';
        }, function () {
          fb.innerHTML = '<b class="presque">Selecciona el texto y cópialo a mano</b>';
        });
      } else {
        fb.innerHTML = ok ? '<b class="ok">Copiado</b>'
                          : '<b class="presque">Selecciona el texto y cópialo a mano</b>';
      }
      fb.classList.add('on');
    };

    if (imp) imp.onclick = function () {
      if (ta.hidden) { ta.hidden = false; ta.value = ''; ta.focus();
        fb.innerHTML = '<span class="mut">Pega el respaldo y vuelve a darle a Importar.</span>';
        fb.classList.add('on'); return; }
      try {
        S.importer(ta.value);
        fb.innerHTML = '<b class="ok">Importado. Recargando…</b>';
        setTimeout(function () { location.hash = '#/'; location.reload(); }, 700);
      } catch (err) {
        fb.innerHTML = '<b class="mal">' + esc(err.message) + '</b>';
      }
      fb.classList.add('on');
    };

    Array.prototype.forEach.call(document.querySelectorAll('.sg'), function (b) {
      b.onclick = function () {
        S.set('prefs.' + b.getAttribute('data-pref'), b.getAttribute('data-val'));
        appliquerTheme();
        router();
      };
    });

    var rs = $('#reset');
    if (rs) rs.onclick = function () {
      if (rs.dataset.sur === '1') { S.effacer(); location.hash = '#/'; location.reload(); }
      else { rs.dataset.sur = '1'; rs.textContent = '¿Seguro? Toca otra vez'; rs.classList.add('mal2'); }
    };
  }

  /* ======================================================================
     SESIÓN DE REPASO
     ====================================================================== */

  function vueRepaso() {
    return '<header class="hd"><div><h1>Repaso</h1>' +
           '<p class="sub">Lo que estás a punto de olvidar, según cuándo lo viste por última vez.</p></div></header>' +
           '<div id="rep"></div>';
  }

  function monterRepaso() {
    var cont = $('#rep');
    if (!cont) return;
    var e = S.etat();
    var dus = global.SRS.aReviser(e.srs);

    if (!dus.length) {
      cont.innerHTML = '<div class="card fin"><b>Nada pendiente hoy</b>' +
        '<span>Vuelve mañana, o adelanta con una lección nueva.</span></div>' +
        '<a class="btn" href="#/lecons">Ver lecciones</a>';
      return;
    }

    /* Cada ítem guarda de dónde vino en su propio id, así se reconstruye
       la pregunta original sin duplicar los datos. */
    var exos = [];
    dus.slice(0, 20).forEach(function (it) {
      var p = it.id.split(':');
      if (p[0] === 'vocab') {
        var deck = global.VOCABULAIRE.filter(function (d) { return d.id === p[1]; })[0];
        if (!deck) return;
        var mot = deck.mots.filter(function (m) { return m[0] === p.slice(2).join(':'); })[0];
        if (!mot) return;
        var otros = melanger(deck.mots.filter(function (m) { return m[0] !== mot[0]; })).slice(0, 2);
        var opts = melanger([mot[1]].concat(otros.map(function (m) { return m[1]; })));
        exos.push({ type:'qcm', q:'¿Qué significa «' + mot[0] + '»?', opts:opts,
                    r:opts.indexOf(mot[1]), expl:mot[2] || '', _id:it.id });
      } else if (p[0] === 'drill') {
        var v = global.Conjugueur.trouver(p[1]);
        if (!v) return;
        var tp = p[2], per = +p[3];
        var f = global.Conjugueur.conjuguer(v, tp);
        if (!f || !f[per] || f[per] === '—') return;
        var pron = tp === 'imperatif' ? ['(tu)','(nous)','(vous)'][per] : global.Conjugueur.PERSONNES[per];
        exos.push({ type:'trou', q:v.i + ' — ' + (NOMS_TEMPS[tp] || tp) + ' — ' + pron + ' ___',
                    r:[f[per]], expl:v.es, _id:it.id });
      } else {
        var l = leconParId(p[0]);
        if (!l || !l.exercices) return;
        var ex = l.exercices[+p[1]];
        if (!ex) return;
        var copia = JSON.parse(JSON.stringify(ex));
        copia._id = it.id;
        exos.push(copia);
      }
    });

    if (!exos.length) {
      cont.innerHTML = '<div class="card fin"><b>Nada que reconstruir</b>' +
        '<span>Los pendientes venían de contenido que ya no existe. Se limpiaron solos.</span></div>';
      return;
    }
    rendreExercices(cont, exos, 'repaso', null);
  }

  /* ======================================================================
     TEMA Y NAVEGACIÓN
     ====================================================================== */

  function appliquerTheme() {
    var t = S.etat().prefs.theme;
    document.documentElement.setAttribute('data-theme',
      t === 'auto' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'sombre' : 'clair') : t);
  }

  function rendreNav() {
    var mode = modeActuel();
    var items = mode === 'pratique'
      ? [['#/', '🏠', 'Inicio'], ['#/vocab', '🃏', 'Tarjetas'], ['#/drill', '⚡', 'Drill'],
         ['#/ecoute', '🎧', 'Oír'], ['#/progres', '📊', 'Tú']]
      : [['#/', '🏠', 'Inicio'], ['#/lecons', '📚', 'Lecciones'], ['#/verbes', '📖', 'Verbos'],
         ['#/vocab', '🃏', 'Vocab'], ['#/ressources', '🌐', 'Recursos'], ['#/progres', '📊', 'Progreso']];

    var h = items.map(function (it) {
      var actif = location.hash === it[0] || (it[0] !== '#/' && location.hash.indexOf(it[0]) === 0);
      return '<a class="nv' + (actif ? ' on' : '') + '" href="' + it[0] + '">' +
             '<i>' + it[1] + '</i><span>' + it[2] + '</span></a>';
    }).join('');
    var nav = $('#nav');
    if (nav) nav.innerHTML = h;
  }

  /* ======================================================================
     ROUTER
     ====================================================================== */

  function router() {
    if (cola) { cola.arreter(); cola = null; }
    global.Audio2.stop();

    var hash = location.hash.replace(/^#\/?/, '');
    var parts = hash.split('/').filter(Boolean);
    var vue = parts[0] || '';
    var arg = parts[1] ? parts.slice(1).join('/') : null;

    var html = '', apres = null;

    switch (vue) {
      case '':
        html = vueAccueil(); break;

      case 'placement':
        if (arg === 'reset') { placementEtat = null; location.hash = '#/placement'; return; }
        html = vuePlacement(); break;

      case 'lecons':
        html = vueLecons(); break;

      case 'lecon':
        html = vueLecon(arg);
        apres = function () {
          var c = $('#exos');
          if (!c) return;
          var l = leconParId(arg);
          rendreExercices(c, l.exercices, l.id, function (pct) {
            S.marquerLecon(l.id, { terminee: true, score: pct });
          });
        };
        break;

      case 'ecoute':
        html = vueEcoute(arg);
        if (arg) apres = function () { monterEcoute(arg); };
        break;

      case 'verbes':
        html = vueVerbes(arg);
        if (!arg) apres = monterVerbes;
        break;

      case 'drill':
        html = vueDrill();
        apres = function () { monterDrill(arg ? decodeURIComponent(arg) : null); };
        break;

      case 'vocab':
        html = vueVocab(arg);
        if (arg) apres = function () { monterVocab(arg); };
        break;

      case 'memoire':
        html = vueMemoire(); apres = monterMemoire; break;

      case 'expressions':
        html = vueExpressions(); break;

      case 'ressources':
        html = vueRessources(); break;

      case 'progres':
        html = vueProgres(); apres = monterProgres; break;

      case 'exercices':
        html = vueRepaso(); apres = monterRepaso; break;

      default:
        html = '<p class="mut">Esa página no existe. <a class="lien" href="#/">Volver al inicio</a></p>';
    }

    app.innerHTML = html;
    rendreNav();
    if (apres) apres();

    /* El navegador restaura la posición de scroll DESPUÉS de procesar el
       hashchange, así que un scrollTo aquí mismo se pierde. Hay que dejarlo
       para el siguiente cuadro. */
    window.scrollTo(0, 0);
    requestAnimationFrame(function () { window.scrollTo(0, 0); });
  }

  /* ======================================================================
     ARRANQUE
     ====================================================================== */

  function demarrer() {
    app = $('#app');
    appliquerTheme();

    /* Cada vista es una pantalla nueva, no una posición dentro de un
       documento: la restauración automática de scroll estorba. */
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

    /* Delegación: un solo handler para todos los botones de audio y para
       las opciones del examen, en vez de re-enganchar en cada render. */
    document.addEventListener('click', function (ev) {
      var say = ev.target.closest ? ev.target.closest('.say') : null;
      if (say) {
        ev.preventDefault();
        global.Audio2.dire(say.getAttribute('data-say'), say.getAttribute('data-lang') || 'fr',
                           S.etat().prefs.vitesse);
        return;
      }
      var pl = ev.target.closest ? ev.target.closest('[data-place]') : null;
      if (pl && placementEtat) {
        placementEtat.reponses[placementEtat.i] = +pl.getAttribute('data-place');
        placementEtat.i++;
        router();
      }
    });

    window.addEventListener('hashchange', router);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener
      ? window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', appliquerTheme)
      : null;

    /* Si cambia el ancho cruzando el umbral, el modo automático cambia y
       la navegación tiene que reflejarlo. */
    var anchoAnterior = window.innerWidth < 820;
    window.addEventListener('resize', function () {
      var ahora = window.innerWidth < 820;
      if (ahora !== anchoAnterior) { anchoAnterior = ahora; rendreNav(); }
    });

    if (!location.hash) location.hash = '#/';
    router();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', demarrer);
  } else {
    demarrer();
  }
})(typeof window !== 'undefined' ? window : globalThis);
