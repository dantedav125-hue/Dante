/* ==========================================================================
   STORE — todo lo que la app recuerda
   --------------------------------------------------------------------------
   Vive en localStorage, o sea en este dispositivo y nada más. Por eso hay
   exportar e importar: es la forma de pasar el progreso del celular a la
   computadora y al revés.

   Cada acceso va envuelto en try/catch porque en modo privado de Safari
   localStorage existe pero lanza al escribir.
   ========================================================================== */

(function (global) {
  'use strict';

  var CLE = 'frances.v1';

  var DEFAUT = {
    version: 1,
    niveau: null,            // A1..B2, lo fija el examen
    placement: null,         // resultado completo del examen
    lecons: {},              // id -> {vue, terminee, score, date}
    srs: {},                 // id -> ítem de repaso espaciado
    stats: { jours:{}, totalExercices:0, totalCorrects:0, minutes:0 },
    prefs: { mode:'auto', vitesse:1, theme:'auto', voixAuto:true },
    serie: { actuelle:0, record:0, dernierJour:null }
  };

  function lire() {
    try {
      var brut = localStorage.getItem(CLE);
      if (!brut) return JSON.parse(JSON.stringify(DEFAUT));
      var d = JSON.parse(brut);
      /* Fusión superficial por si la app creció desde la última visita y
         hay claves nuevas que el guardado antiguo no tiene. */
      Object.keys(DEFAUT).forEach(function (k) {
        if (d[k] === undefined) d[k] = JSON.parse(JSON.stringify(DEFAUT[k]));
        else if (typeof DEFAUT[k] === 'object' && !Array.isArray(DEFAUT[k]) && DEFAUT[k] !== null) {
          Object.keys(DEFAUT[k]).forEach(function (k2) {
            if (d[k][k2] === undefined) d[k][k2] = DEFAUT[k][k2];
          });
        }
      });
      return d;
    } catch (e) {
      return JSON.parse(JSON.stringify(DEFAUT));
    }
  }

  var etat = lire();

  function ecrire() {
    try { localStorage.setItem(CLE, JSON.stringify(etat)); }
    catch (e) { /* modo privado, cuota llena: la sesión sigue en memoria */ }
  }

  /* --- racha ------------------------------------------------------------ */
  function jourISO(d) {
    d = d || new Date();
    return d.getFullYear() + '-' +
           String(d.getMonth() + 1).padStart(2, '0') + '-' +
           String(d.getDate()).padStart(2, '0');
  }

  function marquerActivite() {
    var hoy = jourISO();
    var s = etat.serie;
    if (s.dernierJour === hoy) return;

    var hier = new Date(Date.now() - 86400000);
    s.actuelle = (s.dernierJour === jourISO(hier)) ? s.actuelle + 1 : 1;
    s.dernierJour = hoy;
    if (s.actuelle > s.record) s.record = s.actuelle;

    etat.stats.jours[hoy] = etat.stats.jours[hoy] || { exercices:0, corrects:0 };
    ecrire();
  }

  /* Si pasó más de un día sin actividad, la racha ya se rompió aunque el
     usuario no haya abierto la app. Se comprueba al leer, no al escribir. */
  function serieReelle() {
    var s = etat.serie;
    if (!s.dernierJour) return 0;
    var hoy = jourISO();
    var hier = jourISO(new Date(Date.now() - 86400000));
    if (s.dernierJour === hoy || s.dernierJour === hier) return s.actuelle;
    return 0;
  }

  function enregistrerReponse(idItem, correct) {
    marquerActivite();
    var hoy = jourISO();
    var j = etat.stats.jours[hoy] || (etat.stats.jours[hoy] = { exercices:0, corrects:0 });
    j.exercices++;
    etat.stats.totalExercices++;
    if (correct) { j.corrects++; etat.stats.totalCorrects++; }

    if (idItem) {
      var it = etat.srs[idItem] || (etat.srs[idItem] = global.SRS.nouveau(idItem));
      global.SRS.reviser(it, correct ? 2 : 0);
    }
    ecrire();
  }

  function marquerLecon(id, donnees) {
    var l = etat.lecons[id] || (etat.lecons[id] = { vue:false, terminee:false, score:null });
    Object.keys(donnees || {}).forEach(function (k) { l[k] = donnees[k]; });
    l.date = jourISO();
    marquerActivite();
    ecrire();
  }

  global.Store = {
    etat: function () { return etat; },
    sauver: ecrire,
    set: function (chemin, valeur) {
      var p = chemin.split('.'), o = etat;
      for (var i = 0; i < p.length - 1; i++) o = o[p[i]];
      o[p[p.length - 1]] = valeur;
      ecrire();
    },
    marquerLecon: marquerLecon,
    enregistrerReponse: enregistrerReponse,
    marquerActivite: marquerActivite,
    serie: serieReelle,
    jourISO: jourISO,
    exporter: function () {
      return JSON.stringify(etat, null, 2);
    },
    importer: function (texte) {
      var d = JSON.parse(texte);
      if (!d || typeof d !== 'object' || d.version === undefined) {
        throw new Error('El archivo no tiene el formato esperado.');
      }
      etat = d;
      ecrire();
      return true;
    },
    effacer: function () {
      etat = JSON.parse(JSON.stringify(DEFAUT));
      ecrire();
    }
  };
})(typeof window !== 'undefined' ? window : globalThis);
