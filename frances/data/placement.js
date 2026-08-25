/* ==========================================================================
   EXAMEN DE NIVELACIÓN
   --------------------------------------------------------------------------
   40 preguntas de dificultad creciente, repartidas en cuatro ejes:
     g = gramática · v = vocabulario · c = conjugación · x = comprensión

   No es un test de "cuántas sabes": el nivel se calcula por el punto donde
   dejas de acertar de forma consistente. Alguien que acierta todo A1 y A2
   pero falla B1 es un A2 sólido, no un B1 flojo.
   ========================================================================== */

window.PLACEMENT = [

/* ---------------------------- A1 ---------------------------------------- */
{lvl:'A1', eje:'g', q:'___ voiture est rouge.', opts:['La','Le','Les'], r:0,
 expl:'"voiture" es femenino en francés.'},
{lvl:'A1', eje:'c', q:'Je ___ étudiant.', opts:['suis','est','es'], r:0,
 expl:'être, primera persona: je suis.'},
{lvl:'A1', eje:'v', q:'"Bonjour" se usa…', opts:['de día','solo de noche','solo al despedirse'], r:0,
 expl:'De noche se dice "bonsoir"; al despedirse, "au revoir".'},
{lvl:'A1', eje:'c', q:'Nous ___ (avoir) trois enfants.', opts:['avons','avez','ont'], r:0,
 expl:'avoir, primera del plural.'},
{lvl:'A1', eje:'g', q:'Je ___ parle ___ anglais.', opts:['ne / pas','pas / ne','non / pas'], r:0,
 expl:'La negación es un sándwich: ne antes del verbo, pas después.'},
{lvl:'A1', eje:'c', q:'Tu ___ (parler) français ?', opts:['parles','parle','parlez'], r:0,
 expl:'Segunda persona de los -er: -es (muda).'},
{lvl:'A1', eje:'v', q:'¿Cuál es el número 80?', opts:['quatre-vingts','octante','septante'], r:0,
 expl:'Literalmente cuatro-veintes.'},
{lvl:'A1', eje:'g', q:'C’est ___ ami. (mi, femenino: amie)', opts:['mon','ma','mes'], r:0,
 expl:'Ante vocal se usa mon aunque la palabra sea femenina.'},
{lvl:'A1', eje:'c', q:'Elle ___ (aller) au marché.', opts:['va','vas','allez'], r:0,
 expl:'aller: je vais, tu vas, il va.'},
{lvl:'A1', eje:'g', q:'"Compro libros" se dice…', opts:['J’achète des livres','J’achète livres','J’achète les livres'], r:0,
 expl:'El plural indefinido "des" no se puede omitir en francés.'},

/* ---------------------------- A2 ---------------------------------------- */
{lvl:'A2', eje:'g', q:'Je voudrais ___ pain.', opts:['du','le','un'], r:0,
 expl:'Cantidad indeterminada de algo no contable: partitivo du.'},
{lvl:'A2', eje:'c', q:'Hier, j’___ (manger) au restaurant.', opts:['ai mangé','suis mangé','mangeais'], r:0,
 expl:'Acción puntual terminada: passé composé con avoir.'},
{lvl:'A2', eje:'c', q:'Elle est ___ (partir) ce matin.', opts:['partie','parti','partis'], r:0,
 expl:'partir va con être y concuerda: sujeto femenino singular.'},
{lvl:'A2', eje:'g', q:'Je n’ai pas ___ voiture.', opts:['de','une','la'], r:0,
 expl:'Tras negación, los indefinidos se reducen a "de".'},
{lvl:'A2', eje:'g', q:'Quand j’___ petit, je jouais au foot.', opts:['étais','ai été','serai'], r:0,
 expl:'Descripción en el pasado: imperfecto.'},
{lvl:'A2', eje:'g', q:'"Je parle à Marie" con pronombre es…', opts:['Je lui parle','Je la parle','Je le parle'], r:0,
 expl:'"parler à" rige complemento indirecto: lui.'},
{lvl:'A2', eje:'g', q:'Tu vas à Paris ? — Oui, j’___ vais.', opts:['y','en','le'], r:0,
 expl:'Lugar introducido por à: pronombre y.'},
{lvl:'A2', eje:'c', q:'Demain, je ___ (être) à Lyon.', opts:['serai','suis','étais'], r:0,
 expl:'Futuro simple de être: radical ser-.'},
{lvl:'A2', eje:'g', q:'J’habite ___ Mexique.', opts:['au','en','à'], r:0,
 expl:'Mexique es masculino pese a terminar en -e.'},
{lvl:'A2', eje:'g', q:'Ce vin est ___ que l’autre. (mejor)', opts:['meilleur','mieux','plus bon'], r:0,
 expl:'Con sustantivo va meilleur. "plus bon" no existe.'},

/* ---------------------------- B1 ---------------------------------------- */
{lvl:'B1', eje:'c', q:'Si j’avais de l’argent, je ___ (voyager).', opts:['voyagerais','voyagerai','voyage'], r:0,
 expl:'si + imperfecto → condicional.'},
{lvl:'B1', eje:'g', q:'¿Cuál es INCORRECTA?', opts:['Si j’aurais le temps…','Si j’avais le temps…','Si j’ai le temps…'], r:0,
 expl:'Nunca condicional tras "si" condicional.'},
{lvl:'B1', eje:'c', q:'Il faut que je ___ (partir).', opts:['parte','pars','partirai'], r:0,
 expl:'"il faut que" dispara subjuntivo.'},
{lvl:'B1', eje:'g', q:'"Espero que venga" es…', opts:['J’espère qu’il viendra','J’espère qu’il vienne','J’espère qu’il vient'], r:0,
 expl:'espérer lleva indicativo en francés, al revés que el español.'},
{lvl:'B1', eje:'g', q:'C’est le livre ___ je t’ai parlé.', opts:['dont','que','qui'], r:0,
 expl:'"parler de" rige de: el relativo es dont.'},
{lvl:'B1', eje:'g', q:'C’est l’homme ___ travaille ici.', opts:['qui','que','dont'], r:0,
 expl:'Le sigue un verbo, luego es sujeto: qui.'},
{lvl:'B1', eje:'c', q:'Quand je suis arrivé, il ___ déjà parti.', opts:['était','est','a été'], r:0,
 expl:'Anterioridad en el pasado: plus-que-parfait.'},
{lvl:'B1', eje:'g', q:'"Me robaron la cartera" en francés natural es…', opts:['On m’a volé mon portefeuille','Mon portefeuille fut volé','Je fus volé'], r:0,
 expl:'El francés prefiere "on" a la pasiva.'},
{lvl:'B1', eje:'v', q:'"Je n’en peux plus" significa…', opts:['No aguanto más','No puedo ir','Ya no quiero'], r:0,
 expl:'Expresión fija de agotamiento.'},
{lvl:'B1', eje:'c', q:'« Je viendrai » → Il a dit qu’il ___.', opts:['viendrait','viendra','venait'], r:0,
 expl:'En discurso indirecto tras pasado, el futuro pasa a condicional.'},

/* ---------------------------- B2 ---------------------------------------- */
{lvl:'B2', eje:'g', q:'Les lettres que j’ai ___ (écrire).', opts:['écrites','écrit','écrits'], r:0,
 expl:'El COD "que" va delante: el participio concuerda en femenino plural.'},
{lvl:'B2', eje:'g', q:'Elle s’est ___ (laver) les mains.', opts:['lavé','lavée','lavées'], r:0,
 expl:'El directo es "les mains" y va después: no concuerda.'},
{lvl:'B2', eje:'v', q:'"Pourtant" significa…', opts:['sin embargo','por lo tanto','porque'], r:0,
 expl:'Falso amigo clásico. "Por lo tanto" es "donc".'},
{lvl:'B2', eje:'x', q:'"Il fut" corresponde en francés hablado a…', opts:['il a été','il était','il sera'], r:0,
 expl:'Passé simple de être, propio de la literatura.'},
{lvl:'B2', eje:'g', q:'"Antes de salir" es…', opts:['Avant de sortir','Avant sortant','Avant que sortir'], r:0,
 expl:'Tras preposición va infinitivo, no la forma en -ant.'},
{lvl:'B2', eje:'v', q:'"Actuellement" significa…', opts:['actualmente','en realidad','eventualmente'], r:0,
 expl:'Falso amigo. "En realidad" es "en fait".'},
{lvl:'B2', eje:'g', q:'Je les ai ___ venir. (hacer)', opts:['fait','faits','faites'], r:0,
 expl:'"fait" seguido de infinitivo es siempre invariable.'},
{lvl:'B2', eje:'x', q:'"Ils vinrent" significa…', opts:['vinieron','vieron','vivieron'], r:0,
 expl:'Passé simple de venir.'},
{lvl:'B2', eje:'v', q:'"Bagnole" pertenece al registro…', opts:['familiar','formal','literario'], r:0,
 expl:'La palabra neutra es "voiture".'},
{lvl:'B2', eje:'g', q:'"Bien qu’il ___ tard, je reste."', opts:['soit','est','sera'], r:0,
 expl:'"bien que" siempre pide subjuntivo.'}

];

