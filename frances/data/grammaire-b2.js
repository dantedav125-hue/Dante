/* ==========================================================================
   GRAMMAIRE B2 — leer literatura, escribir bien, sonar culto
   ========================================================================== */

window.GRAMMAIRE_B2 = [

/* ------------------------------------------------------------------ 1 --- */
{
  id:'b2-01-passe-simple', lvl:'B2', ordre:1, minutos:13,
  titre:'El passé simple: el tiempo de los libros',
  resume:'No lo vas a hablar nunca. Pero sin él no puedes leer una novela francesa, y tú quieres leer.',
  theorie:[
    {t:'p', es:'El passé simple es un tiempo muerto en la lengua hablada. Ningún francés lo usa conversando. Pero toda la literatura, la historia y buena parte del periodismo culto está escrita en él. Si quieres leer a Camus, a Flaubert o a Dumas, lo necesitas — para RECONOCERLO, no para producirlo.'},
    {t:'regle', es:'Estrategia realista: aprende a reconocerlo pasivamente. No pierdas tiempo memorizando la conjugación completa para escribirla.', fr:'il fut = il a été · il eut = il a eu · il alla = il est allé'},

    {t:'p', es:'Tres familias de terminaciones. Casi todo cae en una de ellas:'},
    {t:'table', head:['Familia','Verbos','Terminaciones'], rows:[
      ['en -a','todos los -er','-ai, -as, -a, -âmes, -âtes, -èrent'],
      ['en -i','-ir, -re y muchos irregulares','-is, -is, -it, -îmes, -îtes, -irent'],
      ['en -u','avoir, être-like, vouloir, savoir…','-us, -us, -ut, -ûmes, -ûtes, -urent']
    ]},
    {t:'table', head:['','parler','finir','vouloir'], rows:[
      ['je','parlai','finis','voulus'],
      ['tu','parlas','finis','voulus'],
      ['il','parla','finit','voulut'],
      ['nous','parlâmes','finîmes','voulûmes'],
      ['vous','parlâtes','finîtes','voulûtes'],
      ['ils','parlèrent','finirent','voulurent']
    ]},

    {t:'regle', es:'En la práctica solo necesitas la TERCERA PERSONA, singular y plural. La narración va casi toda en él/ellos.', fr:'il parla · ils parlèrent · il fit · ils firent'},
    {t:'p', es:'Las formas de tercera persona que hay que reconocer sí o sí:'},
    {t:'table', head:['Infinitivo','il','ils','','Infinitivo','il','ils'], rows:[
      ['être','fut','furent','','faire','fit','firent'],
      ['avoir','eut','eurent','','dire','dit','dirent'],
      ['aller','alla','allèrent','','venir','vint','vinrent'],
      ['voir','vit','virent','','prendre','prit','prirent'],
      ['pouvoir','put','purent','','mettre','mit','mirent'],
      ['vouloir','voulut','voulurent','','écrire','écrivit','écrivirent'],
      ['savoir','sut','surent','','naître','naquit','naquirent'],
      ['devoir','dut','durent','','mourir','mourut','moururent'],
      ['tenir','tint','tinrent','','vivre','vécut','vécurent'],
      ['croire','crut','crurent','','connaître','connut','connurent']
    ]},
    {t:'ex', fr:'Il ouvrit la porte et sortit.', es:'Abrió la puerta y salió.'},
    {t:'ex', fr:'Elle le regarda longtemps, puis elle partit.', es:'Lo miró largamente, luego se fue.'},
    {t:'ex', fr:'Ils arrivèrent au village à la tombée de la nuit.', es:'Llegaron al pueblo al caer la noche.'},

    {t:'piege', es:'Trampa de lectura: "il fit" (hizo) se parece a "il fut" (fue). Una sola vocal los separa. Y "il vint" (vino) frente a "il vit" (vio o vive). En la lectura hay que fijarse.'},
    {t:'piege', es:'Otra trampa: en los verbos -ir del grupo 2, la primera y segunda persona del passé simple son IDÉNTICAS al presente. "je finis" puede ser "termino" o "terminé". Solo el contexto lo dice. Por suerte, en narración literaria casi siempre es pasado.'},

    {t:'p', es:'En la narración literaria, el passé simple se combina con el imperfecto exactamente igual que el passé composé lo hace al hablar:'},
    {t:'ex', fr:'Il faisait nuit. La rue était déserte. Soudain, une porte s’ouvrit.', es:'Era de noche. La calle estaba desierta. De pronto, una puerta se abrió.'},
    {t:'p', es:'Decorado en imperfecto, acción en passé simple. Es la misma lógica que ya conoces, solo cambia el tiempo del segundo elemento.'},

    {t:'p', es:'Bonus: el PASSÉ ANTÉRIEUR (auxiliar en passé simple + participio) aparece tras "quand", "dès que", "après que" en textos literarios:'},
    {t:'ex', fr:'Quand il eut fini, il se leva.', es:'Cuando hubo terminado, se levantó.'},
    {t:'p', es:'Es raro incluso en literatura. Basta con reconocerlo.'}
  ],
  exercices:[
    {type:'qcm', q:'"Il fut" corresponde en francés hablado a…', opts:['il a été','il a fait','il était'], r:0,
     expl:'fut es el passé simple de être.'},
    {type:'qcm', q:'"Ils vinrent" significa…', opts:['vinieron','vieron','vivieron'], r:0,
     expl:'venir → vinrent. Ver sería "virent", vivir "vécurent".'},
    {type:'qcm', q:'¿Dónde encontrarás el passé simple?', opts:['En novelas y textos históricos','En conversación diaria','En mensajes de texto'], r:0,
     expl:'Es exclusivamente escrito y literario.'},
    {type:'qcm', q:'"Il ouvrit la porte" en francés hablado sería…', opts:['Il a ouvert la porte','Il ouvrait la porte','Il ouvre la porte'], r:0,
     expl:'Acción puntual terminada: passé composé al hablar.'}
  ]
},

/* ------------------------------------------------------------------ 2 --- */
{
  id:'b2-02-gerondif', lvl:'B2', ordre:2, minutos:12,
  titre:'Participio presente y gérondif',
  resume:'La forma en -ant. Tres usos distintos que se escriben igual y significan cosas diferentes.',
  theorie:[
    {t:'regle', es:'FORMACIÓN: toma el "nous" del presente, quita -ons, añade -ant.', fr:'nous parlons → parlant · nous finissons → finissant'},
    {t:'p', es:'Solo tres irregulares en todo el idioma: être → étant, avoir → ayant, savoir → sachant.'},

    {t:'p', es:'La misma forma en -ant tiene tres funciones. Distinguirlas es lo que importa:'},

    {t:'regle', es:'1. GÉRONDIF (en + -ant): dos acciones simultáneas del MISMO sujeto. Equivale al gerundio español.', fr:'Il travaille en écoutant de la musique.'},
    {t:'ex', fr:'Il mange en regardant la télé.', es:'Come viendo la tele.'},
    {t:'ex', fr:'J’ai appris le français en écoutant des podcasts.', es:'Aprendí francés escuchando podcasts. — medio'},
    {t:'ex', fr:'En arrivant, j’ai vu la lumière.', es:'Al llegar, vi la luz. — momento'},
    {t:'ex', fr:'En travaillant plus, tu réussiras.', es:'Trabajando más, lo lograrás. — condición'},
    {t:'regle', es:'REGLA ABSOLUTA del gérondif: el sujeto tiene que ser el mismo para las dos acciones.', fr:'Il chante en cuisinant. (él canta, él cocina) ✓'},
    {t:'piege', es:'Error frecuente por calco del español: "vi a Pierre saliendo del cine" — si el que sale es Pierre, NO puedes usar el gérondif. "J’ai vu Pierre en sortant du cinéma" significa que TÚ salías. Para decir que él salía: "J’ai vu Pierre qui sortait du cinéma".'},

    {t:'regle', es:'2. PARTICIPE PRÉSENT (sin en): equivale a una relativa con "qui". Es escrito y formal.', fr:'Les personnes parlant français = les personnes qui parlent français'},
    {t:'ex', fr:'Un homme portant un chapeau noir.', es:'Un hombre que lleva un sombrero negro.'},
    {t:'ex', fr:'Ne connaissant pas la ville, je me suis perdu.', es:'Como no conocía la ciudad, me perdí. — causa'},
    {t:'p', es:'Este uso es propio del francés escrito, administrativo y periodístico. Al hablar se prefiere la relativa con qui.'},

    {t:'regle', es:'3. ADJECTIF VERBAL: es un adjetivo de verdad y CONCUERDA en género y número.', fr:'une histoire intéressante · des films amusants'},
    {t:'table', head:['Participio presente (invariable)','Adjetivo verbal (concuerda)'], rows:[
      ['une femme charmant ses invités','une femme charmante'],
      ['des enfants obéissant à leurs parents','des enfants obéissants'],
      ['une équipe gagnant le match','une équipe gagnante']
    ]},
    {t:'piege', es:'Cómo distinguirlos: si lleva complemento u objeto detrás, es participio presente e invariable. Si funciona como puro adjetivo, concuerda. Y ojo, algunos cambian de ortografía al volverse adjetivo: fatiguant → fatigant, provoquant → provocant, différant → différent, précédant → précédent.'},

    {t:'regle', es:'DIFERENCIA GRANDE CON EL ESPAÑOL: el francés NO usa la forma en -ant para el presente continuo.', fr:'"Estoy comiendo" = Je mange. NUNCA "je suis mangeant".'},
    {t:'p', es:'Si de verdad quieres marcar que la acción está en curso, existe una estructura:'},
    {t:'ex', fr:'Je suis en train de manger.', es:'Estoy comiendo (justo ahora).'},
    {t:'ex', fr:'Il était en train de dormir quand je suis arrivé.', es:'Estaba durmiendo cuando llegué.'},
    {t:'p', es:'Pero se usa mucho menos que el gerundio español. Lo normal es el presente simple. "Être en train de" se reserva para cuando de verdad quieres subrayar la simultaneidad.'},
    {t:'piege', es:'Y jamás uses -ant después de una preposición que no sea "en". El español dice "antes de salir", "después de comer" — el francés usa INFINITIVO: "avant de sortir", "après avoir mangé". Nunca "avant sortant".'}
  ],
  exercices:[
    {type:'trou', q:'Il travaille en ___ (écouter) de la musique.', r:['écoutant'], expl:'nous écoutons → écoutant.'},
    {type:'qcm', q:'"Estoy comiendo" es…', opts:['Je mange','Je suis mangeant','Je suis en mangeant'], r:0,
     expl:'El presente simple cubre el continuo. "en train de manger" si quieres subrayarlo.'},
    {type:'qcm', q:'"Antes de salir" es…', opts:['Avant de sortir','Avant sortant','Avant en sortant'], r:0,
     expl:'Tras preposición va infinitivo, no -ant. Solo "en" admite -ant.'},
    {type:'qcm', q:'"une histoire ___" (interesante)', opts:['intéressante','intéressant','intéressants'], r:0,
     expl:'Aquí funciona como adjetivo puro: concuerda.'},
    {type:'qcm', q:'"J’ai vu Pierre en sortant du cinéma" significa que salía…', opts:['yo','Pierre','los dos'], r:0,
     expl:'El gérondif siempre se refiere al sujeto de la frase, que es "je".'}
  ]
},

/* ------------------------------------------------------------------ 3 --- */
{
  id:'b2-03-accord-participe', lvl:'B2', ordre:3, minutos:14,
  titre:'La concordancia del participio: todas las reglas',
  resume:'El tema que los propios franceses fallan. Aquí completo, con el árbol de decisión.',
  theorie:[
    {t:'p', es:'La concordancia del participio pasado es el examen de ortografía francesa por excelencia. Los franceses la fallan constantemente porque casi nunca se oye. Aprenderla bien es una señal clara de dominio.'},

    {t:'regle', es:'CASO 1 — con ÊTRE: el participio concuerda SIEMPRE con el sujeto.', fr:'Elle est partie. · Ils sont arrivés. · Elles sont venues.'},
    {t:'ex', fr:'Elles sont arrivées hier.', es:'Llegaron ayer. — femenino plural: +es'},

    {t:'regle', es:'CASO 2 — con AVOIR: el participio NO concuerda… salvo si el complemento DIRECTO va DELANTE del verbo.', fr:'J’ai écrit les lettres. (no concuerda) · Les lettres que j’ai écrites. (concuerda)'},
    {t:'p', es:'Las tres situaciones en que el COD queda delante:'},
    {t:'table', head:['Situación','Ejemplo','Concordancia'], rows:[
      ['Pronombre COD','Je les ai vues.','con "les" (femenino plural)'],
      ['Relativo QUE','La lettre que j’ai écrite.','con "lettre"'],
      ['Pregunta con quel','Quelles photos as-tu prises ?','con "photos"']
    ]},
    {t:'ex', fr:'Les fleurs ? Je les ai achetées ce matin.', es:'¿Las flores? Las compré esta mañana.'},
    {t:'ex', fr:'Voici la maison que nous avons vendue.', es:'Esta es la casa que vendimos.'},
    {t:'piege', es:'Con COI NUNCA hay concordancia. "Je leur ai parlé", no "parlés". "Les amis à qui j’ai écrit", no "écrits". Solo el complemento DIRECTO manda.'},

    {t:'regle', es:'CASO 3 — PRONOMINALES: concuerda solo si el pronombre reflexivo es el complemento DIRECTO.', fr:'Elle s’est lavée. (sí) · Elle s’est lavé les mains. (no)'},
    {t:'table', head:['Frase','Concuerda','Por qué'], rows:[
      ['Elle s’est lavée.','sí','"se" es el directo'],
      ['Elle s’est lavé les mains.','no','el directo es "les mains", va después'],
      ['Ils se sont parlé.','no','"parler à" es indirecto'],
      ['Ils se sont vus.','sí','"voir" es directo'],
      ['Elle s’est souvenue.','sí','verbo esencialmente pronominal'],
      ['Elles se sont téléphoné.','no','"téléphoner à" es indirecto']
    ]},
    {t:'p', es:'Truco práctico: pregúntate si el verbo lleva "à" delante de la persona. Parler à, téléphoner à, écrire à, dire à, demander à, répondre à → NUNCA concuerdan.'},

    {t:'p', es:'CASOS ESPECIALES que aparecen en exámenes y textos cuidados:'},
    {t:'table', head:['Caso','Regla','Ejemplo'], rows:[
      ['Participio + infinitivo','concuerda si el COD hace la acción','Je les ai vus partir. (ellos parten)'],
      ['','no concuerda si la sufre','Les chansons que j’ai entendu chanter.'],
      ['fait + infinitivo','FAIT es siempre invariable','Je les ai fait venir.'],
      ['laissé + infinitivo','invariable desde la reforma de 1990','Je les ai laissé partir.'],
      ['verbos impersonales','invariable','Les efforts qu’il a fallu.'],
      ['con "en"','invariable','Des livres ? J’en ai lu trois.'],
      ['coûté, valu, pesé (sentido propio)','invariable','Les mille euros que ça a coûté.'],
      ['couru, vécu (sentido figurado)','concuerda','Les dangers qu’il a courus.']
    ]},
    {t:'ex', fr:'Je les ai vus partir.', es:'Los vi irse — ellos son los que se van: concuerda'},
    {t:'ex', fr:'Je les ai fait venir.', es:'Los hice venir — "fait" nunca concuerda'},

    {t:'p', es:'EL ÁRBOL DE DECISIÓN, para usar mientras escribes:'},
    {t:'table', head:['Pregunta','Si sí','Si no'], rows:[
      ['¿El auxiliar es être (no pronominal)?','concuerda con el sujeto','sigue'],
      ['¿Es pronominal?','ve a la regla del reflexivo directo','sigue'],
      ['¿Hay un COD antes del verbo?','concuerda con ese COD','no concuerda'],
      ['¿Ese COD es en realidad COI o "en"?','no concuerda','concuerda']
    ]},
    {t:'piege', es:'Consuelo: en el francés hablado esto es casi todo inaudible. "vu" y "vues" suenan igual. Solo se oye en participios que terminan en consonante: "mis/mise", "fait/faite", "écrit/écrite", "ouvert/ouverte". Para hablar, relájate. Para escribir, aplica el árbol.'}
  ],
  exercices:[
    {type:'trou', q:'Les lettres que j’ai ___ (écrire).', r:['écrites'], expl:'COD "que" (= lettres) va delante: concuerda en femenino plural.'},
    {type:'trou', q:'J’ai ___ (écrire) les lettres.', r:['écrit'], expl:'El COD va después: no concuerda.'},
    {type:'trou', q:'Elle s’est ___ (laver) les mains.', r:['lavé'], expl:'El directo es "les mains", que va después.'},
    {type:'trou', q:'Ils se sont ___ (parler).', r:['parlé'], expl:'"parler à" es indirecto: nunca concuerda.'},
    {type:'qcm', q:'"Je les ai ___ venir" (hacer)', opts:['fait','faits','faites'], r:0,
     expl:'"fait" seguido de infinitivo es siempre invariable.'},
    {type:'qcm', q:'"Des livres ? J’en ai ___ trois" (leer)', opts:['lu','lus','lues'], r:0,
     expl:'Con el pronombre "en" no hay concordancia.'}
  ]
},

/* ------------------------------------------------------------------ 4 --- */
{
  id:'b2-04-connecteurs', lvl:'B2', ordre:4, minutos:13,
  titre:'Los conectores del discurso',
  resume:'Lo que separa a alguien que habla francés de alguien que ARGUMENTA en francés.',
  theorie:[
    {t:'p', es:'A partir de B2, lo que se evalúa no es si conjugas bien: es si puedes construir un argumento. Y eso se hace con conectores. Un texto sin ellos suena a lista de frases sueltas; con ellos suena a alguien que piensa.'},

    {t:'p', es:'CAUSA — por qué:'},
    {t:'table', head:['Conector','Registro','Ejemplo'], rows:[
      ['parce que','neutro','Je pars parce qu’il est tard.'],
      ['car','escrito','Il n’est pas venu, car il était malade.'],
      ['puisque','causa ya conocida','Puisque tu le sais, agis.'],
      ['comme','al principio de frase','Comme il pleuvait, je suis resté.'],
      ['étant donné que','formal','Étant donné que les délais sont courts…'],
      ['grâce à','causa positiva','Grâce à toi, j’ai réussi.'],
      ['à cause de','causa negativa','À cause de la pluie, on a annulé.'],
      ['en raison de','formal, neutro','En raison des travaux, la rue est fermée.']
    ]},
    {t:'piege', es:'GRÂCE À vs À CAUSE DE: la diferencia es de valoración, no de gramática. "grâce à" para lo bueno, "à cause de" para lo malo. Decir "grâce à la pluie, on a annulé" suena sarcástico. Y ojo: "à cause de" + sustantivo, "parce que" + frase completa.'},

    {t:'p', es:'CONSECUENCIA — por lo tanto:'},
    {t:'table', head:['Conector','Registro','Ejemplo'], rows:[
      ['donc','neutro, el más usado','Il pleut, donc je reste.'],
      ['alors','oral','Il était tard, alors je suis parti.'],
      ['par conséquent','formal','Par conséquent, nous annulons.'],
      ['c’est pourquoi','escrito','C’est pourquoi j’ai refusé.'],
      ['du coup','muy oral, moderno','Du coup, on fait quoi ?'],
      ['ainsi','formal, elegante','Ainsi s’explique son absence.']
    ]},
    {t:'p', es:'"Du coup" es de lo más frecuente entre franceses jóvenes hoy. Lo oirás cada tres frases. En un examen escrito, no lo uses.'},

    {t:'p', es:'OPOSICIÓN — pero, sin embargo:'},
    {t:'table', head:['Conector','Matiz','Ejemplo'], rows:[
      ['mais','oposición simple','C’est cher, mais c’est bon.'],
      ['pourtant','contradicción sorprendente','Il a étudié, pourtant il a échoué.'],
      ['cependant / toutefois','formal','Cependant, il faut nuancer.'],
      ['néanmoins','muy formal','Néanmoins, le résultat est positif.'],
      ['en revanche','contraste equilibrado','C’est cher ; en revanche, c’est durable.'],
      ['par contre','oral, mismo sentido','C’est cher, par contre c’est durable.'],
      ['malgré','+ sustantivo','Malgré la pluie, on est sortis.'],
      ['bien que','+ subjuntivo','Bien qu’il pleuve, on sort.'],
      ['quand même','oral, "aun así"','Il pleut, on y va quand même.']
    ]},
    {t:'piege', es:'"POURTANT" no significa "por lo tanto" aunque se le parezca — significa "sin embargo". El falso amigo cuesta caro: "pour tant" no existe. Para "por lo tanto" usa "donc" o "par conséquent".'},

    {t:'p', es:'ORGANIZAR UN ARGUMENTO — la estructura que esperan en un examen DELF/DALF:'},
    {t:'table', head:['Función','Expresiones'], rows:[
      ['Empezar','Tout d’abord, · En premier lieu, · Pour commencer,'],
      ['Añadir','De plus, · En outre, · Par ailleurs, · Qui plus est,'],
      ['Ejemplificar','Par exemple, · Ainsi, · Notamment, · C’est le cas de'],
      ['Matizar','Certes… mais · Il est vrai que… cependant'],
      ['Contrastar','D’une part… d’autre part · D’un côté… de l’autre'],
      ['Insistir','En effet, · D’ailleurs, · Surtout,'],
      ['Concluir','En conclusion, · Pour conclure, · En somme, · Finalement,']
    ]},
    {t:'ex', fr:'Tout d’abord, le coût est élevé. De plus, les délais sont longs. Cependant, la qualité est excellente. En conclusion, cela vaut la peine.', es:'Primero, el costo es alto. Además, los plazos son largos. Sin embargo, la calidad es excelente. En conclusión, vale la pena.'},

    {t:'piege', es:'Dos falsos amigos que arruinan textos: "EN EFFET" NO es "en efecto/efectivamente" en el sentido español de confirmar algo dicho — sirve para introducir una EXPLICACIÓN de lo anterior. Y "ACTUELLEMENT" significa "actualmente", no "en realidad" (eso es "en réalité" o "en fait").'},
    {t:'table', head:['Francés','NO significa','Sí significa'], rows:[
      ['en effet','en efecto (confirmación)','porque, en concreto'],
      ['actuellement','en realidad','actualmente'],
      ['éventuellement','eventualmente','posiblemente, si acaso'],
      ['finalement','finalmente (al final de una lista)','al final resulta que'],
      ['assister à','asistir (ayudar)','presenciar'],
      ['rester','restar','quedarse']
    ]}
  ],
  exercices:[
    {type:'qcm', q:'"Pourtant" significa…', opts:['sin embargo','por lo tanto','porque'], r:0,
     expl:'Falso amigo peligroso. "Por lo tanto" es "donc".'},
    {type:'qcm', q:'"___ toi, j’ai réussi" (gracias a)', opts:['Grâce à','À cause de','En raison de'], r:0,
     expl:'grâce à para causas positivas.'},
    {type:'qcm', q:'¿Cuál NO usarías en un examen escrito formal?', opts:['Du coup','Par conséquent','C’est pourquoi'], r:0,
     expl:'"Du coup" es muy oral, aunque frecuentísimo al hablar.'},
    {type:'qcm', q:'"Actuellement" significa…', opts:['actualmente','en realidad','eventualmente'], r:0,
     expl:'Falso amigo. "En realidad" es "en fait" o "en réalité".'}
  ]
},

/* ------------------------------------------------------------------ 5 --- */
{
  id:'b2-05-registres', lvl:'B2', ordre:5, minutos:12,
  titre:'Los registros: formal, corriente y familiar',
  resume:'La misma idea se dice de tres formas. Elegir mal es el error social más caro del francés.',
  theorie:[
    {t:'p', es:'El francés estratifica el registro más que el español. Un mexicano puede hablar bastante igual con su jefe y con su amigo. Un francés no. Usar el registro equivocado no es un error gramatical: es un error social, y se nota más.'},

    {t:'table', head:['Familiar','Corriente','Soutenu (formal)','Español'], rows:[
      ['bagnole','voiture','automobile','coche'],
      ['bouffer','manger','se restaurer','comer'],
      ['flic','policier','agent de police','policía'],
      ['boulot','travail','emploi','trabajo'],
      ['fric / thune','argent','fonds','dinero'],
      ['mec','homme / type','individu','tipo'],
      ['nana / meuf','femme','dame','mujer'],
      ['bouquin','livre','ouvrage','libro'],
      ['balancer','jeter','se débarrasser de','tirar'],
      ['piger','comprendre','saisir','entender'],
      ['crever','mourir','décéder','morir'],
      ['bosser','travailler','exercer','currar']
    ]},

    {t:'p', es:'Las marcas gramaticales de cada registro. Esto es más importante que el vocabulario:'},
    {t:'table', head:['Rasgo','Familiar','Corriente','Formal'], rows:[
      ['ne de negación','se cae: "j’sais pas"','se dice','obligatorio'],
      ['pregunta','entonación: "tu viens ?"','est-ce que','inversión: "viens-tu ?"'],
      ['nous','se usa "on"','on / nous','nous'],
      ['tu / vous','tu','depende','vous'],
      ['pasado','passé composé','passé composé','passé simple (escrito)'],
      ['sílabas','se comen: "chuis"','completas','completas y articuladas']
    ]},
    {t:'p', es:'Las contracciones del habla real. Sin conocerlas no entiendes una película:'},
    {t:'table', head:['Se escribe','Se oye','Español'], rows:[
      ['je suis','chuis / j’suis','soy/estoy'],
      ['je ne sais pas','chais pas','no sé'],
      ['il y a','y a','hay'],
      ['tu as','t’as','tienes'],
      ['tu es','t’es','eres/estás'],
      ['qu’est-ce que','kesk','qué'],
      ['il n’y a pas','y a pas','no hay'],
      ['celui-là','çui-là','ese'],
      ['peut-être','p’t-être','quizá'],
      ['s’il te plaît','s’te plaît','por favor']
    ]},
    {t:'piege', es:'No intentes IMITAR el registro familiar demasiado pronto. Un extranjero diciendo "bouffer" y "meuf" con acento suena mal, como un extranjero diciendo "no manches wey" en México sin entender el contexto. Primero domina el corriente, que sirve siempre; entiende el familiar pasivamente; y usa el formal cuando toca.'},

    {t:'p', es:'Cuándo usar cuál, en concreto:'},
    {t:'table', head:['Situación','Registro','Tratamiento'], rows:[
      ['Correo de trabajo','formal','vous'],
      ['Entrevista','formal / corriente','vous'],
      ['Comercio, restaurante','corriente','vous'],
      ['Compañeros de trabajo','corriente','depende de la empresa'],
      ['Amigos','familiar','tu'],
      ['Redes sociales','familiar','tu'],
      ['Gente mayor desconocida','formal','vous, siempre']
    ]},
    {t:'regle', es:'Regla de oro del tuteo: NUNCA tutees primero. Espera a que te lo propongan ("on peut se tutoyer ?"). En caso de duda, vous.', fr:'On se tutoie ? — Avec plaisir !'},

    {t:'p', es:'Fórmulas de correo, que son casi un ritual en Francia:'},
    {t:'table', head:['Momento','Formal','Corriente'], rows:[
      ['Abrir','Madame, Monsieur,','Bonjour,'],
      ['Abrir (conocido)','Cher Monsieur Dupont,','Bonjour Pierre,'],
      ['Cerrar','Je vous prie d’agréer, Madame, Monsieur, mes salutations distinguées.','Cordialement,'],
      ['Cerrar (menos)','Bien cordialement,','Bien à vous,'],
      ['Cerrar (amigo)','—','À bientôt / Bises']
    ]},
    {t:'piege', es:'Esa fórmula larga de cierre formal parece absurda pero es obligatoria en cartas oficiales francesas. Se escribe entera, tal cual. En correo de trabajo normal, "Cordialement" basta y es lo que usa todo el mundo.'}
  ],
  exercices:[
    {type:'qcm', q:'"Bagnole" pertenece al registro…', opts:['familiar','corriente','formal'], r:0,
     expl:'La palabra neutra es "voiture".'},
    {type:'qcm', q:'En un correo de trabajo normal se cierra con…', opts:['Cordialement','Bises','Je vous prie d’agréer mes salutations distinguées'], r:0,
     expl:'Cordialement es el estándar profesional. La tercera es para cartas oficiales.'},
    {type:'qcm', q:'"Chais pas" es…', opts:['je ne sais pas','je sais','c’est pas'], r:0,
     expl:'Contracción oral extrema, sin ne y con je+sais fundidos.'},
    {type:'qcm', q:'Con una persona mayor que no conoces, usas…', opts:['vous siempre','tu si es simpática','depende del país'], r:0,
     expl:'Nunca tutees primero. Espera a que te lo propongan.'}
  ]
}

];
