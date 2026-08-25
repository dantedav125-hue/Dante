/* ==========================================================================
   SRS — repaso espaciado
   --------------------------------------------------------------------------
   Variante ligera de SM-2. La idea: lo que aciertas se aleja en el tiempo,
   lo que fallas vuelve mañana. Así no repasas lo que ya sabes ni pierdes lo
   que estabas a punto de olvidar.

   Cada ítem guarda:
     ef        factor de facilidad (2.5 al empezar, baja si fallas)
     interval  días hasta el próximo repaso
     due       fecha (número de día) del próximo repaso
     reps      aciertos seguidos
     lapses    veces que se ha olvidado
   ========================================================================== */

(function (global) {
  'use strict';

  var MS_JOUR = 86400000;

  function aujourdhui() {
    return Math.floor(Date.now() / MS_JOUR);
  }

  function nouveau(id) {
    return { id: id, ef: 2.5, interval: 0, due: aujourdhui(), reps: 0, lapses: 0 };
  }

  /* qualite: 0 = fallo · 1 = costó · 2 = bien · 3 = fácil */
  function reviser(item, qualite) {
    var jour = aujourdhui();

    if (qualite === 0) {
      /* Se olvidó: vuelve mañana y el factor baja, pero nunca por debajo
         de 1.3 o el ítem se volvería imposible de graduar. */
      item.lapses++;
      item.reps = 0;
      item.interval = 1;
      item.ef = Math.max(1.3, item.ef - 0.2);
    } else {
      item.reps++;
      if (item.reps === 1) item.interval = 1;
      else if (item.reps === 2) item.interval = 3;
      else item.interval = Math.round(item.interval * item.ef);

      /* El factor sube si fue fácil, baja un poco si costó */
      if (qualite === 1) item.ef = Math.max(1.3, item.ef - 0.15);
      else if (qualite === 3) item.ef = Math.min(3.0, item.ef + 0.1);

      /* Tope de un año: más allá no aporta nada */
      item.interval = Math.min(item.interval, 365);
    }

    item.due = jour + item.interval;
    item.vu = jour;
    return item;
  }

  /* Los que tocan hoy o que ya se pasaron de fecha */
  function aReviser(items) {
    var jour = aujourdhui();
    return Object.keys(items)
      .map(function (k) { return items[k]; })
      .filter(function (it) { return it.due <= jour; })
      .sort(function (a, b) { return a.due - b.due; });
  }

  function statistiques(items) {
    var jour = aujourdhui();
    var s = { total:0, du:0, nouveaux:0, jeunes:0, murs:0, demain:0 };
    Object.keys(items).forEach(function (k) {
      var it = items[k];
      s.total++;
      if (it.due <= jour) s.du++;
      if (it.due === jour + 1) s.demain++;
      if (it.reps === 0) s.nouveaux++;
      else if (it.interval < 21) s.jeunes++;
      else s.murs++;
    });
    return s;
  }

  global.SRS = {
    nouveau: nouveau,
    reviser: reviser,
    aReviser: aReviser,
    statistiques: statistiques,
    aujourdhui: aujourdhui
  };
})(typeof window !== 'undefined' ? window : globalThis);