/* --------------------------------------------------------------------------
   Cálculo del nivel.

   No se usa el total de aciertos: se busca el nivel más alto en el que la
   persona todavía responde bien de forma consistente. El umbral es 60% —
   por debajo de eso el nivel no está consolidado.
   -------------------------------------------------------------------------- */
window.calculerNiveau = function (reponses) {
  var NIVEAUX = ['A1','A2','B1','B2'];
  var stats = {};
  NIVEAUX.forEach(function (n) { stats[n] = { bon:0, total:0 }; });

  var ejes = { g:{bon:0,total:0}, v:{bon:0,total:0}, c:{bon:0,total:0}, x:{bon:0,total:0} };

  window.PLACEMENT.forEach(function (q, i) {
    var s = stats[q.lvl];
    s.total++;
    ejes[q.eje].total++;
    if (reponses[i] === q.r) { s.bon++; ejes[q.eje].bon++; }
  });

  /* El nivel es el más alto superado con al menos 60%, sin saltos: si falla
     A2 no puede ser B1 aunque haya acertado preguntas sueltas de B1. */
  var niveau = 'A1', atteint = null;
  for (var k = 0; k < NIVEAUX.length; k++) {
    var n = NIVEAUX[k], s = stats[n];
    var taux = s.total ? s.bon / s.total : 0;
    if (taux >= 0.6) atteint = n; else break;
  }
  niveau = atteint || 'A1';

  /* ¿Está a medias del siguiente? Eso decide si se le sugiere repasar o
     avanzar. */
  var idx = NIVEAUX.indexOf(niveau);
  var suivant = NIVEAUX[idx + 1] || null;
  var progresSuivant = suivant && stats[suivant].total
    ? stats[suivant].bon / stats[suivant].total : 0;

  var diagnostic = [];
  var noms = { g:'Gramática', v:'Vocabulario', c:'Conjugación', x:'Comprensión' };
  Object.keys(ejes).forEach(function (e) {
    if (!ejes[e].total) return;
    var t = ejes[e].bon / ejes[e].total;
    diagnostic.push({ eje:e, nom:noms[e], taux:Math.round(t * 100),
                      etat: t >= 0.75 ? 'fort' : (t >= 0.5 ? 'moyen' : 'faible') });
  });
  diagnostic.sort(function (a, b) { return a.taux - b.taux; });

  var totalBon = 0, totalQ = 0;
  NIVEAUX.forEach(function (n) { totalBon += stats[n].bon; totalQ += stats[n].total; });

  return {
    niveau: niveau,
    suivant: suivant,
    progresSuivant: Math.round(progresSuivant * 100),
    score: totalBon,
    total: totalQ,
    parNiveau: stats,
    diagnostic: diagnostic,
    pointFaible: diagnostic.length ? diagnostic[0] : null
  };
};
