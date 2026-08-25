/* ==========================================================================
   GRAMMAIRE A2 — donde el francés empieza a separarse del español
   ========================================================================== */

window.GRAMMAIRE_A2 = [

/* ------------------------------------------------------------------ 1 --- */
{
  id:'a2-01-partitifs', lvl:'A2', ordre:1, minutos:14,
  titre:'Los artículos partitivos: du, de la, des',
  resume:'El concepto que no existe en español y que delata a todo hispanohablante. Aprendido esto, subes un nivel entero.',
  theorie:[
    {t:'p', es:'Aquí está la diferencia más grande entre el francés y el español, y la que más errores produce. En español decimos "quiero pan" sin ningún artículo. En francés eso es agramatical. Hay que decir "je veux DU pain".'},
    {t:'regle', es:'Cuando hablas de una cantidad indeterminada de algo que no se cuenta (pan, agua, dinero, tiempo, paciencia), el francés OBLIGA a poner un artículo partitivo.', fr:'du pain · de la viande · de l’eau · des épinards'},
    {t:'table', head:['','Partitivo','Ejemplo','Español'], rows:[
      ['masculino','du','du pain','pan'],
      ['femenino','de la','de la viande','carne'],
      ['ante vocal','de l’','de l’eau','agua'],
      ['plural','des','des légumes','verduras']
    ]},
    {t:'ex', fr:'Je mange du pain.', es:'Como pan.'},
    {t:'ex', fr:'Elle boit de l’eau.', es:'Ella bebe agua.'},
    {t:'ex', fr:'Nous achetons de la viande.', es:'Compramos carne.'},
    {t:'ex', fr:'Il faut du courage.', es:'Hace falta valor.'},
    {t:'ex', fr:'J’ai de la chance.', es:'Tengo suerte.'},

    {t:'p', es:'Compara los tres artículos con el mismo sustantivo. Cada uno dice algo distinto:'},
    {t:'table', head:['Francés','Español','Qué significa'], rows:[
      ['Je mange le pain.','Como el pan.','ese pan concreto, todo'],
      ['Je mange un pain.','Como un pan.','una pieza entera'],
      ['Je mange du pain.','Como pan.','una cantidad indeterminada']
    ]},
    {t:'piege', es:'El error clásico del hispanohablante es decir "je mange pain" o "j’aime le café" cuando quiere decir "tomo café". Piensa así: si en español podrías meter "algo de" delante, en francés va partitivo. "Como (algo de) pan" → du pain.'},

    {t:'regle', es:'REGLA DE ORO: tras una negación, TODOS los partitivos e indefinidos se convierten en DE.', fr:'Je mange du pain → Je ne mange pas de pain.'},
    {t:'table', head:['Afirmativo','Negativo'], rows:[
      ['J’ai du travail.','Je n’ai pas de travail.'],
      ['Elle boit de l’eau.','Elle ne boit pas d’eau.'],
      ['Il y a des places.','Il n’y a pas de places.'],
      ['J’ai un chien.','Je n’ai pas de chien.']
    ]},
    {t:'piege', es:'Excepción: con el verbo ÊTRE el artículo NO se reduce. "Ce n’est pas un problème" (no "pas de problème" en esa estructura). Con être el artículo aguanta.'},

    {t:'regle', es:'SEGUNDA REGLA: tras una expresión de cantidad, también se usa solo DE.', fr:'beaucoup de · un peu de · trop de · assez de · un kilo de'},
    {t:'table', head:['Expresión','Ejemplo','Español'], rows:[
      ['beaucoup de','beaucoup de travail','mucho trabajo'],
      ['un peu de','un peu de sel','un poco de sal'],
      ['trop de','trop de bruit','demasiado ruido'],
      ['assez de','assez d’argent','suficiente dinero'],
      ['peu de','peu de gens','poca gente'],
      ['un kilo de','un kilo de pommes','un kilo de manzanas'],
      ['une bouteille de','une bouteille de vin','una botella de vino']
    ]},
    {t:'ex', fr:'J’ai beaucoup de travail.', es:'Tengo mucho trabajo — nunca "beaucoup du travail"'},
    {t:'piege', es:'Excepción a esta segunda regla: "la plupart de" (la mayoría de) y "bien de" (mucho, formal) sí conservan el artículo: "la plupart DES gens", "bien DES problèmes". Son las dos únicas que hay que recordar.'},

    {t:'p', es:'Con AIMER, ADORER, DÉTESTER se usa el artículo DEFINIDO, no el partitivo. Porque hablas de la cosa en general, no de una cantidad:'},
    {t:'ex', fr:'J’aime le café.', es:'Me gusta el café — en general'},
    {t:'ex', fr:'Je bois du café.', es:'Tomo café — una cantidad'},
    {t:'regle', es:'aimer / adorer / détester + LE, LA, LES · manger / boire / acheter + DU, DE LA, DES', fr:'J’aime le vin, mais je bois de la bière.'}
  ],
  exercices:[
    {type:'trou', q:'Je voudrais ___ pain, s’il vous plaît.', r:['du'], expl:'pain es masculino: du.'},
    {type:'trou', q:'Elle boit ___ eau.', r:['de l’','de l\'','de l'], expl:'eau empieza con vocal: de l’.'},
    {type:'trou', q:'Je n’ai pas ___ argent.', r:['d’','d\'','de'], expl:'Tras negación, todo se reduce a de.'},
    {type:'trou', q:'Il a beaucoup ___ amis.', r:['d’','d\'','de'], expl:'Tras expresión de cantidad, solo de.'},
    {type:'qcm', q:'"Me gusta el vino pero tomo cerveza" es…', opts:['J’aime le vin mais je bois de la bière','J’aime du vin mais je bois la bière','J’aime le vin mais je bois la bière'], r:0,
     expl:'aimer lleva definido (gusto general), boire lleva partitivo (cantidad).'},
    {type:'qcm', q:'"No hay pan" es…', opts:['Il n’y a pas de pain','Il n’y a pas du pain','Il n’y a pas le pain'], r:0,
     expl:'Negación reduce el partitivo a de.'}
  ]
},

/* ------------------------------------------------------------------ 2 --- */
{
  id:'a2-02-imparfait', lvl:'A2', ordre:2, minutos:15,
  titre:'El imparfait y su batalla con el passé composé',
  resume:'El imperfecto es fácil de formar y difícil de colocar. Aquí está la regla que de verdad funciona.',
  theorie:[
    {t:'p', es:'Buena noticia: el imperfecto es el tiempo MÁS REGULAR del francés. Un solo verbo en todo el idioma es irregular: être. Todos los demás siguen la misma receta.'},
    {t:'regle', es:'Toma el "nous" del presente, quítale -ons, y añade las terminaciones.', fr:'nous parlons → parl- → je parlais'},
    {t:'table', head:['Persona','Terminación','parler','finir','prendre'], rows:[
      ['je','-ais','parlais','finissais','prenais'],
      ['tu','-ais','parlais','finissais','prenais'],
      ['il / elle','-ait','parlait','finissait','prenait'],
      ['nous','-ions','parlions','finissions','prenions'],
      ['vous','-iez','parliez','finissiez','preniez'],
      ['ils / elles','-aient','parlaient','finissaient','prenaient']
    ]},
    {t:'p', es:'Único irregular: être usa el radical ét-.'},
    {t:'table', head:['','être'], rows:[
      ['j’','étais'],['tu','étais'],['il','était'],
      ['nous','étions'],['vous','étiez'],['ils','étaient']
    ]},
    {t:'son', fr:'je parlais · tu parlais · il parlait · ils parlaient', es:'Cuatro formas, un solo sonido: "parlè". Igual que en presente, el pronombre es lo que distingue.'},

    {t:'regle', es:'AHORA LO DIFÍCIL. Imperfecto vs passé composé. La regla en una frase: el passé composé cuenta QUÉ PASÓ; el imperfecto describe CÓMO ERAN LAS COSAS.', fr:'Il pleuvait (decorado) quand je suis sorti (acción).'},
    {t:'table', head:['IMPARFAIT','PASSÉ COMPOSÉ'], rows:[
      ['Descripción, contexto, decorado','Acción puntual, hecho'],
      ['Costumbre, algo repetido','Algo que pasó una vez'],
      ['Estado mental o físico','Cambio, reacción'],
      ['Acción en curso, sin final','Acción terminada'],
      ['"Era", "estaba", "solía"','"Fue", "hizo", "ha hecho"']
    ]},
    {t:'ex', fr:'Quand j’étais petit, j’habitais à Mexico.', es:'Cuando era pequeño, vivía en México. — descripción y costumbre'},
    {t:'ex', fr:'Hier, j’ai vu un film.', es:'Ayer vi una película. — hecho puntual'},
    {t:'ex', fr:'Je dormais quand le téléphone a sonné.', es:'Dormía cuando sonó el teléfono. — fondo + interrupción'},
    {t:'ex', fr:'Il faisait froid et il n’y avait personne.', es:'Hacía frío y no había nadie. — puro decorado'},

    {t:'p', es:'La imagen que lo resuelve: piensa en una película. El imperfecto es el DECORADO y la cámara fija. El passé composé es lo que ENTRA EN ESCENA.'},
    {t:'ex', fr:'Il faisait nuit. La rue était vide. Soudain, une voiture est arrivée.', es:'Era de noche. La calle estaba vacía. De pronto, llegó un coche.'},

    {t:'piege', es:'Al hispanohablante esto le sale casi gratis, porque el español tiene la misma distinción: "era / fue", "vivía / viví", "dormía / dormí". Si dudas, traduce al español y fíjate cuál suena bien. Es de las pocas veces en que tu lengua materna te ayuda directamente.'},
    {t:'piege', es:'Pero ojo con estos verbos, que cambian de significado según el tiempo:'},
    {t:'table', head:['Verbo','Imperfecto','Passé composé'], rows:[
      ['savoir','je savais = yo sabía','j’ai su = me enteré'],
      ['pouvoir','je pouvais = podía (capacidad)','j’ai pu = logré'],
      ['vouloir','je voulais = quería','j’ai voulu = intenté / decidí'],
      ['connaître','je connaissais = conocía','j’ai connu = conocí (por primera vez)'],
      ['devoir','je devais = debía / tenía que','j’ai dû = tuve que / debí de']
    ]},
    {t:'ex', fr:'Je savais la réponse.', es:'Sabía la respuesta.'},
    {t:'ex', fr:'J’ai su la vérité hier.', es:'Me enteré de la verdad ayer.'},

    {t:'p', es:'Usos extra del imperfecto que conviene tener:'},
    {t:'ex', fr:'Si on allait au cinéma ?', es:'¿Y si vamos al cine? — sugerencia'},
    {t:'ex', fr:'Je voulais vous demander quelque chose.', es:'Quería preguntarle algo. — cortesía, suaviza'},
    {t:'p', es:'Ese último uso es oro social: "je voudrais" y "je voulais" suenan mucho más educados que "je veux".'}
  ],
  exercices:[
    {type:'trou', q:'Quand j’___ (être) petit, je ___ (jouer) au foot.', r:['étais','jouais'], expl:'Descripción + costumbre: imperfecto los dos.'},
    {type:'trou', q:'Je ___ (dormir) quand tu as appelé.', r:['dormais'], expl:'Acción en curso interrumpida.'},
    {type:'trou', q:'Hier, nous ___ (voir, passé composé) un très bon film.', r:['avons vu'], expl:'Hecho puntual y terminado.'},
    {type:'qcm', q:'"Me enteré ayer" es…', opts:['J’ai su hier','Je savais hier','Je sus hier'], r:0,
     expl:'savoir en passé composé cambia a "enterarse".'},
    {type:'qcm', q:'"Hacía frío y llegó un coche" se traduce…', opts:['Il faisait froid et une voiture est arrivée','Il a fait froid et une voiture arrivait','Il faisait froid et une voiture arrivait'], r:0,
     expl:'Decorado en imperfecto, acción que entra en passé composé.'}
  ]
},

/* ------------------------------------------------------------------ 3 --- */
{
  id:'a2-03-cod-coi', lvl:'A2', ordre:3, minutos:15,
  titre:'Los pronombres COD y COI',
  resume:'Sustituir el complemento por un pronombre. Parecido al español, con una diferencia de orden que hay que interiorizar.',
  theorie:[
    {t:'p', es:'Igual que en español decimos "lo veo" en vez de "veo el libro", el francés sustituye complementos por pronombres. La lógica es la misma; el orden y algunas formas cambian.'},

    {t:'regle', es:'COD (complemento directo): responde a "¿qué?" o "¿a quién?" sin preposición.', fr:'Je vois LE LIVRE → Je LE vois.'},
    {t:'table', head:['Persona','COD','Ejemplo'], rows:[
      ['me','me / m’','Il me voit.'],
      ['te','te / t’','Je te comprends.'],
      ['lo / la','le / la / l’','Je le vois. / Je la vois.'],
      ['nos','nous','Il nous appelle.'],
      ['os / los','vous','Je vous invite.'],
      ['los / las','les','Je les connais.']
    ]},

    {t:'regle', es:'COI (complemento indirecto): responde a "¿a quién?" CON la preposición à.', fr:'Je parle À MARIE → Je LUI parle.'},
    {t:'table', head:['Persona','COI','Ejemplo'], rows:[
      ['me','me / m’','Il me parle.'],
      ['te','te / t’','Je te donne le livre.'],
      ['le (a él/ella)','lui','Je lui parle.'],
      ['nos','nous','Il nous répond.'],
      ['os / les','vous','Je vous écris.'],
      ['les','leur','Je leur téléphone.']
    ]},
    {t:'p', es:'Fíjate: me, te, nous, vous son IGUALES en COD y COI. Solo la tercera persona se distingue: le/la/les (directo) frente a lui/leur (indirecto).'},

    {t:'regle', es:'POSICIÓN: el pronombre va SIEMPRE antes del verbo conjugado. Nunca después.', fr:'Je le vois. ✓ / Je vois le. ✗'},
    {t:'ex', fr:'Je le connais.', es:'Lo conozco.'},
    {t:'ex', fr:'Je lui ai parlé.', es:'Le hablé — antes del auxiliar, no del participio'},
    {t:'ex', fr:'Je ne le vois pas.', es:'No lo veo — dentro del sándwich de negación'},
    {t:'ex', fr:'Je vais le faire.', es:'Voy a hacerlo — antes del INFINITIVO, que es el verbo que rige'},
    {t:'piege', es:'Esa última es la que más cuesta. En español pegamos el pronombre al infinitivo: "voy a hacerLO". En francés va DELANTE del infinitivo: "je vais LE faire". Nunca "je vais faire le".'},

    {t:'p', es:'Cuando hay dos pronombres juntos, el orden es fijo y hay que memorizarlo:'},
    {t:'table', head:['1º','2º','3º','4º','5º'], rows:[
      ['me / te / se / nous / vous','le / la / les','lui / leur','y','en']
    ]},
    {t:'ex', fr:'Il me le donne.', es:'Me lo da.'},
    {t:'ex', fr:'Je le lui ai dit.', es:'Se lo dije.'},
    {t:'ex', fr:'Elle nous les a montrés.', es:'Nos las mostró.'},
    {t:'piege', es:'Nota que en francés "le lui" mantiene las dos piezas separadas, mientras el español las funde en "se lo". Y el orden es inverso al español en tercera persona: español "se lo" = francés "le lui" (directo primero).'},

    {t:'regle', es:'Con AVOIR, si el COD va delante del verbo, el participio CONCUERDA con él.', fr:'Les lettres ? Je les ai écrites.'},
    {t:'ex', fr:'J’ai écrit les lettres.', es:'Escribí las cartas — sin concordancia, el COD va detrás'},
    {t:'ex', fr:'Les lettres ? Je les ai écrites.', es:'¿Las cartas? Las escribí — con concordancia, el COD (les) va delante'},
    {t:'p', es:'Esta es la famosa excepción de la concordancia con avoir que mencionamos en A1. Solo aplica cuando el complemento DIRECTO está antes del verbo. Con COI nunca hay concordancia: "Je lui ai parlé", no "parlée".'},

    {t:'p', es:'En imperativo afirmativo, el pronombre va DETRÁS con guion (y me/te se vuelven moi/toi):'},
    {t:'ex', fr:'Donne-le-moi !', es:'¡Dámelo!'},
    {t:'ex', fr:'Dis-moi la vérité.', es:'Dime la verdad.'},
    {t:'ex', fr:'Ne me le donne pas !', es:'¡No me lo des! — en negativo vuelve delante'}
  ],
  exercices:[
    {type:'qcm', q:'"Je parle à Marie" con pronombre es…', opts:['Je lui parle','Je la parle','Je le parle'], r:0,
     expl:'"parler à" rige COI: lui.'},
    {type:'qcm', q:'"Je vois Pierre" con pronombre es…', opts:['Je le vois','Je lui vois','Je vois le'], r:0,
     expl:'"voir" es directo: le.'},
    {type:'qcm', q:'"Voy a hacerlo" es…', opts:['Je vais le faire','Je vais faire le','Je le vais faire'], r:0,
     expl:'El pronombre va antes del infinitivo que rige.'},
    {type:'trou', q:'Je ___ ai téléphoné hier. (a ellos)', r:['leur'], expl:'"téléphoner à" es indirecto plural: leur.'},
    {type:'qcm', q:'"Las cartas, las escribí" es…', opts:['Les lettres, je les ai écrites','Les lettres, je les ai écrit','Les lettres, j’ai les écrites'], r:0,
     expl:'COD delante del verbo: el participio concuerda.'}
  ]
},

/* ------------------------------------------------------------------ 4 --- */
{
  id:'a2-04-y-en', lvl:'A2', ordre:4, minutos:13,
  titre:'Y y EN: los dos pronombres que el español no tiene',
  resume:'No hay traducción directa. Por eso cuestan. Pero son de lo más frecuente del idioma.',
  theorie:[
    {t:'p', es:'El español no tiene equivalentes de "y" y "en". Simplemente omitimos lo que ellos pronominalizan. Por eso un hispanohablante tiende a no usarlos nunca, y eso se nota muchísimo.'},

    {t:'regle', es:'Y sustituye a un LUGAR, o a un complemento con la preposición À.', fr:'Je vais à Paris → J’y vais.'},
    {t:'ex', fr:'Tu vas au marché ? — Oui, j’y vais.', es:'¿Vas al mercado? — Sí, voy (allí).'},
    {t:'ex', fr:'Je pense à mon travail. → J’y pense.', es:'Pienso en mi trabajo. → Pienso en ello.'},
    {t:'ex', fr:'On y va !', es:'¡Vámonos! — la frase más usada del francés hablado'},
    {t:'ex', fr:'Il y a un problème.', es:'Hay un problema — el "y" de "il y a" es este mismo'},

    {t:'regle', es:'EN sustituye a un complemento con DE, o a una cantidad.', fr:'Je viens de Paris → J’en viens. · J’ai trois livres → J’en ai trois.'},
    {t:'ex', fr:'Tu veux du café ? — Oui, j’en veux.', es:'¿Quieres café? — Sí, quiero.'},
    {t:'ex', fr:'Combien de frères as-tu ? — J’en ai deux.', es:'¿Cuántos hermanos tienes? — Tengo dos.'},
    {t:'ex', fr:'Il parle de son projet. → Il en parle.', es:'Habla de su proyecto. → Habla de ello.'},
    {t:'ex', fr:'J’en ai marre !', es:'¡Estoy harto! — expresión hecha, utilísima'},

    {t:'piege', es:'La regla que resuelve casi todo: mira la PREPOSICIÓN del verbo. Si el verbo rige À → usas Y. Si rige DE → usas EN. Por eso hay que aprender los verbos con su preposición, no sueltos.'},
    {t:'table', head:['Verbo con à → Y','Verbo con de → EN'], rows:[
      ['penser à → j’y pense','parler de → j’en parle'],
      ['répondre à → j’y réponds','avoir besoin de → j’en ai besoin'],
      ['s’intéresser à → je m’y intéresse','avoir envie de → j’en ai envie'],
      ['réfléchir à → j’y réfléchis','se souvenir de → je m’en souviens'],
      ['participer à → j’y participe','s’occuper de → je m’en occupe']
    ]},

    {t:'regle', es:'IMPORTANTE: Y y EN solo sustituyen COSAS, no personas. Con personas se usan los pronombres normales.', fr:'Je pense à mon travail → J’y pense. · Je pense à Marie → Je pense à elle.'},
    {t:'ex', fr:'Je pense à elle.', es:'Pienso en ella — persona, no lleva y'},
    {t:'ex', fr:'Je m’occupe de lui.', es:'Me ocupo de él — persona, no lleva en'},

    {t:'p', es:'Con cantidades, EN es obligatorio y la cantidad se repite al final:'},
    {t:'ex', fr:'J’ai deux voitures. → J’en ai deux.', es:'Tengo dos coches. → Tengo dos.'},
    {t:'ex', fr:'Il y a beaucoup de monde. → Il y en a beaucoup.', es:'Hay mucha gente. → Hay mucha.'},
    {t:'piege', es:'En español decimos "tengo dos" y ya. En francés NO puedes decir "j’ai deux" a secas: falta el en. "J’en ai deux". Omitirlo es un error que se oye inmediatamente.'},

    {t:'p', es:'Expresiones fijas con y / en que conviene aprender de memoria:'},
    {t:'table', head:['Expresión','Español'], rows:[
      ['On y va !','¡Vámonos!'],
      ['Ça y est !','¡Ya está! / ¡Listo!'],
      ['J’en ai marre.','Estoy harto.'],
      ['Il y a…','Hay…'],
      ['Je m’en fiche.','Me da igual. (informal)'],
      ['Ne t’en fais pas.','No te preocupes.'],
      ['Vas-y !','¡Anda! / ¡Dale!'],
      ['J’en ai assez.','Ya tuve suficiente.']
    ]}
  ],
  exercices:[
    {type:'qcm', q:'"Tu vas à Paris ?" — la respuesta con pronombre es…', opts:['Oui, j’y vais','Oui, j’en vais','Oui, je le vais'], r:0,
     expl:'Lugar con à: y.'},
    {type:'qcm', q:'"Tu veux du pain ?" — con pronombre…', opts:['Oui, j’en veux','Oui, j’y veux','Oui, je le veux'], r:0,
     expl:'Partitivo (de): en.'},
    {type:'trou', q:'Combien de frères as-tu ? — J’___ ai trois.', r:['en'], expl:'Con cantidad, en es obligatorio.'},
    {type:'qcm', q:'"Pienso en Marie" es…', opts:['Je pense à elle','J’y pense','Je la pense'], r:0,
     expl:'Con personas no se usa y: se repite la preposición + pronombre tónico.'},
    {type:'qcm', q:'"J’en ai marre" significa…', opts:['Estoy harto','Tengo mar','Lo tengo'], r:0,
     expl:'Expresión fija, de las más usadas del francés coloquial.'}
  ]
},

/* ------------------------------------------------------------------ 5 --- */
{
  id:'a2-05-futur-simple', lvl:'A2', ordre:5, minutos:12,
  titre:'El futuro simple',
  resume:'Un solo juego de terminaciones para todos los verbos del idioma. Y el radical te regala también el condicional.',
  theorie:[
    {t:'regle', es:'Radical del futuro = el INFINITIVO completo (los -re pierden la e final). Terminaciones: las de AVOIR en presente.', fr:'parler + ai = je parlerai'},
    {t:'table', head:['Persona','Terminación','parler','finir','prendre'], rows:[
      ['je','-ai','parlerai','finirai','prendrai'],
      ['tu','-as','parleras','finiras','prendras'],
      ['il / elle','-a','parlera','finira','prendra'],
      ['nous','-ons','parlerons','finirons','prendrons'],
      ['vous','-ez','parlerez','finirez','prendrez'],
      ['ils / elles','-ont','parleront','finiront','prendront']
    ]},
    {t:'p', es:'Fíjate que las terminaciones son literalmente ai, as, a, ons, ez, ont — el presente de avoir. Históricamente el futuro se formó así: "parler ai" = "tengo que hablar" → "hablaré". El español hizo exactamente lo mismo: "hablar he" → "hablaré".'},

    {t:'regle', es:'Regla infalible: TODOS los futuros llevan una R antes de la terminación. Sin excepción, en todo el idioma.', fr:'je serai · j’aurai · j’irai · je ferai · je viendrai'},

    {t:'p', es:'Los radicales irregulares. Son pocos y son los verbos más usados, así que hay que sabérselos:'},
    {t:'table', head:['Infinitivo','Radical','Futuro','','Infinitivo','Radical','Futuro'], rows:[
      ['être','ser-','je serai','','venir','viendr-','je viendrai'],
      ['avoir','aur-','j’aurai','','tenir','tiendr-','je tiendrai'],
      ['aller','ir-','j’irai','','voir','verr-','je verrai'],
      ['faire','fer-','je ferai','','envoyer','enverr-','j’enverrai'],
      ['savoir','saur-','je saurai','','courir','courr-','je courrai'],
      ['pouvoir','pourr-','je pourrai','','mourir','mourr-','je mourrai'],
      ['vouloir','voudr-','je voudrai','','falloir','faudr-','il faudra'],
      ['devoir','devr-','je devrai','','pleuvoir','pleuvr-','il pleuvra'],
      ['recevoir','recevr-','je recevrai','','valoir','vaudr-','il vaudra']
    ]},
    {t:'ex', fr:'Je serai là demain.', es:'Estaré ahí mañana.'},
    {t:'ex', fr:'Nous irons en France l’année prochaine.', es:'Iremos a Francia el año próximo.'},
    {t:'ex', fr:'Il fera beau ce week-end.', es:'Hará buen tiempo este fin de semana.'},

    {t:'regle', es:'DIFERENCIA CON EL ESPAÑOL: tras QUAND, el francés usa FUTURO donde el español usa subjuntivo.', fr:'Quand j’aurai le temps, je t’appellerai.'},
    {t:'ex', fr:'Quand tu arriveras, appelle-moi.', es:'Cuando llegues, llámame — español subjuntivo, francés futuro'},
    {t:'ex', fr:'Dès que je saurai, je te dirai.', es:'En cuanto sepa, te digo.'},
    {t:'piege', es:'Este es un error muy frecuente. El hispanohablante traduce "cuando llegues" por "quand tu arrives" o inventa un subjuntivo. En francés, si la acción es futura, el verbo tras quand / dès que / lorsque / aussitôt que va en FUTURO. Mismo caso con "tant que" (mientras).'},

    {t:'p', es:'Cuándo usar futuro simple y cuándo futur proche:'},
    {t:'table', head:['Futur proche (je vais partir)','Futur simple (je partirai)'], rows:[
      ['Habla cotidiana','Escrito, formal'],
      ['Plan concreto, cercano','Predicción, lejano'],
      ['Alta probabilidad','Compromiso, promesa'],
      ['"Voy a salir ahorita"','"Saldré en junio"']
    ]},
    {t:'p', es:'En la práctica: para hablar te basta el futur proche. Para leer, escribir y sonar culto, necesitas el simple.'}
  ],
  exercices:[
    {type:'trou', q:'Demain, je ___ (être) à Paris.', r:['serai'], expl:'Radical irregular ser-.'},
    {type:'trou', q:'Nous ___ (aller) au restaurant.', r:['irons'], expl:'Radical irregular ir-.'},
    {type:'trou', q:'Il ___ (faire) beau demain.', r:['fera'], expl:'Radical irregular fer-.'},
    {type:'qcm', q:'"Cuando llegues, llámame" es…', opts:['Quand tu arriveras, appelle-moi','Quand tu arrives, appelle-moi','Quand tu arrivais, appelle-moi'], r:0,
     expl:'Tras quand con sentido futuro, el francés usa futuro donde el español usa subjuntivo.'},
    {type:'qcm', q:'¿Qué tienen en común TODOS los futuros franceses?', opts:['Llevan una r antes de la terminación','Terminan en -ai','Empiezan con je'], r:0,
     expl:'La r del infinitivo original siempre sobrevive.'}
  ]
},

/* ------------------------------------------------------------------ 6 --- */
{
  id:'a2-06-comparatifs', lvl:'A2', ordre:6, minutos:11,
  titre:'Comparativos y superlativos',
  resume:'Plus, moins, aussi. Sencillo, salvo tres irregulares que se usan todo el tiempo.',
  theorie:[
    {t:'table', head:['Tipo','Estructura','Ejemplo','Español'], rows:[
      ['superioridad','plus + adj + que','plus grand que','más grande que'],
      ['inferioridad','moins + adj + que','moins cher que','menos caro que'],
      ['igualdad','aussi + adj + que','aussi beau que','tan bello como']
    ]},
    {t:'ex', fr:'Paris est plus grand que Lyon.', es:'París es más grande que Lyon.'},
    {t:'ex', fr:'Ce livre est moins cher que l’autre.', es:'Este libro es menos caro que el otro.'},
    {t:'ex', fr:'Elle est aussi intelligente que lui.', es:'Ella es tan inteligente como él.'},
    {t:'piege', es:'Ojo: el "que" francés cubre el "que" y el "como" españoles. "aussi… QUE" = "tan… COMO". No existe "aussi… comme".'},

    {t:'p', es:'Con sustantivos (cantidades) se usa DE:'},
    {t:'ex', fr:'J’ai plus de travail que toi.', es:'Tengo más trabajo que tú.'},
    {t:'ex', fr:'Il y a autant de monde qu’hier.', es:'Hay tanta gente como ayer — autant, no aussi'},
    {t:'regle', es:'Con adjetivos: plus / moins / AUSSI. Con sustantivos: plus de / moins de / AUTANT DE.', fr:'aussi grand ≠ autant de travail'},

    {t:'p', es:'Con verbos, van después del verbo:'},
    {t:'ex', fr:'Il travaille plus que moi.', es:'Él trabaja más que yo.'},
    {t:'ex', fr:'Je dors autant que toi.', es:'Duermo tanto como tú.'},

    {t:'regle', es:'LOS TRES IRREGULARES. Estos no aceptan "plus" y hay que memorizarlos.', fr:'bon → meilleur · bien → mieux · mauvais → pire'},
    {t:'table', head:['Adjetivo/Adverbio','Comparativo','Superlativo','Español'], rows:[
      ['bon (adj)','meilleur','le meilleur','bueno → mejor'],
      ['bien (adv)','mieux','le mieux','bien → mejor'],
      ['mauvais (adj)','pire / plus mauvais','le pire','malo → peor'],
      ['mal (adv)','pire / plus mal','le pire','mal → peor']
    ]},
    {t:'ex', fr:'Ce vin est meilleur que l’autre.', es:'Este vino es mejor que el otro — adjetivo'},
    {t:'ex', fr:'Elle chante mieux que moi.', es:'Ella canta mejor que yo — adverbio'},
    {t:'piege', es:'MEILLEUR vs MIEUX es el error estrella. Regla: MEILLEUR acompaña a un SUSTANTIVO (es adjetivo). MIEUX acompaña a un VERBO (es adverbio). "un meilleur café" (un mejor café) pero "ça marche mieux" (funciona mejor). Nunca "plus bon" ni "plus bien".'},

    {t:'p', es:'SUPERLATIVO: se le añade el artículo definido al comparativo.'},
    {t:'ex', fr:'C’est le plus grand musée de France.', es:'Es el museo más grande de Francia.'},
    {t:'ex', fr:'C’est la moins chère.', es:'Es la menos cara.'},
    {t:'ex', fr:'C’est le meilleur restaurant du quartier.', es:'Es el mejor restaurante del barrio.'},
    {t:'piege', es:'Tras un superlativo, "de" traduce el "de" y el "en" españoles: "el más grande DEL mundo" = "le plus grand DU monde"; "el mejor EN Europa" = "le meilleur D’Europe". Nunca "dans".'},

    {t:'p', es:'Si el adjetivo va detrás del sustantivo, el artículo se repite:'},
    {t:'ex', fr:'la voiture la plus rapide', es:'el coche más rápido — dos artículos'},
    {t:'ex', fr:'le plus beau jardin', es:'el jardín más bonito — beau va delante, un solo artículo'}
  ],
  exercices:[
    {type:'trou', q:'Ce film est ___ intéressant ___ l’autre. (más… que)', r:['plus','que'], expl:''},
    {type:'qcm', q:'"Este vino es mejor" es…', opts:['Ce vin est meilleur','Ce vin est mieux','Ce vin est plus bon'], r:0,
     expl:'Con sustantivo/adjetivo: meilleur. "plus bon" no existe.'},
    {type:'qcm', q:'"Ella canta mejor" es…', opts:['Elle chante mieux','Elle chante meilleur','Elle chante plus bien'], r:0,
     expl:'Con verbo: mieux, que es adverbio.'},
    {type:'trou', q:'J’ai ___ travail que toi. (más)', r:['plus de'], expl:'Con sustantivo se usa "plus de".'},
    {type:'qcm', q:'"El más grande del mundo" es…', opts:['le plus grand du monde','le plus grand dans le monde','le plus grand en monde'], r:0,
     expl:'Tras superlativo siempre de/du, nunca dans.'}
  ]
},

/* ------------------------------------------------------------------ 7 --- */
{
  id:'a2-07-pronominaux', lvl:'A2', ordre:7, minutos:12,
  titre:'Los verbos pronominales',
  resume:'Los reflexivos franceses. Muy parecidos al español, con una trampa de concordancia al final.',
  theorie:[
    {t:'p', es:'Un verbo pronominal lleva un pronombre que se refiere al sujeto. Igual que el español "levantarse", "lavarse". La estructura es casi idéntica, así que esto se te va a dar bien.'},
    {t:'table', head:['Persona','Pronombre','se lever'], rows:[
      ['je','me','je me lève'],
      ['tu','te','tu te lèves'],
      ['il / elle / on','se','il se lève'],
      ['nous','nous','nous nous levons'],
      ['vous','vous','vous vous levez'],
      ['ils / elles','se','ils se lèvent']
    ]},
    {t:'ex', fr:'Je me lève à six heures.', es:'Me levanto a las seis.'},
    {t:'ex', fr:'Nous nous couchons tard.', es:'Nos acostamos tarde — sí, "nous nous", no es error'},
    {t:'ex', fr:'Comment tu t’appelles ?', es:'¿Cómo te llamas?'},

    {t:'p', es:'Los cuatro tipos, para entender qué está pasando:'},
    {t:'table', head:['Tipo','Qué significa','Ejemplo'], rows:[
      ['Reflexivo','la acción vuelve al sujeto','Je me lave. — Me lavo.'],
      ['Recíproco','se hacen algo mutuamente','Ils se parlent. — Se hablan.'],
      ['De sentido propio','el pronombre es parte del verbo','Je me souviens. — Me acuerdo.'],
      ['Pasivo','equivale a "se hace"','Ça se dit. — Eso se dice.']
    ]},

    {t:'regle', es:'En passé composé, TODOS los pronominales usan ÊTRE. Sin excepción.', fr:'Je me suis levé. · Elle s’est couchée.'},
    {t:'ex', fr:'Je me suis levé tôt.', es:'Me levanté temprano.'},
    {t:'ex', fr:'Elle s’est réveillée à midi.', es:'Ella se despertó a mediodía.'},
    {t:'ex', fr:'Nous nous sommes rencontrés à Paris.', es:'Nos conocimos en París.'},

    {t:'piege', es:'La trampa de la concordancia. El participio concuerda con el pronombre SOLO si ese pronombre es complemento DIRECTO. Si hay otro complemento directo después, no concuerda.'},
    {t:'table', head:['Frase','¿Concuerda?','Por qué'], rows:[
      ['Elle s’est lavée.','sí','se = a sí misma, directo'],
      ['Elle s’est lavé les mains.','no','el directo es "les mains", que va después'],
      ['Ils se sont parlé.','no','"parler à" es indirecto'],
      ['Ils se sont vus.','sí','"voir" es directo']
    ]},
    {t:'p', es:'Truco práctico: si después del participio hay un objeto, no concuerdes. Si no hay nada, concuerda. Y si el verbo lleva "à" (parler à, téléphoner à, écrire à), nunca concuerda.'},

    {t:'p', es:'En negativo e imperativo:'},
    {t:'ex', fr:'Je ne me lève pas tôt.', es:'No me levanto temprano.'},
    {t:'ex', fr:'Je ne me suis pas levé.', es:'No me levanté — el sándwich abraza al auxiliar'},
    {t:'ex', fr:'Lève-toi !', es:'¡Levántate! — imperativo afirmativo, te → toi, detrás con guion'},
    {t:'ex', fr:'Ne te lève pas !', es:'¡No te levantes! — en negativo, el pronombre vuelve delante'},

    {t:'p', es:'Pronominales de uso diario que conviene tener a mano:'},
    {t:'table', head:['Verbo','Español','','Verbo','Español'], rows:[
      ['se lever','levantarse','','se dépêcher','apurarse'],
      ['se coucher','acostarse','','s’amuser','divertirse'],
      ['se réveiller','despertarse','','s’ennuyer','aburrirse'],
      ['s’habiller','vestirse','','s’inquiéter','preocuparse'],
      ['se laver','lavarse','','se souvenir de','acordarse de'],
      ['s’appeler','llamarse','','se rendre compte','darse cuenta'],
      ['se reposer','descansar','','s’occuper de','ocuparse de'],
      ['se promener','pasear','','se tromper','equivocarse']
    ]}
  ],
  exercices:[
    {type:'trou', q:'Je ___ lève à sept heures.', r:['me'], expl:''},
    {type:'trou', q:'Nous ___ ___ couchons tard.', r:['nous','nous'], expl:'El pronombre sujeto y el reflexivo coinciden en la forma.'},
    {type:'trou', q:'Elle s’est ___ (laver) les mains.', r:['lavé'], expl:'No concuerda: el directo "les mains" va después.'},
    {type:'trou', q:'Elle s’est ___ (laver).', r:['lavée'], expl:'Aquí sí concuerda: "se" es el directo.'},
    {type:'qcm', q:'"¡Levántate!" es…', opts:['Lève-toi !','Te lève !','Lève-te !'], r:0,
     expl:'Imperativo afirmativo: pronombre detrás con guion, te → toi.'}
  ]
},

/* ------------------------------------------------------------------ 8 --- */
{
  id:'a2-08-prepositions', lvl:'A2', ordre:8, minutos:12,
  titre:'Preposiciones de lugar, países y transporte',
  resume:'À, en, de, chez. Y la regla de países que nadie explica bien.',
  theorie:[
    {t:'regle', es:'Contracciones obligatorias. No son opcionales ni estilo: à + le y de + le se FUNDEN siempre.', fr:'à + le = au · à + les = aux · de + le = du · de + les = des'},
    {t:'table', head:['Nunca escribas','Escribe','Ejemplo'], rows:[
      ['à le','au','Je vais au cinéma.'],
      ['à les','aux','Je parle aux étudiants.'],
      ['de le','du','Je viens du bureau.'],
      ['de les','des','C’est la voiture des voisins.']
    ]},
    {t:'p', es:'Con la y l’ NO hay contracción: "à la maison", "de l’école".'},

    {t:'regle', es:'PAÍSES: la preposición depende del género del país.', fr:'en France · au Mexique · aux États-Unis'},
    {t:'table', head:['Tipo de país','Preposición','Ejemplo'], rows:[
      ['femenino (termina en -e)','en','en France, en Espagne, en Chine'],
      ['masculino','au','au Mexique, au Canada, au Japon'],
      ['plural','aux','aux États-Unis, aux Pays-Bas'],
      ['masculino con vocal inicial','en','en Iran, en Irak'],
      ['ciudades','à','à Paris, à Mexico, à Tokyo']
    ]},
    {t:'ex', fr:'J’habite au Mexique.', es:'Vivo en México — Mexique es masculino'},
    {t:'ex', fr:'Je vais en France.', es:'Voy a Francia — France es femenino'},
    {t:'ex', fr:'Il travaille aux États-Unis.', es:'Trabaja en Estados Unidos — plural'},
    {t:'piege', es:'La regla práctica: casi todos los países que terminan en -e son femeninos y llevan "en". Excepciones importantes que son masculinos pese a la e: le Mexique, le Cambodge, le Mozambique, le Zimbabwe. Por eso es "AU Mexique", que es justo el que te toca.'},
    {t:'p', es:'Para decir DE DÓNDE vienes, la misma lógica pero con de:'},
    {t:'ex', fr:'Je viens du Mexique.', es:'Vengo de México.'},
    {t:'ex', fr:'Elle vient de France.', es:'Ella viene de Francia — femenino, solo "de"'},

    {t:'regle', es:'CHEZ: significa "en casa de" o "en el negocio de". No tiene equivalente de una palabra en español.', fr:'chez moi · chez le médecin · chez Renault'},
    {t:'ex', fr:'Je vais chez moi.', es:'Voy a mi casa.'},
    {t:'ex', fr:'On mange chez Pierre ce soir.', es:'Comemos en casa de Pierre esta noche.'},
    {t:'ex', fr:'J’ai rendez-vous chez le dentiste.', es:'Tengo cita con el dentista.'},
    {t:'piege', es:'"chez" solo va con PERSONAS o profesiones, nunca con lugares. "chez le boulanger" ✓ (en la panadería, refiriéndote al panadero) pero "chez la boulangerie" ✗. Para lugares se usa à: "à la boulangerie".'},

    {t:'p', es:'TRANSPORTE: en si vas dentro, à si vas encima.'},
    {t:'table', head:['Preposición','Cuándo','Ejemplos'], rows:[
      ['en','vas dentro del vehículo','en voiture, en train, en avion, en bus, en métro'],
      ['à','vas encima o a pie','à pied, à vélo, à moto, à cheval']
    ]},
    {t:'ex', fr:'Je vais au travail en métro.', es:'Voy al trabajo en metro.'},
    {t:'ex', fr:'Elle vient à vélo.', es:'Ella viene en bici.'},

    {t:'p', es:'Preposiciones de lugar más útiles:'},
    {t:'table', head:['Francés','Español','','Francés','Español'], rows:[
      ['sur','sobre','','sous','debajo de'],
      ['dans','dentro de','','devant','delante de'],
      ['derrière','detrás de','','entre','entre'],
      ['à côté de','al lado de','','en face de','enfrente de'],
      ['près de','cerca de','','loin de','lejos de'],
      ['au-dessus de','encima de','','au-dessous de','debajo de']
    ]},
    {t:'piege', es:'"dans" y "en" ambos se traducen como "en", pero no son iguales. "dans" es físico, dentro de algo concreto: "dans la voiture" (dentro del coche). "en" es más abstracto o de modo: "en voiture" (en coche, como medio). "dans la France" suena mal; "en France" es lo correcto.'}
  ],
  exercices:[
    {type:'trou', q:'Je vais ___ cinéma. (à + le)', r:['au'], expl:'Contracción obligatoria.'},
    {type:'trou', q:'J’habite ___ Mexique.', r:['au'], expl:'Mexique es masculino pese a terminar en -e.'},
    {type:'trou', q:'Elle va ___ France.', r:['en'], expl:'France es femenino.'},
    {type:'qcm', q:'"Voy al dentista" es…', opts:['Je vais chez le dentiste','Je vais au dentiste','Je vais à le dentiste'], r:0,
     expl:'Con profesiones se usa chez.'},
    {type:'qcm', q:'"Voy en bici" es…', opts:['Je vais à vélo','Je vais en vélo','Je vais dans vélo'], r:0,
     expl:'Si vas encima del vehículo: à.'}
  ]
},

/* ------------------------------------------------------------------ 9 --- */
{
  id:'a2-09-imperatif', lvl:'A2', ordre:9, minutos:9,
  titre:'El imperativo',
  resume:'Dar órdenes, instrucciones y consejos. Tres formas y una regla de pronombres que se invierte.',
  theorie:[
    {t:'regle', es:'El imperativo tiene solo TRES formas: tu, nous y vous. Se toman del presente y se quita el pronombre.', fr:'tu parles → Parle ! · nous parlons → Parlons ! · vous parlez → Parlez !'},
    {t:'table', head:['Persona','parler','finir','prendre','Español'], rows:[
      ['tu','Parle !','Finis !','Prends !','¡Habla!'],
      ['nous','Parlons !','Finissons !','Prenons !','¡Hablemos!'],
      ['vous','Parlez !','Finissez !','Prenez !','¡Hablen!']
    ]},
    {t:'regle', es:'Ojo con los verbos en -ER: en la forma "tu" PIERDEN la s final.', fr:'tu parles → Parle ! (sin s) · tu finis → Finis ! (con s, no es -er)'},
    {t:'ex', fr:'Écoute-moi !', es:'¡Escúchame! — écouter es -er, pierde la s'},
    {t:'ex', fr:'Va au lit !', es:'¡Vete a la cama! — aller también pierde la s'},
    {t:'piege', es:'Pero esa s reaparece ante y y en, por pura pronunciación: "Vas-y !" (¡Dale!), "Manges-en !" (¡Come de eso!). Sin la s serían impronunciables.'},

    {t:'p', es:'Los cuatro irregulares. Se memorizan y ya:'},
    {t:'table', head:['Verbo','tu','nous','vous'], rows:[
      ['être','sois','soyons','soyez'],
      ['avoir','aie','ayons','ayez'],
      ['savoir','sache','sachons','sachez'],
      ['vouloir','veuille','—','veuillez']
    ]},
    {t:'ex', fr:'Sois patient !', es:'¡Sé paciente!'},
    {t:'ex', fr:'N’ayez pas peur.', es:'No tengan miedo.'},
    {t:'ex', fr:'Veuillez patienter.', es:'Sírvase esperar — fórmula muy formal, la oyes en teléfonos y avisos'},

    {t:'regle', es:'PRONOMBRES: en afirmativo van DETRÁS con guion. En negativo vuelven DELANTE.', fr:'Donne-le-moi ! / Ne me le donne pas !'},
    {t:'ex', fr:'Regarde-moi !', es:'¡Mírame! — me se vuelve moi'},
    {t:'ex', fr:'Ne me regarde pas !', es:'¡No me mires! — vuelve delante y recupera "me"'},
    {t:'ex', fr:'Lève-toi !', es:'¡Levántate!'},
    {t:'ex', fr:'Ne te lève pas !', es:'¡No te levantes!'},
    {t:'ex', fr:'Dis-le-lui !', es:'¡Díselo!'},
    {t:'piege', es:'En afirmativo, ME y TE se convierten en MOI y TOI. Es la misma lógica del español "dímelo" (no "dimelo"). Pero solo en afirmativo: en negativo vuelven a me y te.'},

    {t:'p', es:'Formas más suaves de dar órdenes, porque el imperativo directo puede sonar brusco:'},
    {t:'table', head:['Estructura','Ejemplo','Español'], rows:[
      ['Pouvez-vous… ?','Pouvez-vous m’aider ?','¿Puede ayudarme?'],
      ['Pourriez-vous… ?','Pourriez-vous répéter ?','¿Podría repetir? (más suave)'],
      ['Vous pouvez…','Vous pouvez entrer.','Puede pasar.'],
      ['Si vous voulez bien…','Si vous voulez bien me suivre.','Si me hace el favor de seguirme.'],
      ['Veuillez…','Veuillez patienter.','Sírvase esperar. (muy formal)']
    ]},
    {t:'p', es:'Regla social: en Francia el imperativo pelado a un desconocido suena áspero. Añade "s’il vous plaît" o usa una de las formas de arriba. Con amigos, el imperativo directo es normal.'}
  ],
  exercices:[
    {type:'trou', q:'___ (parler, tu) plus fort !', r:['Parle','parle'], expl:'Los -er pierden la s en la forma tu.'},
    {type:'trou', q:'___ (finir, vous) votre travail !', r:['Finissez','finissez'], expl:''},
    {type:'qcm', q:'"¡Dámelo!" es…', opts:['Donne-le-moi !','Donne-moi-le !','Me le donne !'], r:0,
     expl:'Directo antes que indirecto, y me → moi.'},
    {type:'qcm', q:'"¡No me mires!" es…', opts:['Ne me regarde pas !','Ne regarde-moi pas !','Regarde-moi pas !'], r:0,
     expl:'En negativo el pronombre vuelve delante y recupera su forma átona.'},
    {type:'qcm', q:'"Sois patient" viene de…', opts:['être','avoir','savoir'], r:0,
     expl:'Imperativo irregular de être.'}
  ]
}

];
