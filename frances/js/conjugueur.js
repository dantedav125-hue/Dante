/* ==========================================================================
   CONJUGUEUR — motor de conjugación francesa
   --------------------------------------------------------------------------
   El francés parece irregular pero casi no lo es. Casi todo verbo se arma con
   RADICAL + TERMINACIÓN, y las terminaciones son las mismas para todos según
   el tiempo. Lo único que cambia de verbo a verbo son los radicales.

   Por eso este motor guarda radicales, no formas completas. Un verbo como
   "boire" no se guarda con sus 42 formas: se guarda con sus 3 radicales de
   presente (boi- / buv- / boiv-) y el motor arma todo lo demás.

   Solo cuando un verbo es de veras caótico (être, aller, avoir) se guardan
   las formas completas a mano.
   ========================================================================== */

(function (global) {
  'use strict';

  /* --- las seis personas, siempre en este orden ------------------------- */
  var PERSONNES = ['je', 'tu', 'il/elle', 'nous', 'vous', 'ils/elles'];
  var PRON_REFL = ['me', 'te', 'se', 'nous', 'vous', 'se'];

  /* --- terminaciones ----------------------------------------------------
     Estas tablas son el corazón. Memorízalas y ya sabes conjugar francés. */
  var TERM = {
    present: {
      er:     ['e',  'es', 'e',  'ons', 'ez', 'ent'],
      ir_iss: ['is', 'is', 'it', 'issons', 'issez', 'issent'],
      ir_nu:  ['s',  's',  't',  'ons', 'ez', 'ent'],
      re:     ['s',  's',  '',   'ons', 'ez', 'ent'],
      oir:    ['s',  's',  't',  'ons', 'ez', 'ent']
    },
    imparfait:    ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
    futur:        ['ai',  'as',  'a',   'ons',  'ez',  'ont'],
    conditionnel: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
    subjonctif:   ['e',   'es',  'e',   'ions', 'iez', 'ent'],
    passeSimple: {
      a: ['ai', 'as', 'a',  'âmes', 'âtes', 'èrent'],
      i: ['is', 'is', 'it', 'îmes', 'îtes', 'irent'],
      u: ['us', 'us', 'ut', 'ûmes', 'ûtes', 'urent'],
      in:['ins','ins','int','înmes','întes','inrent']
    }
  };

  /* --- vocales que disparan elisión (j' en vez de je) -------------------- */
  var VOYELLES = 'aàâeéèêëiîïoôuùûüyh';


  /* ======================================================================
     CAMBIOS ORTOGRÁFICOS DE LOS VERBOS EN -ER
     ----------------------------------------------------------------------
     No son irregularidades: son ajustes para que el sonido no cambie.
     "manger" suena /ʒ/, y "mangons" sonaría /g/, por eso "mangeons".
     ====================================================================== */

  /* ¿la terminación empieza con a u o? entonces -cer y -ger se ajustan */
  function ajusteCG(radical, terminaison, infinitif) {
    if (!/^[ao]/.test(terminaison)) return radical;
    if (/cer$/.test(infinitif) && /c$/.test(radical)) {
      return radical.slice(0, -1) + 'ç';
    }
    if (/ger$/.test(infinitif) && /g$/.test(radical)) {
      return radical + 'e';
    }
    return radical;
  }

  /* terminación muda = e, es, ent (las que no se pronuncian).
     Ante ellas, la vocal del radical se abre o la consonante se dobla. */
  function terminaisonMuette(t) {
    return t === 'e' || t === 'es' || t === 'ent' || t === '';
  }

  function ajusteRadicalER(radical, terminaison, infinitif, ortho) {
    var muette = terminaisonMuette(terminaison);
    if (!muette) return radical;

    /* -yer : payer -> je paie, employer -> j'emploie */
    if (ortho === 'yer' || /[aou]yer$/.test(infinitif)) {
      if (/y$/.test(radical)) return radical.slice(0, -1) + 'i';
    }

    /* -eler / -eter se parten en dos familias y NO se pueden deducir de la
       terminación. La mayoría dobla la consonante:
         appeler -> j'appelle · jeter -> je jette
       Pero una lista cerrada toma acento grave:
         acheter -> j'achète · geler -> il gèle · modeler -> je modèle
       Por eso el verbo declara su familia en `ortho` y aquí solo obedecemos. */
    if (ortho === 'eler') return /el$/.test(radical) ? radical + 'l' : radical;
    if (ortho === 'eter') return /et$/.test(radical) ? radical + 't' : radical;

    /* e + consonante + er : lever -> je lève, acheter -> j'achète */
    if (/e[^aeiouéèêë]$/.test(radical)) {
      return radical.replace(/e([^aeiouéèêë])$/, 'è$1');
    }

    /* é + consonante + er : préférer -> je préfère */
    if (/é[^aeiouéèêë]$/.test(radical)) {
      return radical.replace(/é([^aeiouéèêë])$/, 'è$1');
    }

    return radical;
  }

  /* ======================================================================
     RADICALES
     ====================================================================== */

  /* Infinitivo que se usa para conjugar. Los pronominales ("se lever")
     conjugan sobre su verbo desnudo ("lever") y luego se les antepone el
     pronombre reflexivo. */
  function inf(v) { return v.i_conj || v.base || v.i; }

  /* Devuelve el tipo de terminación de presente según el verbo */
  function typePresent(v) {
    if (v.t) return v.t;                    // forzado en los datos
    if (v.g === 1) return 'er';
    if (v.g === 2) return 'ir_iss';
    var x = inf(v);
    if (/re$/.test(x)) return 're';
    if (/oir$/.test(x)) return 'oir';
    return 'ir_nu';
  }

  /* Radical por defecto = infinitivo sin su terminación */
  function radicalBase(v) {
    /* el orden importa: 'oir' va primero o 'recevoir' perdería solo la 'ir' */
    return inf(v).replace(/(oir|er|ir|re)$/, '');
  }

  /* Los tres radicales de presente: [singular, nous/vous, ils]
     Si el verbo no declara nada, los tres son el mismo. */
  function radicauxPresent(v) {
    if (v.r && v.r.pres) {
      var r = v.r.pres;
      return typeof r === 'string' ? [r, r, r] : r;
    }
    var base = radicalBase(v);
    return [base, base, base];
  }

  /* ======================================================================
     LOS TIEMPOS SIMPLES
     ====================================================================== */

  function present(v) {
    if (v.f && v.f.present) return v.f.present.slice();
    var rads = radicauxPresent(v);
    var type = typePresent(v);
    var terms = TERM.present[type].slice();

    /* -ir del grupo 2: el -iss- ya viene en la terminación, el radical es
       el mismo para las seis personas */
    var out = [];
    for (var p = 0; p < 6; p++) {
      var rad = p < 3 ? rads[0] : (p < 5 ? rads[1] : rads[2]);
      var t = terms[p];

      if (v.g === 1) {
        rad = ajusteRadicalER(rad, t, inf(v), v.ortho);
        rad = ajusteCG(rad, t, inf(v));
      } else {
        rad = ajusteCG(rad, t, inf(v));
      }

      /* 3ª persona de los verbos en -re: lleva -t, salvo que el radical ya
         termine en d o en t, porque esa consonante ya hace el trabajo.
           vendre -> il vend      (radical vend, ya trae la d)
           mettre -> il met       (radical met, ya trae la t)
           lire   -> il lit       (radical li, necesita la t) */
      if (type === 're' && p === 2) t = /[dt]$/.test(rad) ? '' : 't';

      out.push(rad + t);
    }
    return out;
  }

  /* Imperfecto: SIEMPRE el radical de "nous" del presente, sin excepción
     en toda la lengua salvo "être". Por eso vale la pena aprenderse el
     presente bien: te regala el imperfecto entero. */
  function imparfait(v) {
    if (v.f && v.f.imparfait) return v.f.imparfait.slice();
    var rad;
    if (v.r && v.r.imp) {
      rad = v.r.imp;
    } else if (v.g === 1) {
      /* Ojo: NO derivar de "nous mangeons", porque esa e es un ajuste ante
         la o y no pertenece al radical. "nous mangions" no lleva e. */
      rad = inf(v).replace(/er$/, '');
    } else {
      var nous = present(v)[3];
      rad = nous.replace(/ons$/, '');
    }
    var out = [];
    for (var p = 0; p < 6; p++) {
      var r = rad, t = TERM.imparfait[p];
      if (v.g === 1) r = ajusteCG(r, t, inf(v));
      out.push(r + t);
    }
    return out;
  }

  /* Futuro: radical = infinitivo (los -re pierden la e final).
     El condicional usa EXACTAMENTE el mismo radical: aprende uno, tienes dos. */
  function radicalFutur(v) {
    if (v.r && v.r.fut) return v.r.fut;
    var x = inf(v);
    var base = x.replace(/e$/, '');
    if (v.g === 1) {
      /* Los cambios ortográficos también pegan en el futuro:
         acheter -> j'achèterai, appeler -> j'appellerai.
         PERO los verbos en é+consonante+er conservan la é en futuro y
         condicional: je préférerai, j'espérerai. Solo cambian en presente
         y subjuntivo. */
      var rad = x.replace(/er$/, '');
      if (/é[^aeiouéèêë]$/.test(rad)) return rad + 'er';
      rad = ajusteRadicalER(rad, 'e', x, v.ortho);
      return rad + 'er';
    }
    return base;
  }

  function futur(v) {
    if (v.f && v.f.futur) return v.f.futur.slice();
    var rad = radicalFutur(v);
    return TERM.futur.map(function (t) { return rad + t; });
  }

  function conditionnel(v) {
    if (v.f && v.f.conditionnel) return v.f.conditionnel.slice();
    var rad = radicalFutur(v);
    return TERM.conditionnel.map(function (t) { return rad + t; });
  }

  /* Subjuntivo: radical = el de "ils" del presente.
     nous/vous toman el radical del imperfecto. */
  function subjonctif(v) {
    if (v.f && v.f.subjonctif) return v.f.subjonctif.slice();
    var radIls, radNous;
    if (v.r && v.r.sub) {
      var s = v.r.sub;
      if (typeof s === 'string') { radIls = s; radNous = s; }
      else { radIls = s[0]; radNous = s[1]; }
    } else {
      radIls = present(v)[5].replace(/ent$/, '');
      radNous = imparfait(v)[3].replace(/ions$/, '');
    }
    var out = [];
    for (var p = 0; p < 6; p++) {
      var rad = (p === 3 || p === 4) ? radNous : radIls;
      var t = TERM.subjonctif[p];
      if (v.g === 1) { rad = ajusteRadicalER(rad, t, inf(v), v.ortho); rad = ajusteCG(rad, t, inf(v)); }
      out.push(rad + t);
    }
    return out;
  }

  /* Passé simple: no se habla, pero se LEE. Toda novela francesa está
     escrita en este tiempo. Si quieres leer literatura, lo necesitas. */
  function passeSimple(v) {
    if (v.f && v.f.passeSimple) return v.f.passeSimple.slice();
    var type, rad;
    if (v.r && v.r.ps) {
      rad = v.r.ps.rad !== undefined ? v.r.ps.rad : v.r.ps;
      type = v.r.ps.t || 'i';
    } else if (v.g === 1) {
      rad = inf(v).replace(/er$/, ''); type = 'a';
    } else if (v.g === 2) {
      rad = inf(v).replace(/ir$/, ''); type = 'i';
    } else {
      rad = radicalBase(v); type = 'i';
    }
    var terms = TERM.passeSimple[type];
    var out = [];
    for (var p = 0; p < 6; p++) {
      var r = rad, t = terms[p];
      if (v.g === 1) r = ajusteCG(r, t, inf(v));
      out.push(r + t);
    }
    return out;
  }

  /* Imperativo: tú, nosotros, ustedes. Sale del presente.
     Los -er pierden la -s de "tu": tu parles -> Parle ! */
  function imperatif(v) {
    if (v.f && v.f.imperatif) return v.f.imperatif.slice();
    var pr = present(v);
    var tu = pr[1];
    if (v.g === 1 || /^(aller|ouvrir|offrir|souffrir|couvrir|découvrir|cueillir)$/.test(inf(v))) {
      tu = tu.replace(/es$/, 'e').replace(/^vas$/, 'va');
    }
    return [tu, pr[3], pr[4]];
  }

  /* ======================================================================
     LOS TIEMPOS COMPUESTOS
     auxiliar conjugado + participio pasado. Nada más.
     ====================================================================== */

  var AVOIR = {
    i: 'avoir', g: 3, aux: 'avoir', pp: 'eu',
    f: {
      present:      ['ai', 'as', 'a', 'avons', 'avez', 'ont'],
      imparfait:    ['avais','avais','avait','avions','aviez','avaient'],
      futur:        ['aurai','auras','aura','aurons','aurez','auront'],
      conditionnel: ['aurais','aurais','aurait','aurions','auriez','auraient'],
      subjonctif:   ['aie','aies','ait','ayons','ayez','aient'],
      passeSimple:  ['eus','eus','eut','eûmes','eûtes','eurent'],
      imperatif:    ['aie','ayons','ayez']
    }
  };

  var ETRE = {
    i: 'être', g: 3, aux: 'avoir', pp: 'été',
    f: {
      present:      ['suis','es','est','sommes','êtes','sont'],
      imparfait:    ['étais','étais','était','étions','étiez','étaient'],
      futur:        ['serai','seras','sera','serons','serez','seront'],
      conditionnel: ['serais','serais','serait','serions','seriez','seraient'],
      subjonctif:   ['sois','sois','soit','soyons','soyez','soient'],
      passeSimple:  ['fus','fus','fut','fûmes','fûtes','furent'],
      imperatif:    ['sois','soyons','soyez']
    }
  };

  /* Concordancia del participio con être: il est allé / elle est allée /
     ils sont allés / elles sont allées. Damos la forma masculina y marcamos
     la variante para que la app la pueda mostrar. */
  function participeAccorde(pp, personne, aux) {
    if (aux !== 'être') return pp;
    if (personne === 3 || personne === 5) return pp + (pp.match(/s$/) ? '' : 's');
    return pp;
  }

  function compose(v, tempsAux) {
    var auxV = v.aux === 'être' ? ETRE : AVOIR;
    var formesAux = conjuguerSimple(auxV, tempsAux);
    var out = [];
    for (var p = 0; p < 6; p++) {
      var pp = participeAccorde(v.pp, p, v.aux);
      out.push(formesAux[p] + ' ' + pp);
    }
    return out;
  }

  /* ======================================================================
     API
     ====================================================================== */

  var TEMPS_SIMPLES = {
    present: present,
    imparfait: imparfait,
    futur: futur,
    conditionnel: conditionnel,
    subjonctif: subjonctif,
    passeSimple: passeSimple,
    imperatif: imperatif
  };

  var TEMPS_COMPOSES = {
    passeCompose:      'present',
    plusQueParfait:    'imparfait',
    futurAnterieur:    'futur',
    conditionnelPasse: 'conditionnel',
    subjonctifPasse:   'subjonctif'
  };

  function conjuguerSimple(v, temps) {
    var fn = TEMPS_SIMPLES[temps];
    if (!fn) throw new Error('Tiempo desconocido: ' + temps);
    return fn(v);
  }

  function conjuguer(verbe, temps) {
    var v = typeof verbe === 'string' ? trouver(verbe) : verbe;
    if (!v) return null;
    if (TEMPS_COMPOSES[temps]) return compose(v, TEMPS_COMPOSES[temps]);
    return conjuguerSimple(v, temps);
  }

  /* Forma lista para mostrar: con pronombre, elisión y reflexivo */
  function avecPronom(v, temps, p) {
    var formes = conjuguer(v, temps);
    if (!formes) return '';
    if (temps === 'imperatif') return formes[p] + ' !';
    var forme = formes[p];
    var pron = PERSONNES[p];
    if (v.p) {
      var refl = PRON_REFL[p];
      /* me, te, se eliden ante vocal; nous y vous no. Y "ils s’amusent" es
         persona 5, así que no basta con mirar las tres primeras. */
      var elide = (p !== 3 && p !== 4) &&
                  new RegExp('^[' + VOYELLES + ']').test(forme) && !v.h;
      forme = elide ? refl.slice(0, -1) + '\u2019' + forme : refl + ' ' + forme;
    }
    if (p === 0) {
      pron = new RegExp('^[' + VOYELLES + ']').test(forme) && !v.h ? 'j\u2019' : 'je';
      /* j’ se pega a la forma; je lleva espacio */
      return pron === 'j\u2019' ? pron + forme : pron + ' ' + forme;
    }
    return pron + ' ' + forme;
  }

  /* --- búsqueda --------------------------------------------------------- */
  function trouver(infinitif) {
    var db = global.VERBES || [];
    for (var k = 0; k < db.length; k++) {
      if (db[k].i === infinitif) return db[k];
    }
    if (infinitif === 'avoir') return AVOIR;
    if (infinitif === 'être') return ETRE;
    return null;
  }

  function tableau(verbe) {
    var v = typeof verbe === 'string' ? trouver(verbe) : verbe;
    if (!v) return null;
    var out = { infinitif: v.i, traduction: v.es, participe: v.pp, auxiliaire: v.aux, temps: {} };
    Object.keys(TEMPS_SIMPLES).forEach(function (t) { out.temps[t] = conjuguer(v, t); });
    Object.keys(TEMPS_COMPOSES).forEach(function (t) { out.temps[t] = conjuguer(v, t); });
    return out;
  }

  global.Conjugueur = {
    conjuguer: conjuguer,
    tableau: tableau,
    trouver: trouver,
    avecPronom: avecPronom,
    PERSONNES: PERSONNES,
    TERM: TERM,
    AVOIR: AVOIR,
    ETRE: ETRE,
    TEMPS_SIMPLES: Object.keys(TEMPS_SIMPLES),
    TEMPS_COMPOSES: Object.keys(TEMPS_COMPOSES)
  };
})(typeof window !== 'undefined' ? window : globalThis);
