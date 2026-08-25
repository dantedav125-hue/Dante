/* ==========================================================================
   CONJUGADOR-ES — motor de conjugación española
   --------------------------------------------------------------------------
   Existe para una sola cosa: poder poner la traducción exacta al lado de cada
   forma francesa. "je bois" no se glosa con "beber", se glosa con "yo bebo".

   Mismo principio que el motor francés: radical + terminación, y solo se
   guardan a mano las irregularidades que no se pueden deducir.

   OJO CON LAS PERSONAS. El francés y el español no se corresponden uno a uno:

       francés          español
       je            →  yo               (1ª sing)
       tu            →  tú               (2ª sing)
       il / elle     →  él / ella        (3ª sing)
       nous          →  nosotros         (1ª plur)
       vous          →  ustedes          (3ª PLURAL, no 2ª)
       ils / elles   →  ellos / ellas    (3ª plur)

   "vous" es a la vez el "usted" formal y el "ustedes" plural, y en español
   los dos se conjugan en tercera persona: "vous parlez" = "ustedes hablan",
   nunca "vosotros habláis" para un hablante mexicano. Por eso el índice 4
   francés se sirve del hueco 5 del español.
   ========================================================================== */

(function (global) {
  'use strict';

  var PERSONAS = ['yo', 'tú', 'él/ella', 'nosotros', 'ustedes', 'ellos/ellas'];

  /* Del índice de persona francés al hueco de conjugación español.
     El hueco 4 (vosotros) no se usa nunca. */
  var MAPA_FR_ES = [0, 1, 2, 3, 5, 5];

  var REFL = ['me', 'te', 'se', 'nos', 'se', 'se'];

  /* --- terminaciones regulares ------------------------------------------ */
  var TERM = {
    presente: {
      ar: ['o', 'as', 'a', 'amos', 'áis', 'an'],
      er: ['o', 'es', 'e', 'emos', 'éis', 'en'],
      ir: ['o', 'es', 'e', 'imos', 'ís', 'en']
    },
    imperfecto: {
      ar: ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'],
      er: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
      ir: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían']
    },
    indefinido: {
      ar: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'],
      er: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'],
      ir: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron']
    },
    /* futuro y condicional se pegan al INFINITIVO entero, no al radical */
    futuro:      ['é', 'ás', 'á', 'emos', 'éis', 'án'],
    condicional: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
    subjuntivo: {
      ar: ['e', 'es', 'e', 'emos', 'éis', 'en'],
      er: ['a', 'as', 'a', 'amos', 'áis', 'an'],
      ir: ['a', 'as', 'a', 'amos', 'áis', 'an']
    },
    /* los pretéritos fuertes llevan terminaciones propias, sin tilde */
    fuerte: ['e', 'iste', 'o', 'imos', 'isteis', 'ieron']
  };

  /* ======================================================================
     IRREGULARIDADES
     ====================================================================== */

  /* Diptongación: solo en las personas donde cae el acento, o sea todas
     menos nosotros y vosotros. */
  var DIPTONGO = {
    /* Ojo: tener, venir y decir llevan además "yo" irregular (tengo, vengo,
       digo). Las dos irregularidades conviven: tengo / tienes / tenemos. */
    ie: ('pensar cerrar empezar comenzar perder entender defender querer sentir ' +
         'preferir mentir despertar despertarse sentar sentarse temblar encender ' +
         'atender convertir convertirse advertir tener venir obtener detener ' +
         'sostener mantener').split(' '),
    ue: ('poder dormir morir volver contar encontrar encontrarse mostrar recordar ' +
         'costar llover probar acostar acostarse acordar acordarse sonar soñar ' +
         'doler mover devolver volverse resolver').split(' '),
    i:  ('pedir seguir servir repetir vestir vestirse elegir medir reír sonreír ' +
         'conseguir corregir despedir decir').split(' '),
    u:  ['jugar']
  };

  /* Primera persona irregular del presente */
  var YO = {
    tener:'tengo', poner:'pongo', salir:'salgo', venir:'vengo', hacer:'hago',
    decir:'digo', traer:'traigo', caer:'caigo', oír:'oigo', valer:'valgo',
    saber:'sé', ver:'veo', dar:'doy', caber:'quepo',
    conocer:'conozco', reconocer:'reconozco', parecer:'parezco', crecer:'crezco',
    producir:'produzco', conducir:'conduzco', traducir:'traduzco',
    obtener:'obtengo', detener:'detengo', sostener:'sostengo', pertenecer:'pertenezco',
    mantener:'mantengo', proponer:'propongo', suponer:'supongo',
    coger:'cojo', elegir:'elijo', seguir:'sigo', conseguir:'consigo',
    dirigir:'dirijo', exigir:'exijo', corregir:'corrijo', proteger:'protejo',
    vencer:'venzo', convencer:'convenzo', construir:'construyo', destruir:'destruyo'
  };

  /* Pretéritos fuertes: radical + terminaciones de TERM.fuerte */
  var FUERTE = {
    tener:'tuv', estar:'estuv', poder:'pud', poner:'pus', saber:'sup',
    querer:'quis', venir:'vin', andar:'anduv', haber:'hub', caber:'cup',
    hacer:'hic', decir:'dij', traer:'traj', conducir:'conduj',
    producir:'produj', traducir:'traduj',
    obtener:'obtuv', detener:'detuv', sostener:'sostuv', mantener:'mantuv',
    proponer:'propus', suponer:'supus'
  };

  /* Futuro y condicional irregulares (comparten radical) */
  var FUT = {
    tener:'tendr', poner:'pondr', salir:'saldr', venir:'vendr', poder:'podr',
    saber:'sabr', haber:'habr', querer:'querr', hacer:'har', decir:'dir',
    valer:'valdr', caber:'cabr',
    obtener:'obtendr', detener:'detendr', sostener:'sostendr', mantener:'mantendr',
    proponer:'propondr', suponer:'supondr'
  };

  /* Participios irregulares */
  var PART = {
    hacer:'hecho', decir:'dicho', ver:'visto', poner:'puesto', escribir:'escrito',
    abrir:'abierto', volver:'vuelto', morir:'muerto', romper:'roto',
    cubrir:'cubierto', descubrir:'descubierto', describir:'descrito',
    resolver:'resuelto', devolver:'devuelto', volverse:'vuelto',
    satisfacer:'satisfecho', imprimir:'impreso'
  };

  /* Verbos que no se dejan reducir a reglas */
  var TOTAL = {
    ser: {
      presente:['soy','eres','es','somos','sois','son'],
      imperfecto:['era','eras','era','éramos','erais','eran'],
      indefinido:['fui','fuiste','fue','fuimos','fuisteis','fueron'],
      futuro:['seré','serás','será','seremos','seréis','serán'],
      condicional:['sería','serías','sería','seríamos','seríais','serían'],
      subjuntivo:['sea','seas','sea','seamos','seáis','sean'],
      participio:'sido', gerundio:'siendo'
    },
    ir: {
      presente:['voy','vas','va','vamos','vais','van'],
      imperfecto:['iba','ibas','iba','íbamos','ibais','iban'],
      indefinido:['fui','fuiste','fue','fuimos','fuisteis','fueron'],
      futuro:['iré','irás','irá','iremos','iréis','irán'],
      condicional:['iría','irías','iría','iríamos','iríais','irían'],
      subjuntivo:['vaya','vayas','vaya','vayamos','vayáis','vayan'],
      participio:'ido', gerundio:'yendo'
    },
    irse: {
      presente:['voy','vas','va','vamos','vais','van'],
      imperfecto:['iba','ibas','iba','íbamos','ibais','iban'],
      indefinido:['fui','fuiste','fue','fuimos','fuisteis','fueron'],
      futuro:['iré','irás','irá','iremos','iréis','irán'],
      condicional:['iría','irías','iría','iríamos','iríais','irían'],
      subjuntivo:['vaya','vayas','vaya','vayamos','vayáis','vayan'],
      participio:'ido', gerundio:'yendo'
    },
    haber: {
      presente:['he','has','ha','hemos','habéis','han'],
      imperfecto:['había','habías','había','habíamos','habíais','habían'],
      indefinido:['hube','hubiste','hubo','hubimos','hubisteis','hubieron'],
      futuro:['habré','habrás','habrá','habremos','habréis','habrán'],
      condicional:['habría','habrías','habría','habríamos','habríais','habrían'],
      subjuntivo:['haya','hayas','haya','hayamos','hayáis','hayan'],
      participio:'habido', gerundio:'habiendo'
    },
    estar: {
      presente:['estoy','estás','está','estamos','estáis','están'],
      imperfecto:['estaba','estabas','estaba','estábamos','estabais','estaban'],
      indefinido:['estuve','estuviste','estuvo','estuvimos','estuvisteis','estuvieron'],
      futuro:['estaré','estarás','estará','estaremos','estaréis','estarán'],
      condicional:['estaría','estarías','estaría','estaríamos','estaríais','estarían'],
      subjuntivo:['esté','estés','esté','estemos','estéis','estén'],
      participio:'estado', gerundio:'estando'
    },
    dar: {
      presente:['doy','das','da','damos','dais','dan'],
      imperfecto:['daba','dabas','daba','dábamos','dabais','daban'],
      indefinido:['di','diste','dio','dimos','disteis','dieron'],
      futuro:['daré','darás','dará','daremos','daréis','darán'],
      condicional:['daría','darías','daría','daríamos','daríais','darían'],
      subjuntivo:['dé','des','dé','demos','deis','den'],
      participio:'dado', gerundio:'dando'
    },
    ver: {
      presente:['veo','ves','ve','vemos','veis','ven'],
      imperfecto:['veía','veías','veía','veíamos','veíais','veían'],
      indefinido:['vi','viste','vio','vimos','visteis','vieron'],
      futuro:['veré','verás','verá','veremos','veréis','verán'],
      condicional:['vería','verías','vería','veríamos','veríais','verían'],
      subjuntivo:['vea','veas','vea','veamos','veáis','vean'],
      participio:'visto', gerundio:'viendo'
    },
    saber: {
      /* el yo es "sé", que no termina en -o, así que el subjuntivo no se
         puede derivar y hay que darlo entero */
      subjuntivo:['sepa','sepas','sepa','sepamos','sepáis','sepan']
    },
    oler: {
      presente:['huelo','hueles','huele','olemos','oléis','huelen'],
      subjuntivo:['huela','huelas','huela','olamos','oláis','huelan']
    },
    oír: {
      presente:['oigo','oyes','oye','oímos','oís','oyen'],
      indefinido:['oí','oíste','oyó','oímos','oísteis','oyeron'],
      subjuntivo:['oiga','oigas','oiga','oigamos','oigáis','oigan'],
      participio:'oído', gerundio:'oyendo'
    },
    reír: {
      presente:['río','ríes','ríe','reímos','reís','ríen'],
      indefinido:['reí','reíste','rió','reímos','reísteis','rieron'],
      subjuntivo:['ría','rías','ría','riamos','riáis','rían'],
      participio:'reído', gerundio:'riendo'
    },
    sonreír: {
      presente:['sonrío','sonríes','sonríe','sonreímos','sonreís','sonríen'],
      indefinido:['sonreí','sonreíste','sonrió','sonreímos','sonreísteis','sonrieron'],
      subjuntivo:['sonría','sonrías','sonría','sonriamos','sonriáis','sonrían'],
      participio:'sonreído', gerundio:'sonriendo'
    },
    llover: { imperso:1,
      presente:['—','—','llueve','—','—','—'],
      imperfecto:['—','—','llovía','—','—','—'],
      indefinido:['—','—','llovió','—','—','—'],
      futuro:['—','—','lloverá','—','—','—'],
      condicional:['—','—','llovería','—','—','—'],
      subjuntivo:['—','—','llueva','—','—','—'],
      participio:'llovido', gerundio:'lloviendo'
    }
  };

  /* ======================================================================
     UTILIDADES
     ====================================================================== */

  function esReflexivo(inf) { return /se$/.test(inf) && inf.length > 3; }
  function desnudo(inf) { return esReflexivo(inf) ? inf.slice(0, -2) : inf; }

  function grupo(inf) {
    var d = desnudo(inf);
    if (/ar$/.test(d)) return 'ar';
    if (/er$/.test(d)) return 'er';
    return 'ir';
  }

  function radical(inf) { return desnudo(inf).slice(0, -2); }

  /* En qué familia de diptongo cae el verbo, si cae en alguna */
  function familiaDiptongo(inf) {
    for (var f in DIPTONGO) {
      if (DIPTONGO[f].indexOf(inf) !== -1 || DIPTONGO[f].indexOf(desnudo(inf)) !== -1) return f;
    }
    return null;
  }

  /* Aplica el diptongo a la ÚLTIMA vocal acentuable del radical.
     pensar -> piens · poder -> pued · pedir -> pid · jugar -> jueg */
  function diptongar(rad, familia) {
    if (!familia) return rad;
    var mapa = { ie: ['e', 'ie'], ue: ['o', 'ue'], i: ['e', 'i'], u: ['u', 'ue'] };
    var par = mapa[familia];
    if (!par) return rad;
    var idx = rad.lastIndexOf(par[0]);
    if (idx === -1) return rad;
    return rad.slice(0, idx) + par[1] + rad.slice(idx + 1);
  }

  /* Cambios de escritura para que el sonido no se rompa.
     Son el equivalente español de los -ger/-cer franceses. */
  function ortografia(rad, term, inf) {
    var d = desnudo(inf);
    /* buscar -> busqué · pagar -> pagué · empezar -> empecé */
    if (/^[eé]/.test(term)) {
      if (/car$/.test(d) && /c$/.test(rad)) return rad.slice(0, -1) + 'qu';
      if (/gar$/.test(d) && /g$/.test(rad)) return rad + 'u';
      if (/zar$/.test(d) && /z$/.test(rad)) return rad.slice(0, -1) + 'c';
    }
    /* elegir -> elijo · seguir -> sigo · vencer -> venzo */
    if (/^[aoáó]/.test(term)) {
      if (/ger$|gir$/.test(d) && /g$/.test(rad)) return rad.slice(0, -1) + 'j';
      if (/guir$/.test(d) && /gu$/.test(rad)) return rad.slice(0, -2) + 'g';
      /* no tocar los radicales que ya vienen con zc del yo irregular
         (conozco -> conozc-), o saldría "conozza" */
      if (/cer$|cir$/.test(d) && /c$/.test(rad) && !/[aeiou]c$/.test(rad) && !/zc$/.test(rad)) {
        return rad.slice(0, -1) + 'z';
      }
    }
    return rad;
  }

  /* leer -> leyó · creer -> creyó · construir -> construyó
     Entre dos vocales, la i átona se vuelve y. */
  function yeismo(rad, term, inf) {
    var d = desnudo(inf);
    if (!/^i[óe]/.test(term)) return term;
    /* -guir y -quir NO cuentan: ahí la u es muda y no hay hiato.
       construir -> construyó, pero seguir -> siguió. */
    if (/[aeo]er$/.test(d) || (/uir$/.test(d) && !/guir$|quir$/.test(d))) {
      return 'y' + term.slice(1);
    }
    return term;
  }

  /* Radical acabado en vocal + terminación con i tónica = hiato, y el
     español lo marca con tilde: leíste, creímos, oísteis. */
  function acentoHiato(rad, term) {
    if (!/[aeo]$/.test(rad)) return term;
    if (!/^i/.test(term) || /^i[óe]/.test(term)) return term;
    return 'í' + term.slice(1);
  }

  /* ======================================================================
     LOS TIEMPOS
     ====================================================================== */

  function presente(inf) {
    var t = TOTAL[inf] || TOTAL[desnudo(inf)];
    if (t && t.presente) return t.presente.slice();

    var g = grupo(inf), rad = radical(inf), fam = familiaDiptongo(inf);
    var terms = TERM.presente[g];
    var yo = YO[desnudo(inf)];
    var out = [];

    for (var p = 0; p < 6; p++) {
      if (p === 0 && yo) { out.push(yo); continue; }
      /* el diptongo solo cae donde va el acento: no en nosotros ni vosotros */
      var r = (p === 3 || p === 4) ? rad : diptongar(rad, fam);
      var term = terms[p];
      r = ortografia(r, term, inf);
      out.push(r + term);
    }
    return out;
  }

  function imperfecto(inf) {
    var t = TOTAL[inf] || TOTAL[desnudo(inf)];
    if (t && t.imperfecto) return t.imperfecto.slice();
    var g = grupo(inf), rad = radical(inf);
    return TERM.imperfecto[g].map(function (x) { return rad + x; });
  }

  function indefinido(inf) {
    var d = desnudo(inf);
    var t = TOTAL[inf] || TOTAL[d];
    if (t && t.indefinido) return t.indefinido.slice();

    /* pretérito fuerte: radical propio y terminaciones sin tilde */
    if (FUERTE[d]) {
      var rf = FUERTE[d];
      return TERM.fuerte.map(function (x, p) {
        /* hacer -> hizo: la c se vuelve z ante o para conservar el sonido */
        var r = (d === 'hacer' && p === 2) ? 'hiz' : rf;
        /* tras j se pierde la i: dijeron, trajeron, condujeron */
        if (/j$/.test(r) && x === 'ieron') x = 'eron';
        return r + x;
      });
    }

    var g = grupo(inf), rad = radical(inf), terms = TERM.indefinido[g];
    var fam = familiaDiptongo(inf);
    var out = [];
    for (var p = 0; p < 6; p++) {
      var r = rad, term = terms[p];
      /* los -ir con cambio vocálico lo hacen en 3ª sing y plur:
         dormir -> durmió · pedir -> pidió · sentir -> sintió */
      if (g === 'ir' && fam && (p === 2 || p === 5)) {
        if (fam === 'ue') r = rad.replace(/o([^o]*)$/, 'u$1');
        else r = rad.replace(/e([^e]*)$/, 'i$1');
      }
      r = ortografia(r, term, inf);
      term = yeismo(r, term, inf);
      term = acentoHiato(r, term);
      out.push(r + term);
    }
    return out;
  }

  function futuro(inf) {
    var d = desnudo(inf);
    var t = TOTAL[inf] || TOTAL[d];
    if (t && t.futuro) return t.futuro.slice();
    var base = FUT[d] || d;
    return TERM.futuro.map(function (x) { return base + x; });
  }

  function condicional(inf) {
    var d = desnudo(inf);
    var t = TOTAL[inf] || TOTAL[d];
    if (t && t.condicional) return t.condicional.slice();
    var base = FUT[d] || d;
    return TERM.condicional.map(function (x) { return base + x; });
  }

  /* El subjuntivo sale del "yo" del presente, igual que en francés sale
     del "ils". Es el mismo truco en los dos idiomas. */
  function subjuntivo(inf) {
    var d = desnudo(inf);
    var t = TOTAL[inf] || TOTAL[d];
    if (t && t.subjuntivo) return t.subjuntivo.slice();

    var g = grupo(inf), terms = TERM.subjuntivo[g], fam = familiaDiptongo(inf);
    var pres = presente(inf);
    var radYo = pres[0].replace(/o$/, '');
    var radNos = radical(inf);

    /* si el yo no termina en -o (raro), volvemos al radical normal */
    if (pres[0] === radYo) radYo = radical(inf);

    var out = [];
    for (var p = 0; p < 6; p++) {
      var r = radYo, term = terms[p];
      if (p === 3 || p === 4) {
        /* nosotros y vosotros no diptongan… salvo los -ir de cambio
           vocálico, que sí mudan: durmamos, pidamos, sintamos */
        if (YO[d]) r = radYo;
        else if (g === 'ir' && fam) {
          r = fam === 'ue' ? radNos.replace(/o([^o]*)$/, 'u$1')
                           : radNos.replace(/e([^e]*)$/, 'i$1');
        } else r = radNos;
      }
      r = ortografia(r, term, inf);
      out.push(r + term);
    }
    return out;
  }

  function participio(inf) {
    var d = desnudo(inf);
    if (PART[d]) return PART[d];
    var t = TOTAL[inf] || TOTAL[d];
    if (t && t.participio) return t.participio;
    var g = grupo(inf), rad = radical(inf);
    if (g === 'ar') return rad + 'ado';
    /* leído, creído, oído: la i tónica lleva tilde tras vocal */
    if (/[aeo]$/.test(rad)) return rad + 'ído';
    return rad + 'ido';
  }

  function imperativo(inf) {
    var d = desnudo(inf);
    var irr = { ser:'sé', ir:'ve', irse:'vete', hacer:'haz', decir:'di',
                poner:'pon', salir:'sal', tener:'ten', venir:'ven' };
    var tu = irr[d] || presente(inf)[2];        // el tú sale del él
    var nos = subjuntivo(inf)[3];
    var uds = subjuntivo(inf)[5];               // ustedes, no vosotros
    return [tu, nos, uds];
  }

  /* --- compuestos: haber + participio ----------------------------------- */
  function compuesto(inf, tiempoAux) {
    var aux = TOTAL.haber[tiempoAux];
    var pp = participio(inf);
    return aux.map(function (a) { return a === '—' ? '—' : a + ' ' + pp; });
  }

  var SIMPLES = {
    presente: presente, imperfecto: imperfecto, indefinido: indefinido,
    futuro: futuro, condicional: condicional, subjuntivo: subjuntivo,
    imperativo: imperativo
  };
  var COMPUESTOS = {
    perfecto:'presente', pluscuamperfecto:'imperfecto',
    futuroPerfecto:'futuro', condicionalPerfecto:'condicional',
    subjuntivoPerfecto:'subjuntivo'
  };

  function conjugar(inf, tiempo) {
    if (!inf) return null;
    if (COMPUESTOS[tiempo]) return compuesto(inf, COMPUESTOS[tiempo]);
    var fn = SIMPLES[tiempo];
    return fn ? fn(inf) : null;
  }

  /* ======================================================================
     GLOSA — la forma lista para mostrar al lado de la francesa
     ====================================================================== */

  /* pFr es el índice de persona FRANCÉS (0..5); aquí se traduce al hueco
     español correcto, que para "vous" no es el que uno esperaría. */
  function glosa(inf, tiempo, pFr, opciones) {
    if (!inf) return '';
    var o = opciones || {};
    var pEs = MAPA_FR_ES[pFr];

    if (tiempo === 'imperativo') {
      var imp = imperativo(inf);
      var k = pFr === 0 ? 0 : (pFr === 1 ? 1 : 2);
      var f = imp[k];
      if (!f || f === '—') return '';
      return esReflexivo(inf) ? pronominalImperativo(f, k, inf) : f;
    }

    var formas = conjugar(inf, tiempo);
    if (!formas) return '';
    var forma = formas[pEs];
    if (!forma || forma === '—') return '';

    var out = '';
    if (esReflexivo(inf)) out += REFL[pEs] + ' ';
    out += forma;

    if (o.conPronombre !== false) {
      var pron = PERSONAS[pFr === 4 ? 4 : (pFr === 5 ? 5 : pFr)];
      out = pron + ' ' + out;
    }
    return out;
  }

  function pronominalImperativo(forma, k, inf) {
    var pron = ['te', 'nos', 'se'][k];
    if (k === 1) forma = forma.replace(/s$/, '');   // levantemos + nos = levantémonos
    return forma + pron;
  }

  /* Tabla completa, para depurar */
  function tabla(inf) {
    var out = { infinitivo: inf, participio: participio(inf), tiempos: {} };
    Object.keys(SIMPLES).forEach(function (t) { out.tiempos[t] = conjugar(inf, t); });
    Object.keys(COMPUESTOS).forEach(function (t) { out.tiempos[t] = conjugar(inf, t); });
    return out;
  }

  global.ConjugadorES = {
    conjugar: conjugar,
    glosa: glosa,
    tabla: tabla,
    participio: participio,
    PERSONAS: PERSONAS,
    MAPA_FR_ES: MAPA_FR_ES,
    esReflexivo: esReflexivo
  };
})(typeof window !== 'undefined' ? window : globalThis);
