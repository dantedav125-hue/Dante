/* ==========================================================================
   GRAMMAIRE B1 — de defenderse a expresarse
   ========================================================================== */

window.GRAMMAIRE_B1 = [

/* ------------------------------------------------------------------ 1 --- */
{
  id:'b1-01-conditionnel', lvl:'B1', ordre:1, minutos:14,
  titre:'El condicional y las frases con SI',
  resume:'Radical de futuro + terminaciones de imperfecto. Y las tres estructuras con SI, que hay que tener automatizadas.',
  theorie:[
    {t:'regle', es:'El condicional es la mezcla más elegante del francés: RADICAL DE FUTURO + TERMINACIONES DE IMPERFECTO.', fr:'futuro: je parlerai → condicional: je parlerais'},
    {t:'table', head:['Persona','Terminación','parler','être','avoir','aller'], rows:[
      ['je','-ais','parlerais','serais','aurais','irais'],
      ['tu','-ais','parlerais','serais','aurais','irais'],
      ['il / elle','-ait','parlerait','serait','aurait','irait'],
      ['nous','-ions','parlerions','serions','aurions','irions'],
      ['vous','-iez','parleriez','seriez','auriez','iriez'],
      ['ils / elles','-aient','parleraient','seraient','auraient','iraient']
    ]},
    {t:'p', es:'Los radicales irregulares son EXACTAMENTE los del futuro. Si ya te sabes "je serai", ya sabes "je serais". No hay nada nuevo que memorizar.'},
    {t:'piege', es:'La única diferencia entre futuro y condicional en primera persona es una s muda: "je parlerai" (futuro) vs "je parlerais" (condicional). Al oído, en francés estándar, son casi indistinguibles. En la escritura importa mucho.'},

    {t:'p', es:'Para qué sirve el condicional:'},
    {t:'table', head:['Uso','Ejemplo','Español'], rows:[
      ['Cortesía','Je voudrais un café.','Quisiera un café.'],
      ['Consejo','Tu devrais dormir.','Deberías dormir.'],
      ['Hipótesis','Si j’avais le temps, je viendrais.','Si tuviera tiempo, vendría.'],
      ['Información no confirmada','Il y aurait vingt blessés.','Habría veinte heridos.'],
      ['Deseo','J’aimerais partir.','Me gustaría irme.']
    ]},
    {t:'ex', fr:'Je voudrais réserver une table.', es:'Quisiera reservar una mesa.'},
    {t:'ex', fr:'Tu pourrais m’aider ?', es:'¿Podrías ayudarme?'},
    {t:'ex', fr:'On devrait partir maintenant.', es:'Deberíamos irnos ahora.'},
    {t:'p', es:'Ese cuarto uso, el de la información no confirmada, es típico del periodismo francés. Cuando leas "le président aurait démissionné", significa "al parecer el presidente dimitió" — no está confirmado. Es una convención periodística que conviene reconocer.'},

    {t:'regle', es:'LAS TRES ESTRUCTURAS CON SI. Estas hay que automatizarlas: en la cláusula del SI NUNCA va condicional ni futuro.', fr:'Si + présent → futur · Si + imparfait → conditionnel · Si + plus-que-parfait → conditionnel passé'},
    {t:'table', head:['Tipo','Estructura','Ejemplo','Español'], rows:[
      ['1. Real / probable','si + presente → futuro','S’il pleut, je resterai.','Si llueve, me quedaré.'],
      ['2. Hipotético','si + imperfecto → condicional','S’il pleuvait, je resterais.','Si lloviera, me quedaría.'],
      ['3. Irreal pasado','si + pluscuamperfecto → condicional pasado','S’il avait plu, je serais resté.','Si hubiera llovido, me habría quedado.']
    ]},
    {t:'ex', fr:'Si j’ai le temps, je viendrai.', es:'Si tengo tiempo, vendré. — es posible'},
    {t:'ex', fr:'Si j’avais le temps, je viendrais.', es:'Si tuviera tiempo, vendría. — no lo tengo'},
    {t:'ex', fr:'Si j’avais eu le temps, je serais venu.', es:'Si hubiera tenido tiempo, habría venido. — ya no se puede'},
    {t:'piege', es:'ERROR NÚMERO UNO de todos los estudiantes: poner condicional después de "si". "Si j’aurais le temps" es INCORRECTO y a un francés le rechina como a nosotros "si yo habría tenido". La regla es absoluta: después de SI condicional, nunca va -rais ni -rai. Los franceses tienen un dicho de escuela: "les si n’aiment pas les rai".'},
    {t:'p', es:'Ojo: sí puede ir futuro o condicional tras "si" cuando "si" significa "si acaso / si es que" en pregunta indirecta: "Je me demande s’il viendra" (Me pregunto si vendrá). Ahí "si" no es condicional, es interrogativo.'},

    {t:'p', es:'El condicional pasado se forma con el auxiliar en condicional + participio:'},
    {t:'ex', fr:'J’aurais dû partir plus tôt.', es:'Debí haberme ido antes. — arrepentimiento'},
    {t:'ex', fr:'Tu aurais pu me le dire !', es:'¡Me lo podrías haber dicho!'},
    {t:'p', es:'"J’aurais dû" y "tu aurais pu" son de las estructuras más útiles que existen para hablar de lo que no se hizo. Vale la pena tenerlas listas.'}
  ],
  exercices:[
    {type:'trou', q:'Si j’avais de l’argent, je ___ (voyager).', r:['voyagerais'], expl:'si + imperfecto → condicional.'},
    {type:'trou', q:'S’il fait beau demain, nous ___ (sortir).', r:['sortirons'], expl:'si + presente → futuro.'},
    {type:'trou', q:'Je ___ (vouloir) un café, s’il vous plaît.', r:['voudrais'], expl:'Condicional de cortesía.'},
    {type:'qcm', q:'¿Cuál es INCORRECTA?', opts:['Si j’aurais le temps, je viendrais','Si j’avais le temps, je viendrais','Si j’ai le temps, je viendrai'], r:0,
     expl:'Nunca condicional tras si. "Les si n’aiment pas les rai".'},
    {type:'qcm', q:'"Si hubiera sabido, no habría venido" es…', opts:['Si j’avais su, je ne serais pas venu','Si j’aurais su, je ne serais pas venu','Si je savais, je ne viendrais pas'], r:0,
     expl:'Tercera estructura: pluscuamperfecto → condicional pasado.'}
  ]
},

/* ------------------------------------------------------------------ 2 --- */
{
  id:'b1-02-subjonctif', lvl:'B1', ordre:2, minutos:16,
  titre:'El subjuntivo (I): formación y disparadores',
  resume:'Buena noticia: tienes subjuntivo en español y funciona parecido. Mala: los disparadores no coinciden del todo.',
  theorie:[
    {t:'p', es:'Ventaja enorme para ti: el español tiene subjuntivo y el inglés casi no. Un anglófono sufre con esto; un hispanohablante ya tiene el instinto. Lo que hay que ajustar son los detalles de dónde se dispara.'},

    {t:'regle', es:'FORMACIÓN: toma el "ils" del presente, quítale -ent, y añade e, es, e, ions, iez, ent.', fr:'ils parlent → parl- → que je parle'},
    {t:'table', head:['Persona','Terminación','parler','finir','prendre'], rows:[
      ['que je','-e','parle','finisse','prenne'],
      ['que tu','-es','parles','finisses','prennes'],
      ['qu’il','-e','parle','finisse','prenne'],
      ['que nous','-ions','parlions','finissions','prenions'],
      ['que vous','-iez','parliez','finissiez','preniez'],
      ['qu’ils','-ent','parlent','finissent','prennent']
    ]},
    {t:'p', es:'Detalle: nous y vous toman el radical del IMPERFECTO, no el de ils. Por eso "que nous prenions" y no "que nous prennions".'},

    {t:'p', es:'Los irregulares. Son pocos, pero son los verbos que más se usan:'},
    {t:'table', head:['Verbo','que je','que nous'], rows:[
      ['être','sois','soyons'],
      ['avoir','aie','ayons'],
      ['aller','aille','allions'],
      ['faire','fasse','fassions'],
      ['pouvoir','puisse','puissions'],
      ['savoir','sache','sachions'],
      ['vouloir','veuille','voulions'],
      ['falloir','faille','—'],
      ['valoir','vaille','valions']
    ]},

    {t:'regle', es:'CUÁNDO SE USA: tras verbos de voluntad, emoción, duda y necesidad, cuando hay CAMBIO DE SUJETO.', fr:'Je veux QUE TU viennes. (dos sujetos) · Je veux venir. (un sujeto, infinitivo)'},
    {t:'p', es:'Los disparadores, agrupados:'},
    {t:'table', head:['Categoría','Expresiones','Ejemplo'], rows:[
      ['Voluntad','vouloir que, souhaiter que, exiger que','Je veux qu’il vienne.'],
      ['Emoción','être content que, avoir peur que, regretter que','Je suis content que tu sois là.'],
      ['Duda','douter que, ne pas penser que, ne pas croire que','Je doute qu’il vienne.'],
      ['Necesidad','il faut que, il est nécessaire que','Il faut que tu partes.'],
      ['Juicio','il est important que, c’est dommage que','Il est important que tu comprennes.'],
      ['Posibilidad','il est possible que, il se peut que','Il se peut qu’il pleuve.']
    ]},
    {t:'ex', fr:'Il faut que je parte.', es:'Tengo que irme. — "il faut que" es el disparador más frecuente del idioma'},
    {t:'ex', fr:'Je veux que tu viennes.', es:'Quiero que vengas.'},
    {t:'ex', fr:'Je suis content que tu sois là.', es:'Me alegra que estés aquí.'},
    {t:'ex', fr:'Bien qu’il soit tard, je reste.', es:'Aunque sea tarde, me quedo.'},

    {t:'regle', es:'REGLA DEL CAMBIO DE SUJETO: si el sujeto es el mismo, NO se usa subjuntivo sino infinitivo.', fr:'Je veux partir. (yo/yo) · Je veux que tu partes. (yo/tú)'},
    {t:'ex', fr:'Je veux partir.', es:'Quiero irme — mismo sujeto, infinitivo'},
    {t:'ex', fr:'Je veux que tu partes.', es:'Quiero que te vayas — sujetos distintos, subjuntivo'},
    {t:'piege', es:'Esto también funciona igual en español, así que te sale gratis: "quiero irme" vs "quiero que te vayas". Aprovecha el paralelo.'},

    {t:'p', es:'Conjunciones que SIEMPRE piden subjuntivo. Vale la pena memorizarlas como bloque:'},
    {t:'table', head:['Conjunción','Español','Ejemplo'], rows:[
      ['bien que / quoique','aunque','Bien qu’il pleuve, je sors.'],
      ['pour que / afin que','para que','Je parle lentement pour que tu comprennes.'],
      ['avant que','antes de que','Partons avant qu’il arrive.'],
      ['jusqu’à ce que','hasta que','Attends jusqu’à ce que je revienne.'],
      ['à condition que','a condición de que','D’accord, à condition que tu paies.'],
      ['sans que','sin que','Il est parti sans que je le voie.'],
      ['de peur que','por miedo a que','Je pars tôt de peur qu’il y ait du trafic.'],
      ['pourvu que','con tal de que','Pourvu qu’il fasse beau !']
    ]},
    {t:'piege', es:'Trampa: "après que" lleva INDICATIVO en la norma clásica, no subjuntivo, aunque muchísimos franceses digan subjuntivo. La lógica: "avant que" es hipotético (todavía no pasa), "après que" es un hecho (ya pasó). Si lo oyes con subjuntivo en la calle, no es que estés loco: es un cambio en curso.'}
  ],
  exercices:[
    {type:'trou', q:'Il faut que je ___ (partir).', r:['parte'], expl:'Subjuntivo de partir: ils partent → part- → que je parte.'},
    {type:'trou', q:'Je veux que tu ___ (venir).', r:['viennes'], expl:'ils viennent → vienn- → que tu viennes.'},
    {type:'trou', q:'Bien qu’il ___ (être) tard, je reste.', r:['soit'], expl:'Subjuntivo irregular de être.'},
    {type:'trou', q:'Il faut que nous ___ (faire) attention.', r:['fassions'], expl:'Radical irregular fass-.'},
    {type:'qcm', q:'"Quiero irme" es…', opts:['Je veux partir','Je veux que je parte','Je veux que partir'], r:0,
     expl:'Mismo sujeto: infinitivo, no subjuntivo.'},
    {type:'qcm', q:'¿Cuál NO pide subjuntivo?', opts:['après que','avant que','bien que'], r:0,
     expl:'"après que" lleva indicativo en la norma, porque el hecho ya ocurrió.'}
  ]
},

/* ------------------------------------------------------------------ 3 --- */
{
  id:'b1-03-subjonctif-2', lvl:'B1', ordre:3, minutos:12,
  titre:'El subjuntivo (II): cuándo NO se usa',
  resume:'La mitad del trabajo es saber dónde no ponerlo. Aquí es donde el francés y el español se separan.',
  theorie:[
    {t:'p', es:'Ya sabes formar el subjuntivo y conoces los disparadores. Ahora lo que de verdad marca la diferencia: los casos donde el español pide subjuntivo y el francés NO, o al revés.'},

    {t:'regle', es:'ESPERAR: "espérer que" lleva INDICATIVO en francés. En español "espero que" lleva subjuntivo.', fr:'J’espère qu’il viendra. (no "vienne")'},
    {t:'ex', fr:'J’espère qu’il viendra.', es:'Espero que venga. — español subjuntivo, francés futuro'},
    {t:'ex', fr:'J’espère que tu vas bien.', es:'Espero que estés bien.'},
    {t:'piege', es:'Este es EL error de los hispanohablantes en francés. "J’espère qu’il vienne" suena mal. Pero cuidado: "souhaiter que" (desear que) SÍ lleva subjuntivo. Espérer no, souhaiter sí. No hay lógica: hay que memorizarlo.'},

    {t:'regle', es:'PENSAR y CREER en AFIRMATIVO llevan indicativo. En NEGATIVO o INTERROGATIVO pasan a subjuntivo.', fr:'Je pense qu’il vient. / Je ne pense pas qu’il vienne.'},
    {t:'table', head:['Afirmativo (indicativo)','Negativo (subjuntivo)'], rows:[
      ['Je pense qu’il vient.','Je ne pense pas qu’il vienne.'],
      ['Je crois qu’elle a raison.','Je ne crois pas qu’elle ait raison.'],
      ['Je suis sûr qu’il viendra.','Je ne suis pas sûr qu’il vienne.'],
      ['Il est certain qu’il pleut.','Il n’est pas certain qu’il pleuve.']
    ]},
    {t:'p', es:'La lógica es limpia: si afirmas algo, es real → indicativo. Si lo dudas o lo niegas, entra en el terreno de lo incierto → subjuntivo. El español hace exactamente lo mismo, así que aquí sí te ayuda el instinto.'},

    {t:'regle', es:'Tras QUAND, el francés usa INDICATIVO (futuro si es futuro). El español usa subjuntivo.', fr:'Quand il viendra, on mangera.'},
    {t:'ex', fr:'Quand tu arriveras, appelle-moi.', es:'Cuando llegues, llámame.'},
    {t:'ex', fr:'Dès qu’il sera là, on commencera.', es:'En cuanto esté aquí, empezamos.'},
    {t:'piege', es:'Repito esto porque es de los errores más persistentes: "quand tu arrives" (presente) o "quand tu arriveras" (futuro), NUNCA subjuntivo. El francés no tiene un "cuando llegues": tiene "cuando llegarás".'},

    {t:'p', es:'Tabla resumen de los contrastes que más cuestan:'},
    {t:'table', head:['Español','Francés','Modo francés'], rows:[
      ['Espero que venga','J’espère qu’il viendra','indicativo'],
      ['Deseo que venga','Je souhaite qu’il vienne','subjuntivo'],
      ['Cuando llegues','Quand tu arriveras','indicativo'],
      ['Antes de que llegues','Avant que tu arrives','subjuntivo'],
      ['Después de que llegues','Après que tu es arrivé','indicativo'],
      ['Creo que viene','Je crois qu’il vient','indicativo'],
      ['No creo que venga','Je ne crois pas qu’il vienne','subjuntivo'],
      ['Es probable que venga','Il est probable qu’il viendra','indicativo'],
      ['Es posible que venga','Il est possible qu’il vienne','subjuntivo']
    ]},
    {t:'piege', es:'Fíjate en las dos últimas: PROBABLE lleva indicativo (es bastante seguro) y POSIBLE lleva subjuntivo (es incierto). El francés gradúa la certeza con el modo. Es sutil y es exactamente el tipo de detalle que separa a un B1 de un B2.'},

    {t:'p', es:'Truco final para cuando no te acuerdes: si puedes reformular con un infinitivo o un sustantivo, evita el subjuntivo por completo.'},
    {t:'ex', fr:'Avant de partir, appelle-moi.', es:'Antes de irte, llámame — infinitivo, mismo sujeto, sin subjuntivo'},
    {t:'ex', fr:'Il faut partir.', es:'Hay que irse — impersonal, sin subjuntivo'},
    {t:'p', es:'Un francés culto usa muchísimo estas salidas. No es hacer trampa: es como se habla de verdad.'}
  ],
  exercices:[
    {type:'qcm', q:'"Espero que venga" es…', opts:['J’espère qu’il viendra','J’espère qu’il vienne','J’espère qu’il vient'], r:0,
     expl:'espérer lleva indicativo, a diferencia del español.'},
    {type:'trou', q:'Je ne pense pas qu’il ___ (avoir) raison.', r:['ait'], expl:'penser en negativo dispara subjuntivo.'},
    {type:'trou', q:'Je pense qu’il ___ (avoir) raison.', r:['a'], expl:'penser en afirmativo lleva indicativo.'},
    {type:'qcm', q:'"Cuando llegues, llámame" es…', opts:['Quand tu arriveras, appelle-moi','Quand tu arrives, appelle-moi','Quand tu arriveras, appelle-moi'], r:0,
     expl:'Futuro, nunca subjuntivo, tras quand.'},
    {type:'qcm', q:'¿Cuál lleva subjuntivo?', opts:['Il est possible qu’il vienne','Il est probable qu’il viendra','J’espère qu’il viendra'], r:0,
     expl:'Posible = incierto = subjuntivo. Probable = casi seguro = indicativo.'}
  ]
},

/* ------------------------------------------------------------------ 4 --- */
{
  id:'b1-04-relatifs', lvl:'B1', ordre:4, minutos:14,
  titre:'Los pronombres relativos: qui, que, dont, où',
  resume:'Unir dos frases en una. QUI y QUE no se eligen por persona/cosa como en español, sino por función.',
  theorie:[
    {t:'p', es:'Aquí hay una trampa de traducción directa. En español "que" sirve para casi todo y "quien" es para personas. En francés NO funciona así: la elección entre qui y que depende de la FUNCIÓN GRAMATICAL, no de si es persona o cosa.'},

    {t:'regle', es:'QUI = sujeto del verbo que sigue. QUE = complemento directo.', fr:'L’homme QUI parle. (él habla) · L’homme QUE je vois. (yo lo veo)'},
    {t:'table', head:['Pronombre','Función','Ejemplo','Truco'], rows:[
      ['qui','sujeto','Le train qui arrive.','le sigue un VERBO'],
      ['que','complemento directo','Le train que je prends.','le sigue un SUJETO'],
      ['dont','complemento con DE','Le livre dont je parle.','el verbo lleva "de"'],
      ['où','lugar o tiempo','La ville où j’habite.','dónde o cuándo']
    ]},
    {t:'ex', fr:'C’est l’homme qui travaille ici.', es:'Es el hombre que trabaja aquí. — él es el que trabaja: sujeto'},
    {t:'ex', fr:'C’est l’homme que je connais.', es:'Es el hombre que conozco. — yo lo conozco: directo'},
    {t:'ex', fr:'C’est la voiture qui est rouge.', es:'Es el coche que es rojo. — qui con una COSA, sin problema'},
    {t:'piege', es:'Fíjate en ese último ejemplo: "qui" se usa con cosas perfectamente. La regla no es persona/cosa. El truco infalible: mira lo que viene después. Si sigue un VERBO → qui. Si sigue un SUJETO (je, tu, il, un nombre) → que.'},
    {t:'p', es:'Y ojo: "que" se contrae en "qu’" ante vocal, pero "qui" NUNCA se contrae. "L’homme qui arrive", nunca "qu’arrive". Esa es otra forma de distinguirlos al leer.'},

    {t:'regle', es:'DONT sustituye a un complemento introducido por DE. No tiene equivalente limpio en español.', fr:'Je parle DE ce livre → Le livre DONT je parle.'},
    {t:'ex', fr:'C’est le livre dont je t’ai parlé.', es:'Es el libro del que te hablé.'},
    {t:'ex', fr:'La personne dont j’ai besoin.', es:'La persona que necesito — "avoir besoin DE"'},
    {t:'ex', fr:'Une maison dont le toit est rouge.', es:'Una casa cuyo techo es rojo — dont también cubre "cuyo"'},
    {t:'p', es:'DONT es la prueba de fuego de un B1. Los verbos que lo piden son los que rigen "de": parler de, avoir besoin de, avoir envie de, se souvenir de, s’occuper de, être fier de, rêver de.'},
    {t:'piege', es:'Error frecuente: decir "le livre que je parle" en vez de "dont". Si el verbo lleva "de", el relativo es dont, punto. Aprende los verbos con su preposición y esto se resuelve solo.'},

    {t:'regle', es:'OÙ cubre lugar Y tiempo. En español el de tiempo se traduce como "en que" o "cuando".', fr:'la ville où j’habite · le jour où je suis né'},
    {t:'ex', fr:'La ville où j’habite est belle.', es:'La ciudad donde vivo es bonita.'},
    {t:'ex', fr:'Le jour où je t’ai rencontré.', es:'El día en que te conocí.'},
    {t:'ex', fr:'Le moment où tout a changé.', es:'El momento en que todo cambió.'},
    {t:'piege', es:'"le jour où", "le moment où", "l’année où" — con expresiones de tiempo se usa OÙ, no "quand". "Le jour quand" es incorrecto.'},

    {t:'p', es:'Después de preposición se usan otras formas:'},
    {t:'table', head:['Antecedente','Forma','Ejemplo'], rows:[
      ['persona','qui','L’ami avec qui je travaille.'],
      ['cosa','lequel / laquelle','Le stylo avec lequel j’écris.'],
      ['cosa plural','lesquels / lesquelles','Les outils avec lesquels je travaille.'],
      ['con à','auquel / à laquelle','Le problème auquel je pense.'],
      ['con de','duquel / de laquelle','La raison pour laquelle je pars.']
    ]},
    {t:'ex', fr:'C’est la raison pour laquelle je pars.', es:'Es la razón por la cual me voy.'},
    {t:'ex', fr:'L’ami avec qui je voyage.', es:'El amigo con quien viajo.'},

    {t:'p', es:'CE QUI / CE QUE: cuando el antecedente no es una palabra sino una idea entera.'},
    {t:'ex', fr:'Je ne sais pas ce qui se passe.', es:'No sé lo que pasa. — ce qui, porque es sujeto'},
    {t:'ex', fr:'Je ne comprends pas ce que tu dis.', es:'No entiendo lo que dices. — ce que, porque es directo'},
    {t:'ex', fr:'Il est arrivé en retard, ce qui m’a énervé.', es:'Llegó tarde, lo cual me molestó.'},
    {t:'p', es:'La misma regla de siempre: tras ce qui viene un verbo, tras ce que viene un sujeto.'}
  ],
  exercices:[
    {type:'trou', q:'C’est l’homme ___ travaille ici.', r:['qui'], expl:'Le sigue un verbo: sujeto.'},
    {type:'trou', q:'C’est le livre ___ j’ai acheté.', r:['que','qu’','qu\''], expl:'Le sigue un sujeto (j’): directo.'},
    {type:'trou', q:'C’est le film ___ je t’ai parlé.', r:['dont'], expl:'"parler de" rige de: dont.'},
    {type:'trou', q:'La ville ___ je suis né.', r:['où'], expl:'Lugar: où.'},
    {type:'qcm', q:'"No sé lo que pasa" es…', opts:['Je ne sais pas ce qui se passe','Je ne sais pas ce que se passe','Je ne sais pas qui se passe'], r:0,
     expl:'"se passe" es verbo, así que necesita ce qui (sujeto).'},
    {type:'qcm', q:'¿Cuál es el truco para elegir entre qui y que?', opts:['Mirar si después viene verbo (qui) o sujeto (que)','Mirar si es persona (qui) o cosa (que)','Mirar si es singular o plural'], r:0,
     expl:'La función manda, no el tipo de antecedente.'}
  ]
},

/* ------------------------------------------------------------------ 5 --- */
{
  id:'b1-05-plus-que-parfait', lvl:'B1', ordre:5, minutos:10,
  titre:'El plus-que-parfait',
  resume:'El pasado del pasado. Igual que el "había hecho" español, y se usa igual.',
  theorie:[
    {t:'regle', es:'Auxiliar en IMPERFECTO + participio pasado. Mismas reglas de auxiliar y concordancia que el passé composé.', fr:'j’avais mangé · j’étais parti'},
    {t:'table', head:['','avoir + pp','être + pp'], rows:[
      ['j’','avais mangé','étais parti(e)'],
      ['tu','avais mangé','étais parti(e)'],
      ['il / elle','avait mangé','était parti(e)'],
      ['nous','avions mangé','étions parti(e)s'],
      ['vous','aviez mangé','étiez parti(e)s'],
      ['ils / elles','avaient mangé','étaient parti(e)s']
    ]},
    {t:'p', es:'Sirve para lo mismo que en español: una acción anterior a otra acción pasada.'},
    {t:'ex', fr:'Quand je suis arrivé, il était déjà parti.', es:'Cuando llegué, él ya se había ido.'},
    {t:'ex', fr:'J’avais oublié mon parapluie.', es:'Había olvidado mi paraguas.'},
    {t:'ex', fr:'Elle m’a dit qu’elle avait vu ce film.', es:'Me dijo que había visto esa película.'},

    {t:'p', es:'Ordena la cronología. En una narración con tres capas de tiempo:'},
    {t:'ex', fr:'Hier, j’ai retrouvé le livre que tu m’avais prêté.', es:'Ayer encontré el libro que me habías prestado.'},
    {t:'p', es:'Primero te lo prestó (plus-que-parfait), después lo encontré (passé composé). El plus-que-parfait siempre marca lo que pasó ANTES.'},

    {t:'regle', es:'Uso obligatorio en la tercera estructura con SI.', fr:'Si j’avais su, je ne serais pas venu.'},
    {t:'ex', fr:'Si tu m’avais appelé, je serais venu.', es:'Si me hubieras llamado, habría venido.'},

    {t:'p', es:'Uso de arrepentimiento con "si seulement":'},
    {t:'ex', fr:'Si seulement j’avais su !', es:'¡Si hubiera sabido!'},
    {t:'piege', es:'Aquí el español usa el imperfecto de subjuntivo ("si hubiera sabido") y el francés usa el pluscuamperfecto de INDICATIVO ("si j’avais su"). No busques un subjuntivo francés: tras "si" nunca lo hay. Este es el mismo principio de las tres estructuras condicionales.'},

    {t:'p', es:'Diferencia sutil con el español: el francés usa el plus-que-parfait de forma más estricta. El español a veces se conforma con el pretérito ("cuando llegué ya se fue"), pero el francés casi siempre exige marcar la anterioridad.'}
  ],
  exercices:[
    {type:'trou', q:'Quand je suis arrivé, il ___ déjà ___ (partir).', r:['était','parti'], expl:'partir va con être, y concuerda.'},
    {type:'trou', q:'J’___ ___ (oublier) mon passeport.', r:['avais','oublié'], expl:'oublier va con avoir.'},
    {type:'trou', q:'Si j’___ ___ (savoir), je ne serais pas venu.', r:['avais','su'], expl:'Tercera estructura con si.'},
    {type:'qcm', q:'"Me dijo que había visto la película" es…', opts:['Il m’a dit qu’il avait vu le film','Il m’a dit qu’il a vu le film','Il m’a dit qu’il voyait le film'], r:0,
     expl:'La acción es anterior al "dijo": plus-que-parfait.'}
  ]
},

/* ------------------------------------------------------------------ 6 --- */
{
  id:'b1-06-discours-indirect', lvl:'B1', ordre:6, minutos:13,
  titre:'El discurso indirecto',
  resume:'Contar lo que alguien dijo. Los tiempos retroceden un escalón, igual que en español.',
  theorie:[
    {t:'p', es:'Pasar de "él dijo: voy a venir" a "él dijo que iba a venir". El francés hace lo mismo que el español: cuando el verbo introductor está en pasado, los tiempos retroceden.'},

    {t:'regle', es:'Si el verbo introductor está en PRESENTE, nada cambia.', fr:'Il dit : « Je viens. » → Il dit qu’il vient.'},
    {t:'regle', es:'Si está en PASADO, los tiempos retroceden un escalón.', fr:'Il a dit : « Je viens. » → Il a dit qu’il venait.'},
    {t:'table', head:['Estilo directo','Estilo indirecto (tras pasado)'], rows:[
      ['présent','imparfait'],
      ['passé composé','plus-que-parfait'],
      ['futur simple','conditionnel présent'],
      ['futur proche (vais faire)','allais faire'],
      ['imparfait','imparfait (no cambia)'],
      ['plus-que-parfait','plus-que-parfait (no cambia)'],
      ['conditionnel','conditionnel (no cambia)']
    ]},
    {t:'ex', fr:'Il a dit qu’il venait.', es:'Dijo que venía. — original: "je viens"'},
    {t:'ex', fr:'Elle a dit qu’elle avait fini.', es:'Dijo que había terminado. — original: "j’ai fini"'},
    {t:'ex', fr:'Il a dit qu’il viendrait.', es:'Dijo que vendría. — original: "je viendrai"'},

    {t:'p', es:'Cómo introducir cada tipo de frase:'},
    {t:'table', head:['Tipo original','Se introduce con','Ejemplo'], rows:[
      ['Afirmación','que','Il dit qu’il est fatigué.'],
      ['Pregunta sí/no','si','Il demande si tu viens.'],
      ['Pregunta con qu’est-ce que','ce que','Il demande ce que tu fais.'],
      ['Pregunta con qu’est-ce qui','ce qui','Il demande ce qui se passe.'],
      ['Pregunta con où/quand/comment','la misma palabra','Il demande où tu vas.'],
      ['Orden','de + infinitivo','Il m’a dit de partir.']
    ]},
    {t:'ex', fr:'Il demande si tu viens.', es:'Pregunta si vienes.'},
    {t:'ex', fr:'Il demande ce que tu fais.', es:'Pregunta qué haces.'},
    {t:'ex', fr:'Il m’a dit de partir.', es:'Me dijo que me fuera. — orden: de + infinitivo'},
    {t:'piege', es:'Ese último caso es importante: el español usa subjuntivo ("me dijo que me fuera"), el francés usa DE + INFINITIVO ("il m’a dit de partir"). Nunca "il m’a dit que je parte". Mismo patrón con demander de, conseiller de, proposer de.'},
    {t:'piege', es:'"Qu’est-ce que" se convierte en "ce que" en indirecto, y pierde la inversión. "Qu’est-ce que tu fais ?" → "Il demande ce que tu fais", no "ce que fais-tu".'},

    {t:'p', es:'También cambian los marcadores de tiempo:'},
    {t:'table', head:['Directo','Indirecto'], rows:[
      ['aujourd’hui','ce jour-là'],
      ['hier','la veille'],
      ['demain','le lendemain'],
      ['maintenant','à ce moment-là'],
      ['la semaine prochaine','la semaine suivante'],
      ['ici','là']
    ]},
    {t:'ex', fr:'Il a dit qu’il partirait le lendemain.', es:'Dijo que se iría al día siguiente. — original: "je partirai demain"'}
  ],
  exercices:[
    {type:'qcm', q:'« Je viens » → Il a dit…', opts:['qu’il venait','qu’il vient','qu’il viendra'], r:0,
     expl:'Presente → imperfecto tras verbo en pasado.'},
    {type:'qcm', q:'« Je viendrai » → Il a dit…', opts:['qu’il viendrait','qu’il viendra','qu’il venait'], r:0,
     expl:'Futuro → condicional.'},
    {type:'qcm', q:'"Me dijo que me fuera" es…', opts:['Il m’a dit de partir','Il m’a dit que je parte','Il m’a dit que je partais'], r:0,
     expl:'Las órdenes se pasan con de + infinitivo, no con subjuntivo.'},
    {type:'trou', q:'« Qu’est-ce que tu fais ? » → Il demande ___ tu fais.', r:['ce que','ce qu’'], expl:'Qu’est-ce que → ce que.'}
  ]
},

/* ------------------------------------------------------------------ 7 --- */
{
  id:'b1-07-passif', lvl:'B1', ordre:7, minutos:11,
  titre:'La voz pasiva y cómo evitarla',
  resume:'Se forma como en español, pero el francés la usa mucho menos. Aquí está lo que usan en su lugar.',
  theorie:[
    {t:'regle', es:'ÊTRE + participio pasado, que concuerda con el sujeto. El agente se introduce con PAR.', fr:'La lettre est écrite par Marie.'},
    {t:'table', head:['Activa','Pasiva'], rows:[
      ['Marie écrit la lettre.','La lettre est écrite par Marie.'],
      ['Le chef a signé le contrat.','Le contrat a été signé par le chef.'],
      ['On construira la maison.','La maison sera construite.']
    ]},
    {t:'ex', fr:'Ce livre a été écrit en 1950.', es:'Este libro fue escrito en 1950.'},
    {t:'ex', fr:'La maison sera vendue.', es:'La casa será vendida.'},
    {t:'piege', es:'Cuidado con la ambigüedad de être: "la porte est fermée" puede significar "la puerta es cerrada (ahora, por alguien)" o "la puerta está cerrada (estado)". El contexto decide. Si quieres marcar la acción, añade el agente o usa "se fait fermer".'},

    {t:'regle', es:'Con verbos de sentimiento, el agente va con DE, no con par.', fr:'Il est aimé de tous. · Elle est respectée de ses collègues.'},
    {t:'ex', fr:'Il est connu de tout le monde.', es:'Es conocido por todos.'},

    {t:'p', es:'LO IMPORTANTE: el francés evita la pasiva mucho más que el español y bastante más que el inglés. Suena pesada. Hay tres salidas mejores:'},
    {t:'table', head:['En vez de…','Di…','Español'], rows:[
      ['La maison a été vendue.','On a vendu la maison.','Vendieron la casa.'],
      ['Le français est parlé ici.','On parle français ici.','Aquí se habla francés.'],
      ['Ça n’est pas fait comme ça.','Ça ne se fait pas comme ça.','Eso no se hace así.']
    ]},
    {t:'regle', es:'Salida 1 — ON: el recurso más francés que existe. Sujeto indefinido, verbo activo.', fr:'On m’a volé mon portefeuille. = Me robaron la cartera.'},
    {t:'ex', fr:'On m’a dit que…', es:'Me dijeron que… / Se me dijo que…'},
    {t:'ex', fr:'On construit un nouveau pont.', es:'Están construyendo un puente nuevo.'},
    {t:'p', es:'Fíjate qué elegante: donde el español usa "me robaron" con sujeto vago, el francés usa "on". Es la traducción natural de nuestro "se" impersonal y de nuestra tercera persona del plural indefinida.'},

    {t:'regle', es:'Salida 2 — PRONOMINAL PASIVO: se + verbo, igual que el "se" español.', fr:'Ça se dit. · Ce vin se boit frais.'},
    {t:'ex', fr:'Ça ne se dit pas.', es:'Eso no se dice.'},
    {t:'ex', fr:'Le pain se vend à la boulangerie.', es:'El pan se vende en la panadería.'},
    {t:'ex', fr:'Comment ça s’écrit ?', es:'¿Cómo se escribe?'},

    {t:'regle', es:'Salida 3 — SE FAIRE + infinitivo: cuando el sujeto sufre la acción.', fr:'Il s’est fait voler son téléphone.'},
    {t:'ex', fr:'Je me suis fait couper les cheveux.', es:'Me corté el pelo (me lo cortaron).'},
    {t:'ex', fr:'Elle s’est fait renvoyer.', es:'La despidieron.'},
    {t:'p', es:'Esta estructura es utilísima y muy francesa. Marca que a alguien le pasó algo, generalmente malo, sin decir quién lo hizo.'},

    {t:'piege', es:'Regla práctica para escribir buen francés: si puedes decirlo con "on", dilo con "on". La pasiva déjala para textos formales, periodísticos o cuando el agente de verdad importa.'}
  ],
  exercices:[
    {type:'qcm', q:'"Me robaron la cartera" en francés natural es…', opts:['On m’a volé mon portefeuille','Mon portefeuille a été volé de moi','Je fus volé mon portefeuille'], r:0,
     expl:'"On" es la salida natural del francés para agentes indefinidos.'},
    {type:'trou', q:'Ça ne ___ dit pas.', r:['se'], expl:'Pronominal pasivo, igual que el "se" español.'},
    {type:'qcm', q:'"La despidieron" es…', opts:['Elle s’est fait renvoyer','Elle a été renvoyée d’elle','Elle se renvoya'], r:0,
     expl:'se faire + infinitivo: el sujeto sufre la acción.'},
    {type:'trou', q:'Ce livre ___ ___ (être, écrire) en 1950.', r:['a été','écrit'], expl:'Pasiva en passé composé: auxiliar avoir + été + participio.'}
  ]
},

/* ------------------------------------------------------------------ 8 --- */
{
  id:'b1-08-demonstratifs', lvl:'B1', ordre:8, minutos:10,
  titre:'Demostrativos y posesivos tónicos',
  resume:'Este, ese, aquel — y el mío, el tuyo. El francés simplifica en un lado y complica en otro.',
  theorie:[
    {t:'p', es:'Primero una buena noticia: el francés NO distingue tres distancias como el español (este/ese/aquel). Tiene una sola serie.'},
    {t:'table', head:['','Singular','Plural','Español'], rows:[
      ['masculino','ce','ces','este / ese / aquel'],
      ['masc. ante vocal','cet','ces','este / ese / aquel'],
      ['femenino','cette','ces','esta / esa / aquella']
    ]},
    {t:'ex', fr:'ce livre', es:'este libro / ese libro'},
    {t:'ex', fr:'cet homme', es:'este hombre — cet ante vocal, por eufonía'},
    {t:'ex', fr:'cette maison', es:'esta casa'},
    {t:'ex', fr:'ces enfants', es:'estos niños'},

    {t:'regle', es:'Si necesitas marcar la distancia, se añade -ci (cerca) o -là (lejos) al sustantivo.', fr:'ce livre-ci (este) · ce livre-là (ese / aquel)'},
    {t:'ex', fr:'Je préfère ce livre-ci.', es:'Prefiero este libro.'},
    {t:'ex', fr:'Ce jour-là, tout a changé.', es:'Ese día todo cambió.'},
    {t:'piege', es:'En el habla real, los franceses casi siempre usan -là para todo, incluso para lo cercano. "Ce truc-là" puede ser algo que tienes en la mano. No te obsesiones con la distinción ci/là: escucha y verás que -là domina.'},

    {t:'p', es:'PRONOMBRES DEMOSTRATIVOS — cuando sustituyen al sustantivo:'},
    {t:'table', head:['','Singular','Plural'], rows:[
      ['masculino','celui','ceux'],
      ['femenino','celle','celles']
    ]},
    {t:'p', es:'Nunca van solos. Siempre llevan detrás -ci / -là, o "de", o un relativo:'},
    {t:'ex', fr:'Quel livre ? Celui-ci.', es:'¿Qué libro? Este.'},
    {t:'ex', fr:'C’est celui de Pierre.', es:'Es el de Pierre.'},
    {t:'ex', fr:'Celui qui parle est mon frère.', es:'El que habla es mi hermano.'},
    {t:'ex', fr:'Ceux que j’ai vus étaient bons.', es:'Los que vi eran buenos.'},

    {t:'p', es:'CE / CELA / ÇA — los neutros:'},
    {t:'table', head:['Forma','Registro','Ejemplo'], rows:[
      ['ce','con être','C’est vrai. / Ce sont mes amis.'],
      ['cela','formal, escrito','Cela m’intéresse.'],
      ['ça','oral, cotidiano','Ça m’intéresse. / Ça va ?']
    ]},
    {t:'piege', es:'"ça" es la contracción oral de "cela" y es LA palabra más usada del francés hablado: ça va, ça marche, ça y est, ça suffit, comme ci comme ça. En un escrito formal se prefiere "cela", pero hablando nadie dice cela.'},
    {t:'p', es:'Diferencia clave entre C’EST e IL EST, que confunde a todo el mundo:'},
    {t:'table', head:['C’est + …','Il/Elle est + …'], rows:[
      ['sustantivo con artículo: C’est un médecin.','profesión sin artículo: Il est médecin.'],
      ['nombre propio: C’est Pierre.','adjetivo referido a persona conocida: Il est grand.'],
      ['pronombre: C’est moi.','—'],
      ['adjetivo general: C’est difficile.','—']
    ]},
    {t:'ex', fr:'Il est médecin.', es:'Es médico — profesión, sin artículo'},
    {t:'ex', fr:'C’est un bon médecin.', es:'Es un buen médico — con artículo y adjetivo'},

    {t:'p', es:'POSESIVOS TÓNICOS — el mío, el tuyo:'},
    {t:'table', head:['Poseedor','Masc.','Fem.','Plural masc.','Plural fem.'], rows:[
      ['je','le mien','la mienne','les miens','les miennes'],
      ['tu','le tien','la tienne','les tiens','les tiennes'],
      ['il/elle','le sien','la sienne','les siens','les siennes'],
      ['nous','le nôtre','la nôtre','les nôtres','les nôtres'],
      ['vous','le vôtre','la vôtre','les vôtres','les vôtres'],
      ['ils/elles','le leur','la leur','les leurs','les leurs']
    ]},
    {t:'ex', fr:'C’est ma voiture, pas la tienne.', es:'Es mi coche, no el tuyo.'},
    {t:'ex', fr:'Nos idées et les leurs.', es:'Nuestras ideas y las suyas.'},
    {t:'piege', es:'Fíjate en el acento: "notre voiture" (adjetivo, sin acento) pero "la nôtre" (pronombre, con acento circunflejo). Y cambia la pronunciación: notre = "notr", nôtre = "notr" con o cerrada y larga.'}
  ],
  exercices:[
    {type:'trou', q:'___ homme est mon voisin.', r:['Cet','cet'], expl:'homme empieza con vocal: cet.'},
    {type:'trou', q:'___ maison est belle.', r:['Cette','cette'], expl:'maison es femenino.'},
    {type:'qcm', q:'"Es médico" es…', opts:['Il est médecin','C’est médecin','Il est un médecin'], r:0,
     expl:'Con profesión sin artículo se usa il est.'},
    {type:'qcm', q:'"Es un buen médico" es…', opts:['C’est un bon médecin','Il est un bon médecin','Il est bon médecin'], r:0,
     expl:'Con artículo + adjetivo se usa c’est.'},
    {type:'trou', q:'C’est ma voiture, pas ___ ___. (la tuya)', r:['la','tienne'], expl:'Posesivo tónico femenino singular.'}
  ]
}

];
