/* ==========================================================================
   AUDIO — síntesis de voz
   --------------------------------------------------------------------------
   Todo ejemplo francés de la app se puede oír. No hay archivos grabados:
   se usa la voz del sistema. En iPhone y Mac las voces francesas (Thomas,
   Amélie) son buenas de verdad; en Android depende del motor de Google.

   El modo escucha alterna dos voces: española para la explicación, francesa
   para el ejemplo. Eso obliga a manejar dos idiomas en la misma cola.
   ========================================================================== */

(function (global) {
  'use strict';

  var synth = global.speechSynthesis;
  var voix = { fr: null, es: null };
  var pret = false;
  var enAttente = [];

  /* Las voces cargan de forma asíncrona y en algunos navegadores la primera
     llamada devuelve una lista vacía. Hay que esperar a voiceschanged. */
  function chargerVoix() {
    if (!synth) return;
    var toutes = synth.getVoices();
    if (!toutes.length) return;

    voix.fr = choisir(toutes, 'fr', ['Thomas', 'Amélie', 'Audrey', 'Google français', 'Virginie']);
    voix.es = choisir(toutes, 'es', ['Monica', 'Paulina', 'Google español', 'Jorge', 'Juan']);
    pret = true;

    while (enAttente.length) enAttente.shift()();
  }

  /* Prefiere una voz nombrada de la lista; si no, la primera del idioma.
     Se evitan las voces "novelty" que algunos sistemas incluyen. */
  function choisir(toutes, langue, preferees) {
    var candidates = toutes.filter(function (v) {
      return v.lang && v.lang.toLowerCase().indexOf(langue) === 0;
    });
    if (!candidates.length) return null;

    for (var i = 0; i < preferees.length; i++) {
      for (var j = 0; j < candidates.length; j++) {
        if (candidates[j].name.indexOf(preferees[i]) !== -1) return candidates[j];
      }
    }
    var locales = candidates.filter(function (v) { return v.localService; });
    return locales[0] || candidates[0];
  }

  if (synth) {
    chargerVoix();
    if (typeof synth.addEventListener === 'function') {
      synth.addEventListener('voiceschanged', chargerVoix);
    } else {
      synth.onvoiceschanged = chargerVoix;
    }
    /* Safari a veces no dispara el evento: reintento un par de veces */
    setTimeout(chargerVoix, 300);
    setTimeout(chargerVoix, 1200);
  }

  function construire(texte, langue, vitesse) {
    var u = new SpeechSynthesisUtterance(texte);
    u.lang = langue === 'es' ? 'es-ES' : 'fr-FR';
    if (voix[langue]) u.voice = voix[langue];
    u.rate = vitesse || 1;
    u.pitch = 1;
    return u;
  }

  /* --- decir una sola cosa, cortando lo que estuviera sonando ----------- */
  function dire(texte, langue, vitesse) {
    if (!synth || !texte) return;
    var lancer = function () {
      synth.cancel();
      synth.speak(construire(texte, langue || 'fr', vitesse));
    };
    if (pret) lancer(); else enAttente.push(lancer);
  }

  /* ======================================================================
     COLA — para el modo escucha
     Una cola es una lista de {texte, langue, pause}. Se reproduce en orden
     y avisa en cada paso para que la interfaz pueda resaltar la línea.
     ====================================================================== */
  function Cola() {
    this.items = [];
    this.index = 0;
    this.actif = false;
    this.vitesse = 1;
    this.onPas = null;
    this.onFin = null;
  }

  Cola.prototype.charger = function (items) {
    this.items = items || [];
    this.index = 0;
    return this;
  };

  Cola.prototype.jouer = function (depuis) {
    if (!synth) return;
    if (typeof depuis === 'number') this.index = depuis;
    this.actif = true;
    synth.cancel();
    var self = this;
    if (pret) self._suivant(); else enAttente.push(function () { self._suivant(); });
  };

  Cola.prototype._suivant = function () {
    var self = this;
    if (!this.actif) return;
    if (this.index >= this.items.length) {
      this.actif = false;
      if (this.onFin) this.onFin();
      return;
    }
    var item = this.items[this.index];
    if (this.onPas) this.onPas(this.index, item);

    var u = construire(item.texte, item.langue, this.vitesse);
    u.onend = function () {
      if (!self.actif) return;
      self.index++;
      /* pausa entre bloques para que no se atropellen las ideas */
      var pause = item.pause || 250;
      setTimeout(function () { self._suivant(); }, pause);
    };
    /* Si la voz falla (texto raro, motor ocupado) seguimos en vez de colgarnos */
    u.onerror = function () {
      if (!self.actif) return;
      self.index++;
      setTimeout(function () { self._suivant(); }, 120);
    };
    synth.speak(u);
  };

  Cola.prototype.pause = function () {
    this.actif = false;
    if (synth) synth.cancel();
  };

  Cola.prototype.reprendre = function () {
    this.jouer(this.index);
  };

  Cola.prototype.arreter = function () {
    this.actif = false;
    this.index = 0;
    if (synth) synth.cancel();
  };

  Cola.prototype.allerA = function (i) {
    this.index = Math.max(0, Math.min(i, this.items.length - 1));
    if (this.actif) this.jouer(this.index);
  };

  global.Audio2 = {
    dire: dire,
    Cola: Cola,
    disponible: function () { return !!synth; },
    voixTrouvees: function () { return { fr: voix.fr && voix.fr.name, es: voix.es && voix.es.name }; },
    stop: function () { if (synth) synth.cancel(); }
  };
})(typeof window !== 'undefined' ? window : globalThis);
