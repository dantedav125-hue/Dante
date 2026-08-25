/* ==========================================================================
   FRASES — generador de oraciones de ejemplo
   --------------------------------------------------------------------------
   Arma cinco oraciones para una fila concreta de conjugación, en francés y
   español a la vez, combinando:

       sujeto  +  forma conjugada  +  complemento del verbo  +  marco temporal

   El complemento viene de data/ejemplos.js y el marco temporal de este
   archivo, elegido según el tiempo verbal: no tiene sentido decir "demain"
   en imperfecto ni "hier" en futuro.

   La colocación importa y no es la misma en los dos idiomas. En francés los
   adverbios cortos van ENTRE el verbo y el complemento ("je bois souvent du
   café"), y en los tiempos compuestos van entre el auxiliar y el participio
   ("j’ai déjà mangé"). El español los pone casi siempre al final o al
   principio. Por eso cada marco declara dónde va en cada idioma.
   ========================================================================== */

(function (global) {
  'use strict';

  /* i = inicio · m = entre verbo y complemento (solo francés) · f = final */
  var MARCOS = {
    present: [
      {fr:'souvent', fp:'m', es:'seguido', ep:'f'},
      {fr:'tous les jours', fp:'f', es:'todos los días', ep:'f'},
      {fr:'', fp:'f', es:'', ep:'f'},
      {fr:'toujours', fp:'m', es:'siempre', ep:'i'},
      {fr:'en ce moment', fp:'f', es:'en este momento', ep:'f'},
      {fr:'le matin', fp:'f', es:'en la mañana', ep:'f'},
      {fr:'rarement', fp:'m', es:'rara vez', ep:'i'}
    ],
    passeCompose: [
      {fr:'hier', fp:'i', es:'ayer', ep:'i'},
      {fr:'ce matin', fp:'i', es:'esta mañana', ep:'i'},
      {fr:'la semaine dernière', fp:'f', es:'la semana pasada', ep:'f'},
      {fr:'déjà', fp:'m', es:'ya', ep:'i'},
      {fr:'', fp:'f', es:'', ep:'f'},
      {fr:'une fois', fp:'f', es:'una vez', ep:'f'}
    ],
    imparfait: [
      {fr:'avant', fp:'i', es:'antes', ep:'i'},
      {fr:'à l’époque', fp:'i', es:'en esa época', ep:'i'},
      {fr:'tous les étés', fp:'f', es:'todos los veranos', ep:'f'},
      {fr:'souvent', fp:'m', es:'seguido', ep:'f'},
      {fr:'quand j’étais jeune', fp:'f', es:'cuando era joven', ep:'f'},
      {fr:'', fp:'f', es:'', ep:'f'}
    ],
    futur: [
      {fr:'demain', fp:'i', es:'mañana', ep:'i'},
      {fr:'l’année prochaine', fp:'f', es:'el año que viene', ep:'f'},
      {fr:'bientôt', fp:'m', es:'pronto', ep:'f'},
      {fr:'ce soir', fp:'f', es:'esta noche', ep:'f'},
      {fr:'un jour', fp:'i', es:'algún día', ep:'i'},
      {fr:'', fp:'f', es:'', ep:'f'}
    ],
    conditionnel: [
      {fr:'si c’était possible', fp:'f', es:'si fuera posible', ep:'f'},
      {fr:'volontiers', fp:'m', es:'con gusto', ep:'f'},
      {fr:'avec plaisir', fp:'f', es:'con gusto', ep:'f'},
      {fr:'peut-être', fp:'m', es:'tal vez', ep:'i'},
      {fr:'si j’avais le temps', fp:'f', es:'si tuviera tiempo', ep:'f'},
      {fr:'à ta place', fp:'i', es:'en tu lugar', ep:'i'}
    ],
    passeSimple: [
      {fr:'ce jour-là', fp:'i', es:'ese día', ep:'i'},
      {fr:'soudain', fp:'i', es:'de pronto', ep:'i'},
      {fr:'alors', fp:'i', es:'entonces', ep:'i'},
      {fr:'enfin', fp:'m', es:'por fin', ep:'i'},
      {fr:'un matin', fp:'i', es:'una mañana', ep:'i'},
      {fr:'', fp:'f', es:'', ep:'f'}
    ],
    plusQueParfait: [
      {fr:'déjà', fp:'m', es:'ya', ep:'i'},
      {fr:'avant de partir','fp':'f', es:'antes de irse', ep:'f'},
      {fr:'la veille', fp:'f', es:'la víspera', ep:'f'},
      {fr:'quand je suis arrivé', fp:'f', es:'cuando llegué', ep:'f'},
      {fr:'', fp:'f', es:'', ep:'f'}
    ],
    futurAnterieur: [
      {fr:'avant demain', fp:'f', es:'antes de mañana', ep:'f'},
      {fr:'dans une heure', fp:'f', es:'en una hora', ep:'f'},
      {fr:'d’ici là', fp:'i', es:'para entonces', ep:'i'},
      {fr:'quand tu arriveras', fp:'f', es:'cuando llegues', ep:'f'},
      {fr:'avant la fin', fp:'f', es:'antes del final', ep:'f'}
    ],
    conditionnelPasse: [
      {fr:'si j’avais pu', fp:'f', es:'si hubiera podido', ep:'f'},
      {fr:'volontiers', fp:'m', es:'con gusto', ep:'f'},
      {fr:'sans hésiter', fp:'f', es:'sin dudarlo', ep:'f'},
      {fr:'avec plus de temps', fp:'f', es:'con más tiempo', ep:'f'},
      {fr:'à ta place', fp:'i', es:'en tu lugar', ep:'i'}
    ],
    /* El subjuntivo no vive solo: necesita algo que lo dispare. Todos los
       disparadores de aquí son impersonales para que funcionen con cualquier
       persona — "Je veux que je boive" sería agramatical. */
    subjonctif: [
      {pre:'Il faut que', pres:'Hace falta que'},
      {pre:'Il est possible que', pres:'Es posible que'},
      {pre:'Bien que', pres:'Aunque'},
      {pre:'Pour que', pres:'Para que'},
      {pre:'Il vaut mieux que', pres:'Más vale que'},
      {pre:'Avant que', pres:'Antes de que'}
    ],
    subjonctifPasse: [
      {pre:'Bien que', pres:'Aunque'},
      {pre:'Il est possible que', pres:'Es posible que'},
      {pre:'Je doute que', pres:'Dudo que'},
      {pre:'Il se peut que', pres:'Puede que'}
    ],
    imperatif: [
      {fr:'s’il te plaît', fp:'f', es:'por favor', ep:'f'},
      {fr:'maintenant', fp:'f', es:'ahora', ep:'f'},
      {fr:'', fp:'f', es:'', ep:'f'},
      {fr:'tout de suite', fp:'f', es:'de inmediato', ep:'f'},
      {fr:'vite', fp:'f', es:'rápido', ep:'f'}
    ]
  };

  /* Del tiempo francés al español. La única que no es obvia es el passé
     composé: se traduce con pretérito simple, no con "he comido". */
  var TIEMPO_ES = {
    present:'presente', imparfait:'imperfecto', futur:'futuro',
    conditionnel:'condicional', subjonctif:'subjuntivo', imperatif:'imperativo',
    passeSimple:'indefinido', passeCompose:'indefinido',
    plusQueParfait:'pluscuamperfecto', futurAnterieur:'futuroPerfecto',
    conditionnelPasse:'condicionalPerfecto', subjonctifPasse:'subjuntivoPerfecto'
  };

  /* Avisos estructurales: aplican a TODOS los verbos en ese tiempo. */
  var NOTAS_TIEMPO = {
    passeCompose:
      'El francés lo arma con auxiliar + participio, igual que el "he comido" ' +
      'español. Pero al hablar cubre también el pretérito simple, y ese es el ' +
      'uso normal: "j’ai mangé" es "comí" mucho más veces que "he comido". Por ' +
      'eso la traducción de aquí usa el pretérito.',
    passeSimple:
      'Tiempo de libro: ningún francés lo usa hablando, solo se escribe. El ' +
      'pretérito español con el que se traduce sí es de uso diario, así que el ' +
      'registro NO coincide: lo que en francés suena a novela del XIX, en ' +
      'español suena a conversación normal.',
    present:
      'El presente francés cubre además el "estoy haciendo" español: "je mange" ' +
      'es a la vez "como" y "estoy comiendo". El francés no tiene gerundio de ' +
      'uso corriente, así que no busques uno.',
    futur:
      'Después de "quand", "dès que" o "tant que", el francés usa este futuro ' +
      'donde el español usa subjuntivo: "quand tu arriveras" es "cuando llegues".',
    conditionnel:
      'Además de la cortesía y la hipótesis, el periodismo francés lo usa para ' +
      'información sin confirmar: "il aurait démissionné" no es "habría dimitido" ' +
      'sino "al parecer dimitió".',
    subjonctif:
      'Los dos idiomas tienen subjuntivo, pero no se disparan con las mismas ' +
      'palabras. "espérer que" lleva INDICATIVO en francés y subjuntivo en ' +
      'español; "après que" lleva indicativo en francés. No traduzcas el modo, ' +
      'aprende el disparador.',
    imperatif:
      'Solo existe en tres personas. La forma de "vous" sirve tanto para el ' +
      'usted como para el ustedes, y en español las dos se conjugan en tercera.',
    plusQueParfait:
      'Este sí calca al español casi perfecto: "j’avais mangé" es "había comido". ' +
      'Es de los pocos tiempos donde no hay que pensar.'
  };

  /* Aviso de persona: solo aparece en la fila de "vous". */
  var NOTA_VOUS =
    '"vous" es a la vez el usted formal a UNA persona y el ustedes a varias. ' +
    'Los dos se conjugan en tercera persona en español ("ustedes hablan"), no ' +
    'en segunda: "vosotros habláis" no se usa en México.';


  /* ======================================================================
     POSESIVOS
     ----------------------------------------------------------------------
     Un complemento como "ses clés" está mal si el sujeto es "je": tiene que
     decir "mes clés". Por eso los datos guardan tokens y aquí se resuelven
     según la persona.

       %m% %f% %p%        posesivo francés (masc. sing., fem. sing., plural)
       %1% %1f% %2% %2f%  posesivo español (el femenino solo hace falta para
                          "nuestra/nuestras": mi, tu y su no tienen género)
     ====================================================================== */
  var POS_FR = [
    {m:'mon',   f:'ma',    p:'mes'},
    {m:'ton',   f:'ta',    p:'tes'},
    {m:'son',   f:'sa',    p:'ses'},
    {m:'notre', f:'notre', p:'nos'},
    {m:'votre', f:'votre', p:'vos'},
    {m:'leur',  f:'leur',  p:'leurs'}
  ];
  var POS_ES = [
    {s:'mi', sf:'mi', p:'mis', pf:'mis'},
    {s:'tu', sf:'tu', p:'tus', pf:'tus'},
    {s:'su', sf:'su', p:'sus', pf:'sus'},
    {s:'nuestro', sf:'nuestra', p:'nuestros', pf:'nuestras'},
    {s:'su', sf:'su', p:'sus', pf:'sus'},
    {s:'su', sf:'su', p:'sus', pf:'sus'}
  ];

  function posFr(texto, persona) {
    var P = POS_FR[persona] || POS_FR[2];
    return texto
      /* ma + vocal se vuelve mon, por la misma razón que l’ante vocal */
      .replace(/%f%\s+([aàâeéèêiîoôuûhy])/gi, function (_, v) {
        return (P.f === 'ma' || P.f === 'ta' || P.f === 'sa'
                ? P.m : P.f) + ' ' + v;
      })
      .replace(/%m%/g, P.m).replace(/%f%/g, P.f).replace(/%p%/g, P.p);
  }

  function posEs(texto, persona) {
    var P = POS_ES[persona] || POS_ES[2];
    return texto.replace(/%1f%/g, P.sf).replace(/%1%/g, P.s)
                .replace(/%2f%/g, P.pf).replace(/%2%/g, P.p);
  }

  /* Verbos españoles que INVIERTEN la frase (gustar y compañía): lo que en
     francés es complemento pasa a ser sujeto, y el sujeto francés se vuelve
     un pronombre de complemento indirecto. */
  var CLITICOS = ['me', 'te', 'le', 'nos', 'les', 'les'];

  function esPlural(comp) {
    return /^(los|las|unos|unas)\s/i.test(comp);
  }

  var MARCO_NEUTRO = {fr:'', fp:'f', es:'', ep:'f'};

  /* Semilla estable: la misma fila da siempre las mismas cinco oraciones,
     para que no cambien cada vez que se abre el cuadro. */
  function semilla(txt) {
    var h = 2166136261;
    for (var i = 0; i < txt.length; i++) {
      h ^= txt.charCodeAt(i);
      h = (h * 16777619) >>> 0;
    }
    return h;
  }

  function mayus(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
  }

  /* Mete el adverbio en su sitio francés. En los tiempos compuestos va entre
     el auxiliar y el participio — "j’ai déjà mangé", nunca "j’ai mangé déjà". */
  function insertarMedio(formaCompleta, adv, esCompuesto) {
    if (!adv) return formaCompleta;
    var partes = formaCompleta.split(' ');
    if (esCompuesto && partes.length >= 2) {
      /* el auxiliar puede venir precedido del pronombre sujeto y del
         reflexivo, así que se inserta antes del ÚLTIMO trozo, que es el
         participio */
      var pp = partes.pop();
      return partes.join(' ') + ' ' + adv + ' ' + pp;
    }
    return formaCompleta + ' ' + adv;
  }

  var COMPUESTOS = ['passeCompose','plusQueParfait','futurAnterieur',
                    'conditionnelPasse','subjonctifPasse'];

  /* ======================================================================
     GENERAR
     ====================================================================== */

  function generar(verbe, tiempo, persona, cuantas) {
    var C = global.Conjugueur, CE = global.ConjugadorES;
    var datos = global.EJEMPLOS[verbe.i];
    if (!datos || !C || !CE) return [];

    var marcos = MARCOS[tiempo] || MARCOS.present;
    var comps = datos.c || [];
    if (!comps.length) return [];

    var esCompuesto = COMPUESTOS.indexOf(tiempo) !== -1;
    var tEs = TIEMPO_ES[tiempo] || 'presente';
    var n = cuantas || 5;

    /* Barajado determinista: mismo verbo + tiempo + persona, mismas frases */
    var s = semilla(verbe.i + '|' + tiempo + '|' + persona);
    function paso() { s = (s * 1103515245 + 12345) >>> 0; return s; }

    var out = [], usadas = {};
    var intentos = 0, maxIntentos = comps.length * marcos.length * 2;

    while (out.length < n && intentos < maxIntentos) {
      intentos++;
      var comp = comps[paso() % comps.length];
      var marco = marcos[paso() % marcos.length];
      /* Un complemento permanente ignora el marco temporal, así que la clave
         tiene que verlo ya neutralizado o el mismo texto saldría dos veces. */
      if ((comp[4] || '').indexOf('p') !== -1) marco = MARCO_NEUTRO;
      var clave = comp[0] + '§' + (marco.fr || marco.pre || '');
      if (usadas[clave]) continue;
      usadas[clave] = 1;

      var frase = armar(verbe, datos, comp, marco, tiempo, tEs, persona, esCompuesto);
      if (frase) out.push(frase);
    }
    return out;
  }

  function armar(verbe, datos, comp, marco, tiempo, tEs, persona, esCompuesto) {
    var C = global.Conjugueur, CE = global.ConjugadorES;

    /* La persona que manda para los posesivos. En imperativo los tres huecos
       son tu / nous / vous, o sea las personas 1, 3 y 4. */
    var pPos = tiempo === 'imperatif' ? [1, 3, 4][persona] : persona;

    var compFr = posFr(comp[0], pPos);
    var compEs = posEs(comp[1], pPos);
    var verboEs = comp[2] || datos.es;
    var notaFrase = comp[3] || null;

    /* Clítico que el complemento manda delante del verbo español:
       "«les» a todos" -> "les gusto a todos" */
    var clitico = '';
    var mc = compEs.match(/^«([^»]+)»\s*/);
    if (mc) { clitico = mc[1]; compEs = compEs.slice(mc[0].length); }

    /* --- francés --- */
    var formaFr;
    if (tiempo === 'imperatif') {
      var imp = C.conjuguer(verbe, 'imperatif');
      var k = Math.max(0, Math.min(2, persona));
      if (!imp || !imp[k] || imp[k] === '—') return null;
      formaFr = imp[k];
      if (verbe.p) formaFr += ['-toi', '-nous', '-vous'][k];
    } else {
      formaFr = C.avecPronom(verbe, tiempo, persona);
      if (!formaFr || /—/.test(formaFr)) return null;
    }

    /* --- español --- */
    var invierte = verboEs.charAt(0) === '@';
    if (invierte) verboEs = verboEs.slice(1);

    var formaEs;
    if (invierte) {
      /* "J’aime le café" no es "yo gusto el café": el café pasa a sujeto y yo
         me vuelvo complemento indirecto. La concordancia va con el café. */
      var formas = CE.conjugar(verboEs, tEs === 'imperativo' ? 'presente' : tEs);
      if (!formas) return null;
      var idx = esPlural(compEs) ? 5 : 2;
      formaEs = CLITICOS[persona] + ' ' + formas[idx];
    } else if (tiempo === 'imperatif') {
      formaEs = CE.glosa(verboEs, 'imperativo', persona, {conPronombre:false});
    } else {
      formaEs = CE.glosa(verboEs, tEs, persona, {conPronombre:true});
      if (clitico) {
        /* el clítico se cuela entre el pronombre sujeto y el verbo */
        formaEs = formaEs.replace(/^(\S+)\s+/, '$1 ' + clitico + ' ');
      }
    }
    if (!formaEs) return null;

    /* --- subjuntivo: disparador delante en vez de marco temporal --- */
    if (marco.pre) {
      var frS = marco.pre + ' ' + quitarQue(formaFr) + (compFr ? ' ' + compFr : '');
      var esS = marco.pres + ' ' + formaEs + (compEs ? ' ' + compEs : '');
      return {
        fr: frS.replace(/\s+/g, ' ').trim() + '.',
        es: mayus(esS.replace(/\s+/g, ' ').trim()) + '.',
        nota: notaFrase
      };
    }

    /* --- francés, por posición --- */
    var cuerpoFr = formaFr;
    if (marco.fp === 'm' && marco.fr) {
      cuerpoFr = insertarMedio(cuerpoFr, marco.fr, esCompuesto);
    }
    if (compFr) cuerpoFr += ' ' + compFr;
    if (marco.fp === 'f' && marco.fr) cuerpoFr += ' ' + marco.fr;
    if (marco.fp === 'i' && marco.fr) cuerpoFr = marco.fr + ', ' + cuerpoFr;

    /* --- español. Sin coma tras el adverbio inicial: el español no la pide
           y "Ayer, bebí café" se lee peor que "Ayer bebí café". --- */
    var cuerpoEs = formaEs;
    if (compEs) cuerpoEs += ' ' + compEs;
    if (marco.ep === 'f' && marco.es) cuerpoEs += ' ' + marco.es;
    if (marco.ep === 'i' && marco.es) {
      /* En español el adverbio se mete DESPUÉS del pronombre sujeto:
         "yo siempre bebo café", no "siempre yo bebo café". Si la frase no
         empieza por pronombre (las de gustar arrancan con clítico), va
         al principio. */
      var mp = cuerpoEs.match(/^(yo|tú|él\/ella|nosotros|ustedes|ellos\/ellas)\s+/);
      cuerpoEs = mp ? mp[0] + marco.es + ' ' + cuerpoEs.slice(mp[0].length)
                    : marco.es + ' ' + cuerpoEs;
    }

    var fr = mayus(cuerpoFr.replace(/\s+/g, ' ').trim());
    var es = mayus(cuerpoEs.replace(/\s+/g, ' ').trim());

    if (tiempo === 'imperatif') {
      /* el francés deja un espacio antes del signo; el español abre con ¡ */
      return { fr: fr + ' !', es: '¡' + es + '!', nota: notaFrase };
    }
    return { fr: fr + '.', es: es + '.', nota: notaFrase };
  }

  /* El subjuntivo francés se muestra en las tablas como "que je boive"; al
     meterlo tras un disparador que ya trae su propio "que", sobra el de la
     forma. */
  function quitarQue(s) {
    return s.replace(/^que?\s+/i, '').replace(/^qu’/i, '');
  }

  global.Frases = {
    generar: generar,
    NOTAS_TIEMPO: NOTAS_TIEMPO,
    NOTA_VOUS: NOTA_VOUS,
    TIEMPO_ES: TIEMPO_ES
  };
})(typeof window !== 'undefined' ? window : globalThis);
