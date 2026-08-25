/* ==========================================================================
   GRAMMAIRE A1 — los cimientos
   --------------------------------------------------------------------------
   Bloques de teoría disponibles:
     {t:'p',     es}          párrafo en español
     {t:'regle', es, fr}      la regla, destacada
     {t:'ex',    fr, es}      ejemplo (lleva botón de audio)
     {t:'table', head, rows}  tabla
     {t:'piege', es}          trampa específica para hispanohablantes
     {t:'son',   fr, es}      nota de pronunciación
   ========================================================================== */

window.GRAMMAIRE_A1 = [

/* ------------------------------------------------------------------ 1 --- */
{
  id:'a1-01-sons', lvl:'A1', ordre:1, minutos:14,
  titre:'Cómo suena el francés',
  resume:'Antes que nada: las reglas de lectura. El francés se escribe de una forma y se lee de otra, pero es perfectamente predecible.',
  theorie:[
    {t:'p', es:'El francés tiene fama de imposible de pronunciar. No lo es. Lo que pasa es que la escritura conserva letras que dejaron de sonar hace siglos. Una vez que sabes cuáles se callan, el sistema es más regular que el inglés.'},
    {t:'regle', es:'Regla número uno: las consonantes al final de palabra NO se pronuncian.', fr:'petit · grand · beaucoup · trois'},
    {t:'ex', fr:'petit', es:'pequeño — se dice "pöti", la t final no suena'},
    {t:'ex', fr:'beaucoup', es:'mucho — se dice "boku", ni la p ni la u final'},
    {t:'p', es:'Las excepciones se resumen en una palabra que sirve de truco: C-A-R-E-F-U-L. Las consonantes c, r, f, l sí suelen sonar al final.'},
    {t:'ex', fr:'avec', es:'con — la c sí suena'},
    {t:'ex', fr:'bonjour', es:'buenos días — la r sí suena'},
    {t:'ex', fr:'neuf', es:'nueve — la f sí suena'},

    {t:'p', es:'Segundo: las vocales combinadas. El francés escribe dos o tres letras para un solo sonido. Esta tabla es lo único que hay que memorizar de verdad.'},
    {t:'table', head:['Se escribe','Suena como','Ejemplo'], rows:[
      ['ou','u española','vous · nous · beaucoup'],
      ['u','no existe en español: labios de "u", lengua de "i"','tu · rue · sur'],
      ['ai / ei','e abierta','maison · seize'],
      ['au / eau','o','au · beau · bateau'],
      ['oi','ua','moi · trois · boire'],
      ['eu / œu','entre e y o, labios redondos','deux · peur · sœur'],
      ['er / ez (final)','e cerrada','parler · vous parlez'],
      ['ille','iy','famille · fille'],
      ['gn','ñ','montagne · gagner']
    ]},
    {t:'son', fr:'tu · tout', es:'La diferencia entre u y ou es EL sonido que delata a un hispanohablante. "tu" (tú) y "tout" (todo) no son lo mismo. Para la u francesa: pon la boca como para decir "u" española y, sin moverla, di "i".'},

    {t:'p', es:'Tercero: las vocales nasales. El aire sale por la nariz. Son tres y no existen en español.'},
    {t:'table', head:['Se escribe','Ejemplo','Pista'], rows:[
      ['an / am / en / em','grand · temps','como "an" pero sin cerrar la n'],
      ['on / om','bon · nom','como "on" nasal'],
      ['in / im / ain / ein / un','vin · pain · brun','como "an" pero con la boca sonriendo']
    ]},
    {t:'piege', es:'Un hispanohablante tiende a pronunciar la N. En francés la n NO se pronuncia como consonante: solo nasaliza la vocal anterior. "bon" no es "bon", es "bõ". Si oyes tu propia n, la estás diciendo mal.'},

    {t:'p', es:'Cuarto: la liaison. Cuando una palabra termina en consonante muda y la siguiente empieza con vocal, esa consonante muda revive y se pega.'},
    {t:'ex', fr:'vous avez', es:'ustedes tienen — se dice "vuzavé", la s revive como z'},
    {t:'ex', fr:'les amis', es:'los amigos — "lezamí"'},
    {t:'ex', fr:'un grand homme', es:'un gran hombre — "ün grãtom", la d suena como t'},
    {t:'p', es:'La liaison no es adorno: es obligatoria en muchos casos y su ausencia suena mal. Es también la razón por la que el francés hablado parece una sola palabra larga.'},

    {t:'regle', es:'Quinto: el acento. El francés siempre acentúa la ÚLTIMA sílaba del grupo. No hay palabras esdrújulas.', fr:'Paris · restaurant · impossible'},
    {t:'piege', es:'El español coloca el acento donde quiera y por eso usa tildes para avisar. En francés los acentos escritos (é, è, ê) NO indican fuerza: indican el sonido de la vocal. "é" suena cerrada, "è" suena abierta. La fuerza siempre va al final.'}
  ],
  exercices:[
    {type:'qcm', q:'¿Cómo se pronuncia la t final de "petit"?', opts:['No se pronuncia','Como t española','Como d'], r:0,
     expl:'Las consonantes finales son mudas. Solo c, r, f, l suelen sonar (truco: CAREFUL).'},
    {type:'qcm', q:'"ou" en francés suena como…', opts:['u española','o española','au'], r:0,
     expl:'"vous" se dice "vu". La u francesa sola es otro sonido distinto.'},
    {type:'qcm', q:'En "bon", la n…', opts:['nasaliza la vocal y no suena como consonante','suena igual que en español','no se escribe'], r:0,
     expl:'Las nasales francesas no llevan consonante n audible.'},
    {type:'qcm', q:'¿Dónde cae el acento en "restaurant"?', opts:['en la última sílaba','en la segunda','en la primera'], r:0,
     expl:'El francés acentúa siempre el final del grupo rítmico.'}
  ]
},

/* ------------------------------------------------------------------ 2 --- */
{
  id:'a1-02-genre', lvl:'A1', ordre:2, minutos:12,
  titre:'El género y los artículos',
  resume:'Todo sustantivo es masculino o femenino, y casi nunca coincide con el español. El artículo es lo que hay que memorizar, no la palabra.',
  theorie:[
    {t:'p', es:'En francés, como en español, cada sustantivo tiene género. El problema es que los géneros NO se corresponden entre los dos idiomas, y el francés casi no da pistas sonoras porque las terminaciones se comen.'},
    {t:'table', head:['Español','Francés','Ojo'], rows:[
      ['la leche (f)','le lait (m)','cambia'],
      ['el coche (m)','la voiture (f)','cambia'],
      ['la sangre (f)','le sang (m)','cambia'],
      ['el mar (m)','la mer (f)','cambia'],
      ['el árbol (m)','l’arbre (m)','coincide'],
      ['la mesa (f)','la table (f)','coincide']
    ]},
    {t:'regle', es:'Consejo que ahorra años: nunca aprendas un sustantivo solo. Apréndelo con su artículo, como si fueran una sola palabra.', fr:'no "table" sino "une table" · no "livre" sino "un livre"'},

    {t:'p', es:'Los artículos definidos — el, la, los, las:'},
    {t:'table', head:['','Singular','Plural'], rows:[
      ['Masculino','le','les'],
      ['Femenino','la','les'],
      ['Ante vocal o h muda','l’','les']
    ]},
    {t:'ex', fr:'le livre', es:'el libro'},
    {t:'ex', fr:'la maison', es:'la casa'},
    {t:'ex', fr:'l’ami', es:'el amigo — le + ami se contrae en l’'},
    {t:'ex', fr:'les enfants', es:'los niños — se dice "lezanfan", con liaison'},

    {t:'p', es:'Los artículos indefinidos — un, una, unos, unas:'},
    {t:'table', head:['','Singular','Plural'], rows:[
      ['Masculino','un','des'],
      ['Femenino','une','des']
    ]},
    {t:'ex', fr:'un homme', es:'un hombre'},
    {t:'ex', fr:'une femme', es:'una mujer'},
    {t:'ex', fr:'des amis', es:'unos amigos'},
    {t:'piege', es:'Aquí va la primera diferencia grande con el español: el plural indefinido "des" es OBLIGATORIO. En español decimos "compro libros" sin artículo. En francés eso no existe: "j’achète DES livres". Omitirlo es de los errores que más delatan a un hispanohablante.'},

    {t:'p', es:'Cómo formar el plural: se añade una -s que no se pronuncia. El plural en francés hablado se oye en el ARTÍCULO, no en el sustantivo.'},
    {t:'ex', fr:'le livre → les livres', es:'"lö livr" → "le livr" — la palabra suena igual, el artículo es el que cambia'},
    {t:'table', head:['Termina en','Plural','Ejemplo'], rows:[
      ['-s, -x, -z','no cambia','le fils → les fils'],
      ['-eau, -eu','+x','le bateau → les bateaux'],
      ['-al','-aux','le journal → les journaux'],
      ['-ail','-aux (algunos)','le travail → les travaux']
    ]},
    {t:'piege', es:'Como la -s del plural no suena, tu oído no te va a ayudar. Tienes que fijarte en el artículo: si oyes "le" es singular, si oyes "les" es plural. Y si viene liaison ("les_amis" = "lezamí"), ahí sí se oye la z.'}
  ],
  exercices:[
    {type:'trou', q:'___ voiture est rouge.', r:['la'], expl:'"voiture" es femenino en francés, aunque "coche" sea masculino en español.'},
    {type:'trou', q:'J’ai ___ frère et ___ sœur.', r:['un','une'], expl:'frère masculino, sœur femenino.'},
    {type:'trou', q:'___ enfants jouent dans le jardin.', r:['les'], expl:'Plural definido. Se pronuncia con liaison: "lezanfan".'},
    {type:'qcm', q:'"Compro libros" en francés es…', opts:['J’achète des livres','J’achète livres','J’achète les livres'], r:0,
     expl:'El plural indefinido "des" no se puede omitir, a diferencia del español.'},
    {type:'qcm', q:'El plural de "le journal" es…', opts:['les journaux','les journals','les journales'], r:0,
     expl:'Los sustantivos en -al hacen el plural en -aux.'}
  ]
},

/* ------------------------------------------------------------------ 3 --- */
{
  id:'a1-03-etre', lvl:'A1', ordre:3, minutos:12,
  titre:'Los pronombres sujeto y el verbo ÊTRE',
  resume:'El pronombre es obligatorio en francés. Y être resuelve ser y estar a la vez.',
  theorie:[
    {t:'p', es:'Primera diferencia estructural: en español puedes decir "hablo" sin decir "yo". En francés NO. El pronombre sujeto es obligatorio siempre, porque las terminaciones verbales se pronuncian casi todas igual y sin el pronombre no se sabría quién habla.'},
    {t:'regle', es:'Nunca omitas el pronombre sujeto.', fr:'Je parle. ✓ / Parle. ✗'},
    {t:'table', head:['Francés','Español','Nota'], rows:[
      ['je (j’)','yo','se vuelve j’ ante vocal: j’ai'],
      ['tu','tú','informal'],
      ['il / elle','él / ella','también "ello" para cosas'],
      ['on','uno / nosotros','ver abajo, es importantísimo'],
      ['nous','nosotros',''],
      ['vous','usted / ustedes / vosotros','doble uso: formal singular Y plural'],
      ['ils / elles','ellos / ellas','elles solo si TODAS son femeninas']
    ]},
    {t:'piege', es:'"vous" significa dos cosas: el "usted" formal a una persona, y el "ustedes" a varias. El contexto decide. Y ojo: tratar de "tu" a quien no debes es una torpeza social real en Francia. Con desconocidos, comercios, jefes y gente mayor: vous, siempre, hasta que te inviten a tutear.'},

    {t:'p', es:'Sobre "on": es el pronombre más usado del francés hablado y casi no se enseña. Significa "uno" en general, pero en la práctica los franceses lo usan para decir "nosotros" todo el tiempo. Se conjuga como "il".'},
    {t:'ex', fr:'On va au cinéma ?', es:'¿Vamos al cine? — literalmente "¿uno va al cine?", pero significa nosotros'},
    {t:'ex', fr:'En France, on mange à midi.', es:'En Francia se come a mediodía — aquí sí es impersonal'},
    {t:'regle', es:'En conversación real, "on" reemplaza a "nous" casi siempre. "Nous" suena formal o escrito.', fr:'On y va ! = ¡Vámonos!'},

    {t:'p', es:'El verbo ÊTRE. Es el verbo más irregular del idioma y hay que sabérselo de memoria hoy mismo.'},
    {t:'table', head:['','Presente','Español'], rows:[
      ['je','suis','soy / estoy'],
      ['tu','es','eres / estás'],
      ['il / elle / on','est','es / está'],
      ['nous','sommes','somos / estamos'],
      ['vous','êtes','sois / están'],
      ['ils / elles','sont','son / están']
    ]},
    {t:'ex', fr:'Je suis mexicain.', es:'Soy mexicano.'},
    {t:'ex', fr:'Elle est fatiguée.', es:'Ella está cansada.'},
    {t:'ex', fr:'Nous sommes en retard.', es:'Vamos tarde.'},
    {t:'ex', fr:'Vous êtes prêts ?', es:'¿Están listos?'},

    {t:'piege', es:'Buena noticia: el francés NO distingue ser de estar. Un solo verbo cubre los dos. "Je suis fatigué" = estoy cansado. "Je suis mexicain" = soy mexicano. Donde el español obliga a elegir, el francés te deja en paz. Esta es de las pocas cosas en las que el francés es más fácil.'},
    {t:'son', fr:'vous êtes', es:'Liaison obligatoria: se dice "vuzet". Sin ella suena a extranjero.'}
  ],
  exercices:[
    {type:'trou', q:'Je ___ étudiant.', r:['suis'], expl:'être, primera persona.'},
    {type:'trou', q:'Nous ___ contents.', r:['sommes'], expl:''},
    {type:'trou', q:'Vous ___ français ?', r:['êtes'], expl:'Con liaison: "vuzet".'},
    {type:'qcm', q:'"Estoy cansado" se traduce…', opts:['Je suis fatigué','J’estoy fatigué','Je stás fatigué'], r:0,
     expl:'Un solo verbo être cubre ser y estar.'},
    {type:'qcm', q:'En conversación diaria, "vamos al cine" se dice normalmente…', opts:['On va au cinéma','Nous allons au cinéma','Va au cinéma'], r:0,
     expl:'"On" reemplaza a "nous" en el habla real. La segunda es correcta pero suena formal.'}
  ]
},

/* ------------------------------------------------------------------ 4 --- */
{
  id:'a1-04-avoir', lvl:'A1', ordre:4, minutos:11,
  titre:'AVOIR y las expresiones que lo usan',
  resume:'Tener, haber… y un montón de estados que en español van con "estar" o "tener".',
  theorie:[
    {t:'table', head:['','Presente','Español'], rows:[
      ['j’','ai','tengo'],
      ['tu','as','tienes'],
      ['il / elle / on','a','tiene'],
      ['nous','avons','tenemos'],
      ['vous','avez','tienen'],
      ['ils / elles','ont','tienen']
    ]},
    {t:'son', fr:'nous avons · vous avez · ils ont', es:'Todas con liaison: "nuzavõ", "vuzavé", "ilzõ". La diferencia entre "ils sont" (son) e "ils ont" (tienen) está solo en esa liaison: "ilsõ" vs "ilzõ". Es una trampa clásica de comprensión oral.'},

    {t:'p', es:'AVOIR se usa para muchos estados físicos que el español expresa con "tener" — hasta ahí bien — pero también para algunos que el español pone con "estar".'},
    {t:'table', head:['Francés','Español literal','Español real'], rows:[
      ['avoir faim','tener hambre','tener hambre ✓'],
      ['avoir soif','tener sed','tener sed ✓'],
      ['avoir froid','tener frío','tener frío ✓'],
      ['avoir chaud','tener calor','tener calor ✓'],
      ['avoir peur','tener miedo','tener miedo ✓'],
      ['avoir raison','tener razón','tener razón ✓'],
      ['avoir tort','tener tuerto','estar equivocado'],
      ['avoir sommeil','tener sueño','tener sueño ✓'],
      ['avoir besoin de','tener necesidad de','necesitar'],
      ['avoir envie de','tener ganas de','tener ganas de ✓'],
      ['avoir mal à','tener mal a','dolerle a uno'],
      ['avoir … ans','tener … años','tener … años ✓']
    ]},
    {t:'ex', fr:'J’ai faim.', es:'Tengo hambre.'},
    {t:'ex', fr:'Elle a vingt-cinq ans.', es:'Ella tiene veinticinco años.'},
    {t:'ex', fr:'J’ai besoin de temps.', es:'Necesito tiempo.'},
    {t:'ex', fr:'J’ai envie de sortir.', es:'Tengo ganas de salir.'},
    {t:'ex', fr:'J’ai mal à la tête.', es:'Me duele la cabeza.'},
    {t:'piege', es:'"J’ai mal à la tête" se construye al revés que el español. Nosotros decimos "me duele la cabeza" (la cabeza es sujeto). El francés dice "tengo mal a la cabeza" (yo soy sujeto). Mismo patrón para todo el cuerpo: j’ai mal au dos, j’ai mal aux dents.'},

    {t:'p', es:'IL Y A — hay. Es invariable: sirve para singular y plural, y no cambia nunca.'},
    {t:'ex', fr:'Il y a un problème.', es:'Hay un problema.'},
    {t:'ex', fr:'Il y a trois personnes.', es:'Hay tres personas.'},
    {t:'ex', fr:'Il n’y a pas de place.', es:'No hay lugar.'},
    {t:'piege', es:'Fíjate en el negativo: "il n’y a pas DE place", no "pas UNE place". Tras una negación, los artículos indefinidos y partitivos se convierten todos en "de". Esta regla la veremos completa más adelante, pero empieza a acostumbrar el oído.'}
  ],
  exercices:[
    {type:'trou', q:'J’___ vingt ans.', r:['ai'], expl:'La edad va con avoir, igual que en español.'},
    {type:'trou', q:'Nous ___ faim.', r:['avons'], expl:''},
    {type:'qcm', q:'"Me duele la espalda" es…', opts:['J’ai mal au dos','Le dos me fait mal','Je duele le dos'], r:0,
     expl:'El francés construye con avoir: yo tengo mal a la espalda.'},
    {type:'qcm', q:'"Necesito ayuda" es…', opts:['J’ai besoin d’aide','Je nécessite aide','J’ai nécessité d’aide'], r:0,
     expl:'"avoir besoin de" es la forma normal de decir necesitar.'},
    {type:'qcm', q:'¿Qué distingue "ils sont" de "ils ont" al oído?', opts:['La liaison: "ilsõ" vs "ilzõ"','La entonación','Nada, son iguales'], r:0,
     expl:'La s de liaison suena como z en "ils ont". Es la única diferencia audible.'}
  ]
},

/* ------------------------------------------------------------------ 5 --- */
{
  id:'a1-05-present-er', lvl:'A1', ordre:5, minutos:13,
  titre:'El presente de los verbos en -ER',
  resume:'El 90% de los verbos franceses. Cuatro de las seis formas suenan idénticas.',
  theorie:[
    {t:'p', es:'Los verbos terminados en -er son el primer grupo y representan cerca del 90% de todos los verbos franceses. Además, todos los verbos nuevos que entran al idioma se hacen en -er: googliser, télétravailler. Dominar este grupo es dominar casi todo.'},
    {t:'regle', es:'Quita el -er del infinitivo y añade las terminaciones.', fr:'parler → parl- → je parle'},
    {t:'table', head:['Persona','Terminación','parler','Se pronuncia'], rows:[
      ['je','-e','parle','parl'],
      ['tu','-es','parles','parl'],
      ['il / elle / on','-e','parle','parl'],
      ['nous','-ons','parlons','parlõ'],
      ['vous','-ez','parlez','parlé'],
      ['ils / elles','-ent','parlent','parl']
    ]},
    {t:'regle', es:'Dato que cambia todo: je / tu / il / ils suenan EXACTAMENTE IGUAL. Cuatro de seis formas son homófonas. La terminación -ent es completamente muda.', fr:'je parle = tu parles = il parle = ils parlent (al oído)'},
    {t:'piege', es:'Por eso el pronombre es obligatorio, y por eso al escribir francés se cometen tantas faltas: los propios franceses confunden -e, -es y -ent porque no los oyen. Cuando escuches, agárrate del pronombre. Cuando escribas, piensa la persona.'},

    {t:'p', es:'Ahora los ajustes ortográficos. No son irregularidades: son cambios para que el sonido no se rompa.'},
    {t:'table', head:['Familia','Qué pasa','Ejemplo'], rows:[
      ['-ger','se mete una e ante a/o','manger → nous mangeons'],
      ['-cer','la c se vuelve ç ante a/o','commencer → nous commençons'],
      ['-yer','la y se vuelve i ante e muda','payer → je paie'],
      ['e+cons+er','la e se vuelve è','lever → je lève'],
      ['é+cons+er','la é se vuelve è','préférer → je préfère'],
      ['-eler / -eter','doblan la consonante','appeler → j’appelle']
    ]},
    {t:'ex', fr:'Nous mangeons à midi.', es:'Comemos a mediodía — sin esa e, "mangons" sonaría con g dura'},
    {t:'ex', fr:'Nous commençons demain.', es:'Empezamos mañana — sin la ç, "commencons" sonaría con k'},
    {t:'ex', fr:'J’achète du pain.', es:'Compro pan.'},
    {t:'ex', fr:'Je préfère le café.', es:'Prefiero el café.'},
    {t:'piege', es:'Cuidado con -eler y -eter: la mayoría dobla la consonante (appeler → j’appelle, jeter → je jette), pero un grupo cerrado toma acento grave (acheter → j’achète, geler → il gèle). No hay regla: se memorizan los pocos de acento y el resto dobla.'},

    {t:'p', es:'Un detalle que los hispanohablantes agradecen: el presente francés cubre tres cosas del español.'},
    {t:'table', head:['Francés','Español'], rows:[
      ['Je parle','Hablo'],
      ['Je parle','Estoy hablando'],
      ['Je parle','Hablaré (futuro cercano informal)']
    ]},
    {t:'piege', es:'El francés NO tiene un equivalente directo de "estoy hablando". Existe "être en train de + infinitivo", pero se usa mucho menos que el gerundio español. Lo normal es usar el presente simple. Si dices "je suis parlant" estás inventando algo que no existe.'}
  ],
  exercices:[
    {type:'trou', q:'Tu ___ (travailler) beaucoup.', r:['travailles'], expl:'Segunda persona: -es, muda.'},
    {type:'trou', q:'Nous ___ (manger) au restaurant.', r:['mangeons'], expl:'La e se mete ante la o para conservar el sonido suave de la g.'},
    {type:'trou', q:'Nous ___ (commencer) à huit heures.', r:['commençons'], expl:'La cedilla mantiene el sonido de s ante la o.'},
    {type:'trou', q:'Elle ___ (acheter) une voiture.', r:['achète'], expl:'acheter toma acento grave, no dobla la t.'},
    {type:'trou', q:'Ils ___ (parler) français.', r:['parlent'], expl:'La terminación -ent es totalmente muda: suena igual que "il parle".'},
    {type:'qcm', q:'"Estoy comiendo" se dice normalmente…', opts:['Je mange','Je suis mangeant','Je suis en mangeant'], r:0,
     expl:'El presente simple cubre el gerundio español. "Je suis mangeant" no existe.'}
  ]
},

/* ------------------------------------------------------------------ 6 --- */
{
  id:'a1-06-negation', lvl:'A1', ordre:6, minutos:10,
  titre:'La negación: ne… pas',
  resume:'La negación francesa tiene dos piezas y abraza al verbo. Y en el habla real, una de las dos se cae.',
  theorie:[
    {t:'regle', es:'La negación francesa es un sándwich: NE va antes del verbo, PAS va después.', fr:'Je ne parle pas.'},
    {t:'ex', fr:'Je ne parle pas anglais.', es:'No hablo inglés.'},
    {t:'ex', fr:'Il n’est pas là.', es:'No está aquí — ne se vuelve n’ ante vocal'},
    {t:'ex', fr:'Nous ne comprenons pas.', es:'No entendemos.'},

    {t:'p', es:'Con tiempos compuestos, el sándwich abraza solo al auxiliar, no al participio.'},
    {t:'ex', fr:'Je n’ai pas mangé.', es:'No he comido.'},
    {t:'ex', fr:'Elle n’est pas venue.', es:'Ella no ha venido.'},
    {t:'p', es:'Con un infinitivo, las dos piezas van juntas delante:'},
    {t:'ex', fr:'Je préfère ne pas sortir.', es:'Prefiero no salir.'},

    {t:'p', es:'La familia completa. PAS se puede sustituir por otras palabras y cambia el significado:'},
    {t:'table', head:['Estructura','Significado','Ejemplo'], rows:[
      ['ne… pas','no','Je ne fume pas.'],
      ['ne… jamais','nunca','Je ne fume jamais.'],
      ['ne… plus','ya no','Je ne fume plus.'],
      ['ne… rien','nada','Je ne vois rien.'],
      ['ne… personne','nadie','Je ne vois personne.'],
      ['ne… aucun(e)','ningún','Je n’ai aucune idée.'],
      ['ne… ni… ni','ni… ni','Je ne bois ni vin ni bière.'],
      ['ne… que','solo (no es negación real)','Je n’ai que dix euros.']
    ]},
    {t:'ex', fr:'Je ne fume plus.', es:'Ya no fumo.'},
    {t:'ex', fr:'Je n’ai que dix euros.', es:'Solo tengo diez euros — "ne… que" no niega, restringe'},

    {t:'regle', es:'Regla del artículo: tras una negación, un / une / des / du / de la se convierten TODOS en "de".', fr:'J’ai un chien → Je n’ai pas de chien.'},
    {t:'ex', fr:'Je n’ai pas de voiture.', es:'No tengo coche — no "pas une voiture"'},
    {t:'ex', fr:'Il n’y a pas de pain.', es:'No hay pan.'},
    {t:'piege', es:'Excepción importante: con el verbo être, el artículo NO cambia. "Ce n’est pas un problème" — no "pas de problème"… aunque "pas de problème" también existe como expresión hecha que significa "no hay problema". Confuso, pero con être el artículo se queda.'},

    {t:'p', es:'Y ahora lo que casi ninguna clase te dice: en el francés hablado, el NE desaparece.'},
    {t:'table', head:['Se escribe','Se dice','Español'], rows:[
      ['Je ne sais pas.','J’sais pas / Chais pas','No sé.'],
      ['Il n’y a pas de problème.','Y a pas d’problème','No hay problema.'],
      ['Je ne veux pas.','J’veux pas','No quiero.'],
      ['Ce n’est pas grave.','C’est pas grave','No pasa nada.']
    ]},
    {t:'regle', es:'Escribiendo: siempre ne… pas. Hablando con amigos: el ne se cae. Entender esto es la diferencia entre entender películas y no entender nada.', fr:'"Chais pas" es lo que de verdad vas a oír.'}
  ],
  exercices:[
    {type:'trou', q:'Je ___ comprends ___.', r:['ne','pas'], expl:'El sándwich básico alrededor del verbo.'},
    {type:'trou', q:'Il n’a ___ de voiture.', r:['pas'], expl:'Y fíjate: "de voiture", no "une voiture".'},
    {type:'qcm', q:'"Ya no trabajo aquí" es…', opts:['Je ne travaille plus ici','Je ne travaille pas ici','Je ne travaille jamais ici'], r:0,
     expl:'"plus" marca que algo se acabó. "pas" solo niega, "jamais" es nunca.'},
    {type:'qcm', q:'"No tengo dinero" es…', opts:['Je n’ai pas d’argent','Je n’ai pas de l’argent','Je n’ai pas l’argent'], r:0,
     expl:'Tras negación, el partitivo "de l’" se reduce a "d’".'},
    {type:'qcm', q:'En conversación, "je ne sais pas" suena como…', opts:['Chais pas','Je ne sais pas, completo','Sais pas je'], r:0,
     expl:'El ne se cae en el habla informal y el resto se contrae.'}
  ]
},

/* ------------------------------------------------------------------ 7 --- */
{
  id:'a1-07-questions', lvl:'A1', ordre:7, minutos:12,
  titre:'Preguntar: las tres formas',
  resume:'El francés tiene tres maneras de hacer la misma pregunta, y cada una pertenece a un registro distinto.',
  theorie:[
    {t:'p', es:'Esto es de lo más útil y peor explicado del francés. Para la misma pregunta hay tres construcciones. No son equivalentes: marcan quién eres y con quién hablas.'},

    {t:'regle', es:'FORMA 1 — Entonación. Solo subes la voz al final. Registro familiar.', fr:'Tu viens ?'},
    {t:'ex', fr:'Tu viens ?', es:'¿Vienes? — la más común entre amigos'},
    {t:'ex', fr:'Vous parlez espagnol ?', es:'¿Habla español? — perfectamente aceptable'},

    {t:'regle', es:'FORMA 2 — Est-ce que al principio. Registro neutro, sirve siempre.', fr:'Est-ce que tu viens ?'},
    {t:'ex', fr:'Est-ce que tu viens ?', es:'¿Vienes? — neutro, nunca queda mal'},
    {t:'ex', fr:'Est-ce qu’il est là ?', es:'¿Está él? — que se vuelve qu’ ante vocal'},
    {t:'p', es:'"Est-ce que" no significa nada por sí solo: es una marca de pregunta. Piénsalo como un signo de interrogación hablado que va al principio. Si dudas de qué forma usar, usa esta.'},

    {t:'regle', es:'FORMA 3 — Inversión. Verbo antes que sujeto, con guion. Registro formal o escrito.', fr:'Viens-tu ?'},
    {t:'ex', fr:'Parlez-vous français ?', es:'¿Habla usted francés? — formal'},
    {t:'ex', fr:'Où habitez-vous ?', es:'¿Dónde vive usted?'},
    {t:'piege', es:'Cuando el verbo termina en vocal y el sujeto es il/elle/on, se mete una -t- de apoyo para que se pueda pronunciar: "A-t-il compris ?", "Va-t-elle venir ?". Esa t no significa nada, solo evita el choque de vocales.'},
    {t:'ex', fr:'A-t-il compris ?', es:'¿Ha entendido él?'},

    {t:'p', es:'Las palabras interrogativas, y dónde se colocan:'},
    {t:'table', head:['Palabra','Español','Ejemplo neutro'], rows:[
      ['qui','quién','Qui est-ce que tu appelles ?'],
      ['que / quoi','qué','Qu’est-ce que tu fais ?'],
      ['où','dónde','Où est-ce que tu vas ?'],
      ['quand','cuándo','Quand est-ce qu’il arrive ?'],
      ['comment','cómo','Comment est-ce que ça marche ?'],
      ['pourquoi','por qué','Pourquoi est-ce que tu pars ?'],
      ['combien','cuánto','Combien est-ce que ça coûte ?'],
      ['quel / quelle','qué / cuál','Quelle heure est-il ?']
    ]},
    {t:'ex', fr:'Qu’est-ce que tu fais ?', es:'¿Qué haces? — la pregunta más frecuente del idioma'},
    {t:'ex', fr:'Combien ça coûte ?', es:'¿Cuánto cuesta? — versión hablada, sin est-ce que'},

    {t:'piege', es:'"Qu’est-ce que" parece monstruoso pero es solo que (qué) + est-ce que (marca de pregunta). Los franceses lo pronuncian "kesk". "Qu’est-ce que c’est ?" = "keskösé" = ¿Qué es esto? Apréndetela como bloque, es de las frases más útiles que existen.'},

    {t:'p', es:'Resumen de cuándo usar cuál:'},
    {t:'table', head:['Situación','Forma'], rows:[
      ['Con amigos, familia','Entonación: "Tu viens ?"'],
      ['Casi cualquier situación','Est-ce que'],
      ['Escrito, formal, entrevista','Inversión'],
      ['Si dudas','Est-ce que']
    ]}
  ],
  exercices:[
    {type:'qcm', q:'¿Cuál es la forma más segura si no sabes qué registro usar?', opts:['Est-ce que tu viens ?','Viens-tu ?','Tu viens ?'], r:0,
     expl:'Est-ce que es neutro y nunca queda mal.'},
    {type:'trou', q:'___ tu fais ce soir ?', r:['Qu’est-ce que','Qu\'est-ce que','quest-ce que'], expl:'"¿Qué haces esta noche?" Se pronuncia "kesk".'},
    {type:'qcm', q:'"A-t-il compris ?" — ¿por qué esa t?', opts:['Para separar dos vocales al pronunciar','Es parte del verbo','Marca el pasado'], r:0,
     expl:'Es una t de apoyo, sin significado. Sin ella "a-il" sería impronunciable.'},
    {type:'qcm', q:'"¿Cuánto cuesta?" en registro hablado es…', opts:['Combien ça coûte ?','Combien est-ce que coûte ça ?','Coûte combien ?'], r:0,
     expl:'En el habla se suele omitir "est-ce que" con las palabras interrogativas.'}
  ]
},

/* ------------------------------------------------------------------ 8 --- */
{
  id:'a1-08-adjectifs', lvl:'A1', ordre:8, minutos:13,
  titre:'Los adjetivos: género, número y posición',
  resume:'Concuerdan como en español, pero van DETRÁS del sustantivo… salvo unos cuantos que van delante y hay que saberse.',
  theorie:[
    {t:'p', es:'El adjetivo francés concuerda en género y número con el sustantivo, igual que el español. La diferencia está en la posición y en cómo se forma el femenino.'},

    {t:'regle', es:'Femenino: en general se añade -e. Y esa -e hace que suene la consonante anterior.', fr:'petit → petite ("pöti" → "pötit")'},
    {t:'table', head:['Masculino','Femenino','Cambio'], rows:[
      ['grand','grande','+e, y ahora suena la d'],
      ['petit','petite','+e, y ahora suena la t'],
      ['joli','jolie','+e, no cambia el sonido'],
      ['heureux','heureuse','-x → -se'],
      ['sportif','sportive','-f → -ve'],
      ['premier','première','-er → -ère'],
      ['bon','bonne','dobla la n'],
      ['gros','grosse','dobla la s'],
      ['blanc','blanche','irregular'],
      ['beau','belle','irregular'],
      ['nouveau','nouvelle','irregular'],
      ['vieux','vieille','irregular']
    ]},
    {t:'son', fr:'grand · grande', es:'Aquí está la utilidad práctica del femenino: en masculino la consonante final calla, en femenino suena. "grand" = "grã", "grande" = "grãd". Al oír a alguien, esa consonante te dice el género.'},

    {t:'regle', es:'POSICIÓN: por defecto, el adjetivo va DESPUÉS del sustantivo. Al revés que el inglés, igual que el español.', fr:'une voiture rouge · un livre intéressant'},
    {t:'ex', fr:'une maison blanche', es:'una casa blanca'},
    {t:'ex', fr:'un film intéressant', es:'una película interesante'},

    {t:'p', es:'Pero hay un grupo cerrado que va DELANTE. Se memorizan con el truco BAGS + algunos más:'},
    {t:'table', head:['Categoría','Adjetivos','Ejemplo'], rows:[
      ['Beauty (belleza)','beau, joli','un beau jardin'],
      ['Age (edad)','jeune, vieux, nouveau','une vieille maison'],
      ['Goodness (bondad)','bon, mauvais, meilleur','un bon restaurant'],
      ['Size (tamaño)','grand, petit, gros, long','une grande ville'],
      ['Otros','autre, même, premier, dernier','le premier jour']
    ]},
    {t:'ex', fr:'un bon vin', es:'un buen vino'},
    {t:'ex', fr:'une jeune femme', es:'una mujer joven'},
    {t:'ex', fr:'la dernière fois', es:'la última vez'},

    {t:'piege', es:'Algunos adjetivos CAMBIAN DE SIGNIFICADO según vayan delante o detrás. Esto no es un detalle: es una fuente constante de malentendidos.'},
    {t:'table', head:['Delante','Significa','Detrás','Significa'], rows:[
      ['un ancien professeur','un ex profesor','un professeur ancien','un profesor viejo'],
      ['un grand homme','un gran hombre','un homme grand','un hombre alto'],
      ['un pauvre homme','un pobre hombre (da lástima)','un homme pauvre','un hombre sin dinero'],
      ['ma propre chambre','mi propia habitación','ma chambre propre','mi habitación limpia'],
      ['le dernier mois','el último mes (de una serie)','le mois dernier','el mes pasado']
    ]},

    {t:'p', es:'Detalle final: cuando un adjetivo de los que van delante precede a un plural, "des" se convierte en "de" en registro cuidado.'},
    {t:'ex', fr:'de beaux jardins', es:'unos jardines bonitos — en lugar de "des beaux jardins"'},
    {t:'p', es:'En el habla cotidiana mucha gente dice "des beaux jardins" igual. Pero en escrito formal se espera "de".'}
  ],
  exercices:[
    {type:'trou', q:'une voiture ___ (blanc)', r:['blanche'], expl:'Femenino irregular de blanc.'},
    {type:'trou', q:'des ___ (beau) maisons', r:['belles'], expl:'beau → belle en femenino, + s en plural.'},
    {type:'qcm', q:'"un homme grand" significa…', opts:['un hombre alto','un gran hombre','un hombre viejo'], r:0,
     expl:'Detrás = tamaño físico. Delante ("un grand homme") = grandeza moral.'},
    {type:'qcm', q:'¿Dónde va "bon"?', opts:['Delante del sustantivo','Detrás del sustantivo','Da igual'], r:0,
     expl:'Pertenece al grupo BAGS: un bon restaurant.'},
    {type:'qcm', q:'"ma propre chambre" significa…', opts:['mi propia habitación','mi habitación limpia','mi habitación privada'], r:0,
     expl:'Delante = propia. Detrás ("ma chambre propre") = limpia.'}
  ]
},

/* ------------------------------------------------------------------ 9 --- */
{
  id:'a1-09-possessifs', lvl:'A1', ordre:9, minutos:10,
  titre:'Los posesivos',
  resume:'Concuerdan con lo POSEÍDO, no con el poseedor. Y "son" no significa "su de él" necesariamente.',
  theorie:[
    {t:'table', head:['Poseedor','Masc. sing.','Fem. sing.','Plural'], rows:[
      ['je','mon','ma','mes'],
      ['tu','ton','ta','tes'],
      ['il / elle','son','sa','ses'],
      ['nous','notre','notre','nos'],
      ['vous','votre','votre','vos'],
      ['ils / elles','leur','leur','leurs']
    ]},
    {t:'ex', fr:'mon frère', es:'mi hermano'},
    {t:'ex', fr:'ma sœur', es:'mi hermana'},
    {t:'ex', fr:'mes parents', es:'mis padres'},

    {t:'regle', es:'Regla que hay que entender bien: el posesivo concuerda con el OBJETO POSEÍDO, no con quien posee.', fr:'son livre = su libro (de él o de ella) · sa voiture = su coche (de él o de ella)'},
    {t:'piege', es:'"son" no quiere decir "de él" ni "sa" quiere decir "de ella". "son livre" puede ser el libro de Pierre o el libro de Marie: lo que manda es que "livre" es masculino. Si un hispanohablante quiere marcar de quién es, añade: "son livre à elle". Pero normalmente el contexto basta.'},

    {t:'regle', es:'Excepción de sonido: ante palabra femenina que empieza con vocal, se usa MON / TON / SON, no ma/ta/sa.', fr:'mon amie (no "ma amie") · son école (no "sa école")'},
    {t:'ex', fr:'mon amie', es:'mi amiga — femenino, pero mon por eufonía'},
    {t:'ex', fr:'ton histoire', es:'tu historia'},
    {t:'p', es:'La razón es puramente fonética: "ma amie" obliga a chocar dos vocales y el francés lo evita a toda costa. Es el mismo instinto de l’ en vez de le/la.'},

    {t:'p', es:'Con partes del cuerpo, el francés prefiere el artículo definido, no el posesivo:'},
    {t:'ex', fr:'Je me lave les mains.', es:'Me lavo las manos — no "mes mains"'},
    {t:'ex', fr:'Il a mal à la tête.', es:'Le duele la cabeza.'},
    {t:'piege', es:'Decir "je lave mes mains" no es incorrecto gramaticalmente pero suena raro, como si te lavaras unas manos que no son las tuyas. Con el cuerpo, usa el pronombre reflexivo + artículo definido.'}
  ],
  exercices:[
    {type:'trou', q:'C’est ___ voiture. (de mí)', r:['ma'], expl:'voiture es femenino singular.'},
    {type:'trou', q:'___ amie s’appelle Claire. (de mí)', r:['Mon','mon'], expl:'amie es femenino, pero empieza con vocal: mon.'},
    {type:'qcm', q:'"son livre" significa…', opts:['su libro, de él o de ella','solo su libro de él','solo su libro de ella'], r:0,
     expl:'Concuerda con "livre" (masculino), no con el poseedor.'},
    {type:'qcm', q:'"Me lavo las manos" es…', opts:['Je me lave les mains','Je lave mes mains','Je me lave mes mains'], r:0,
     expl:'Con partes del cuerpo: reflexivo + artículo definido.'}
  ]
},

/* ----------------------------------------------------------------- 10 --- */
{
  id:'a1-10-nombres', lvl:'A1', ordre:10, minutos:12,
  titre:'Números, hora y fecha',
  resume:'Los números franceses del 70 al 99 son una broma matemática. Hay que verlos una vez y ya.',
  theorie:[
    {t:'table', head:['','','',''], rows:[
      ['1 un','2 deux','3 trois','4 quatre'],
      ['5 cinq','6 six','7 sept','8 huit'],
      ['9 neuf','10 dix','11 onze','12 douze'],
      ['13 treize','14 quatorze','15 quinze','16 seize'],
      ['17 dix-sept','18 dix-huit','19 dix-neuf','20 vingt']
    ]},
    {t:'p', es:'Del 17 al 19 ya se ve la lógica: diez + siete. Del 21 al 69 todo es normal:'},
    {t:'table', head:['Número','Francés'], rows:[
      ['21','vingt et un'],
      ['22','vingt-deux'],
      ['30','trente'],
      ['40','quarante'],
      ['50','cinquante'],
      ['60','soixante']
    ]},
    {t:'regle', es:'Y aquí el francés se vuelve loco. No hay palabras para 70, 80 ni 90: se calculan.', fr:'70 = 60+10 · 80 = 4×20 · 90 = 4×20+10'},
    {t:'table', head:['Número','Francés','Literal'], rows:[
      ['70','soixante-dix','sesenta-diez'],
      ['71','soixante et onze','sesenta y once'],
      ['75','soixante-quinze','sesenta-quince'],
      ['80','quatre-vingts','cuatro-veintes'],
      ['81','quatre-vingt-un','cuatro-veinte-uno'],
      ['90','quatre-vingt-dix','cuatro-veinte-diez'],
      ['95','quatre-vingt-quinze','cuatro-veinte-quince'],
      ['99','quatre-vingt-dix-neuf','cuatro-veinte-diez-nueve']
    ]},
    {t:'piege', es:'Esto no lo puedes calcular en tiempo real mientras alguien te dice un número de teléfono. Hay que automatizarlo. Truco: cuando oigas "soixante", espera — puede ser 60 o el arranque de 70. Cuando oigas "quatre-vingt", espera — puede ser 80 o el arranque de 90.'},
    {t:'p', es:'Dato cultural: en Bélgica y Suiza sí existen septante (70) y nonante (90), y en Suiza huitante (80). Son más lógicos, pero en Francia no se usan.'},

    {t:'p', es:'LA HORA. Se pregunta y se dice así:'},
    {t:'ex', fr:'Quelle heure est-il ?', es:'¿Qué hora es?'},
    {t:'ex', fr:'Il est trois heures.', es:'Son las tres.'},
    {t:'ex', fr:'Il est trois heures et quart.', es:'Son las tres y cuarto.'},
    {t:'ex', fr:'Il est trois heures et demie.', es:'Son las tres y media.'},
    {t:'ex', fr:'Il est quatre heures moins le quart.', es:'Son las cuatro menos cuarto.'},
    {t:'piege', es:'Fíjate: "il EST trois heures", en singular, aunque sean las tres. El español dice "SON las tres". El francés siempre usa "il est".'},
    {t:'p', es:'En contextos oficiales (trenes, citas, TV) se usa el reloj de 24 horas: "quinze heures trente" = 15:30.'},

    {t:'p', es:'LA FECHA. Días y meses van en minúscula, siempre.'},
    {t:'table', head:['Días','Meses'], rows:[
      ['lundi, mardi, mercredi','janvier, février, mars'],
      ['jeudi, vendredi','avril, mai, juin'],
      ['samedi, dimanche','juillet, août, septembre'],
      ['','octobre, novembre, décembre']
    ]},
    {t:'ex', fr:'Nous sommes le 12 mars.', es:'Estamos a 12 de marzo.'},
    {t:'ex', fr:'le premier janvier', es:'el primero de enero — solo el día 1 usa ordinal'},
    {t:'piege', es:'Salvo el día 1 ("le premier"), todos los días usan número normal: le 2, le 3, le 21. Y a diferencia del inglés, los meses y días NUNCA van en mayúscula.'}
  ],
  exercices:[
    {type:'qcm', q:'¿Cómo se dice 80?', opts:['quatre-vingts','octante','huitante'], r:0,
     expl:'Literalmente cuatro-veintes. Huitante existe en Suiza, no en Francia.'},
    {type:'qcm', q:'¿Cómo se dice 95?', opts:['quatre-vingt-quinze','nonante-cinq','quatre-vingt-cinq'], r:0,
     expl:'4×20 + 15. La última opción es 85.'},
    {type:'trou', q:'Il ___ trois heures.', r:['est'], expl:'Siempre en singular, a diferencia del español.'},
    {type:'qcm', q:'"el 1 de mayo" es…', opts:['le premier mai','le un mai','le Premier Mai'], r:0,
     expl:'Solo el día 1 usa ordinal, y el mes va en minúscula.'}
  ]
},

/* ----------------------------------------------------------------- 11 --- */
{
  id:'a1-11-passe-compose-avoir', lvl:'A1', ordre:11, minutos:14,
  titre:'El passé composé (I): con AVOIR',
  resume:'El pasado que de verdad se usa al hablar. Auxiliar + participio, como el "he hecho" español, pero cubre también el "hice".',
  theorie:[
    {t:'p', es:'El passé composé es EL pasado del francés hablado. Cubre dos cosas que el español separa: "he comido" y "comí". En francés las dos son "j’ai mangé".'},
    {t:'regle', es:'Fórmula: AVOIR en presente + PARTICIPIO PASADO.', fr:'j’ai + mangé = j’ai mangé'},
    {t:'table', head:['','avoir','participio',''], rows:[
      ['j’','ai','mangé','he comido / comí'],
      ['tu','as','mangé',''],
      ['il / elle / on','a','mangé',''],
      ['nous','avons','mangé',''],
      ['vous','avez','mangé',''],
      ['ils / elles','ont','mangé','']
    ]},

    {t:'p', es:'Cómo se forma el participio pasado:'},
    {t:'table', head:['Grupo','Regla','Ejemplo'], rows:[
      ['-er','-é','parler → parlé'],
      ['-ir (grupo 2)','-i','finir → fini'],
      ['-re','-u','vendre → vendu'],
      ['irregulares','se memorizan','ver abajo']
    ]},
    {t:'p', es:'Los participios irregulares que sí o sí hay que saberse:'},
    {t:'table', head:['Infinitivo','Participio','','Infinitivo','Participio'], rows:[
      ['être','été','','faire','fait'],
      ['avoir','eu','','dire','dit'],
      ['voir','vu','','prendre','pris'],
      ['pouvoir','pu','','mettre','mis'],
      ['vouloir','voulu','','écrire','écrit'],
      ['devoir','dû','','lire','lu'],
      ['savoir','su','','boire','bu'],
      ['venir','venu','','ouvrir','ouvert'],
      ['tenir','tenu','','offrir','offert'],
      ['connaître','connu','','vivre','vécu']
    ]},
    {t:'ex', fr:'J’ai mangé au restaurant.', es:'Comí en el restaurante.'},
    {t:'ex', fr:'Tu as fini ton travail ?', es:'¿Terminaste tu trabajo?'},
    {t:'ex', fr:'Elle a pris le train.', es:'Ella tomó el tren.'},
    {t:'ex', fr:'Nous avons vu ce film.', es:'Vimos esa película.'},

    {t:'p', es:'En negativo, el ne… pas abraza al auxiliar:'},
    {t:'ex', fr:'Je n’ai pas compris.', es:'No entendí.'},
    {t:'ex', fr:'Il n’a jamais travaillé ici.', es:'Él nunca ha trabajado aquí.'},

    {t:'p', es:'En pregunta con inversión, se invierte el auxiliar:'},
    {t:'ex', fr:'As-tu mangé ?', es:'¿Comiste?'},
    {t:'ex', fr:'Est-ce que tu as mangé ?', es:'¿Comiste? — versión neutra'},

    {t:'piege', es:'Trampa grande para hispanohablantes: en español distinguimos "comí" (pretérito) de "he comido" (perfecto), y esa diferencia importa. En francés hablado esa distinción NO EXISTE: "j’ai mangé" cubre las dos. El pasado simple francés (je mangeai) existe pero solo se escribe en literatura. Así que deja de buscar el equivalente de "comí": ya lo tienes.'},
    {t:'piege', es:'Segunda trampa: con avoir, el participio NO concuerda con el sujeto. "Elle a mangé", no "elle a mangée". La concordancia con avoir solo aparece en un caso muy concreto que veremos más adelante (cuando el complemento directo va delante). Por ahora: con avoir, participio invariable.'}
  ],
  exercices:[
    {type:'trou', q:'J’___ (avoir) fini mon travail.', r:['ai'], expl:''},
    {type:'trou', q:'Elle a ___ (prendre) le bus.', r:['pris'], expl:'Participio irregular de prendre.'},
    {type:'trou', q:'Nous avons ___ (voir) ce film.', r:['vu'], expl:'Participio irregular de voir.'},
    {type:'trou', q:'Tu as ___ (faire) tes devoirs ?', r:['fait'], expl:''},
    {type:'qcm', q:'"Comí a las dos" se traduce…', opts:['J’ai mangé à deux heures','Je mangeai à deux heures','Je mangeais à deux heures'], r:0,
     expl:'El passé composé cubre el pretérito español. La segunda es passé simple (solo literario) y la tercera es imperfecto.'},
    {type:'qcm', q:'¿Cuál es correcta?', opts:['Elle a mangé','Elle a mangée','Elle est mangé'], r:0,
     expl:'Con avoir el participio no concuerda con el sujeto.'}
  ]
},

/* ----------------------------------------------------------------- 12 --- */
{
  id:'a1-12-passe-compose-etre', lvl:'A1', ordre:12, minutos:14,
  titre:'El passé composé (II): con ÊTRE y la concordancia',
  resume:'Una lista cerrada de verbos usa être en vez de avoir. Y con être, el participio SÍ concuerda.',
  theorie:[
    {t:'p', es:'La mayoría de los verbos forman el passé composé con avoir. Pero hay un grupo pequeño y muy frecuente que usa ÊTRE. No es opcional ni estilístico: es obligatorio.'},
    {t:'regle', es:'Con être, el participio concuerda con el SUJETO en género y número, como si fuera un adjetivo.', fr:'il est allé · elle est allée · ils sont allés · elles sont allées'},

    {t:'p', es:'Los verbos de ÊTRE. Casi todos son de movimiento o cambio de estado. Se memorizan por pares de opuestos:'},
    {t:'table', head:['Verbo','Español','Opuesto','Español'], rows:[
      ['aller','ir','venir','venir'],
      ['arriver','llegar','partir','irse'],
      ['entrer','entrar','sortir','salir'],
      ['monter','subir','descendre','bajar'],
      ['naître','nacer','mourir','morir'],
      ['rester','quedarse','tomber','caer'],
      ['passer','pasar','retourner','regresar'],
      ['rentrer','volver a casa','devenir','volverse']
    ]},
    {t:'ex', fr:'Je suis allé au marché.', es:'Fui al mercado. — hombre hablando'},
    {t:'ex', fr:'Je suis allée au marché.', es:'Fui al mercado. — mujer hablando, con e final'},
    {t:'ex', fr:'Nous sommes arrivés hier.', es:'Llegamos ayer.'},
    {t:'ex', fr:'Elles sont parties tôt.', es:'Ellas se fueron temprano.'},

    {t:'regle', es:'Todos los verbos PRONOMINALES también usan être, sin excepción.', fr:'je me suis levé · elle s’est couchée'},
    {t:'ex', fr:'Je me suis levé à six heures.', es:'Me levanté a las seis.'},
    {t:'ex', fr:'Elle s’est réveillée tard.', es:'Ella se despertó tarde.'},

    {t:'p', es:'La tabla de concordancia, que hay que tener grabada:'},
    {t:'table', head:['Sujeto','Participio','Ejemplo'], rows:[
      ['masculino singular','sin cambio','il est allé'],
      ['femenino singular','+e','elle est allée'],
      ['masculino plural','+s','ils sont allés'],
      ['femenino plural','+es','elles sont allées']
    ]},
    {t:'son', fr:'il est allé · elle est allée', es:'Al oído suenan igual: la e y la s de concordancia son mudas. Solo se ven al escribir. Excepto en participios que terminan en consonante: "il est mort" vs "elle est morte" — ahí sí se oye la t.'},

    {t:'piege', es:'Algunos verbos de la lista cambian de auxiliar cuando llevan complemento directo, y además cambian de significado: "Je suis monté" (subí) pero "J’ai monté les valises" (subí las maletas). Mismo caso con sortir, descendre, passer, retourner. Regla práctica: si el verbo lleva un objeto directo después, usa avoir.'},
    {t:'table', head:['Con être (sin objeto)','Con avoir (con objeto)'], rows:[
      ['Je suis sorti. — Salí.','J’ai sorti la poubelle. — Saqué la basura.'],
      ['Elle est descendue. — Bajó.','Elle a descendu l’escalier. — Bajó la escalera.'],
      ['Nous sommes passés. — Pasamos.','Nous avons passé un examen. — Hicimos un examen.']
    ]},
    {t:'piege', es:'Ojo con "passer un examen": NO significa aprobar. Significa presentarlo. Aprobar es "réussir un examen". Es un falso amigo que mete a la gente en problemas.'}
  ],
  exercices:[
    {type:'trou', q:'Elle ___ (être) allée à Paris.', r:['est'], expl:'aller va con être.'},
    {type:'trou', q:'Nous sommes ___ (arriver) hier soir.', r:['arrivés'], expl:'Concordancia con nous, masculino plural.'},
    {type:'trou', q:'Elles sont ___ (partir) ce matin.', r:['parties'], expl:'Femenino plural: +es.'},
    {type:'trou', q:'Je me suis ___ (lever) tôt. (hombre)', r:['levé'], expl:'Los pronominales siempre con être.'},
    {type:'qcm', q:'"Subí las maletas" es…', opts:['J’ai monté les valises','Je suis monté les valises','Je suis monté des valises'], r:0,
     expl:'Con complemento directo, monter cambia a avoir.'},
    {type:'qcm', q:'"J’ai passé l’examen" significa…', opts:['Presenté el examen','Aprobé el examen','Reprobé el examen'], r:0,
     expl:'Aprobar es "réussir". "passer" es solo presentarse.'}
  ]
},

/* ----------------------------------------------------------------- 13 --- */
{
  id:'a1-13-futur-proche', lvl:'A1', ordre:13, minutos:9,
  titre:'Futur proche y passé récent',
  resume:'Dos construcciones sencillísimas que resuelven el 80% de lo que quieres decir sobre el futuro y el pasado inmediato.',
  theorie:[
    {t:'regle', es:'FUTUR PROCHE: aller conjugado + infinitivo. Idéntico al "voy a hacer" del español.', fr:'Je vais partir. = Voy a irme.'},
    {t:'table', head:['','aller','+ infinitivo'], rows:[
      ['je','vais','partir'],
      ['tu','vas','partir'],
      ['il / elle / on','va','partir'],
      ['nous','allons','partir'],
      ['vous','allez','partir'],
      ['ils / elles','vont','partir']
    ]},
    {t:'ex', fr:'Je vais manger.', es:'Voy a comer.'},
    {t:'ex', fr:'On va au cinéma ce soir.', es:'Vamos al cine esta noche.'},
    {t:'ex', fr:'Il va pleuvoir.', es:'Va a llover.'},
    {t:'ex', fr:'Qu’est-ce que tu vas faire ?', es:'¿Qué vas a hacer?'},

    {t:'p', es:'En negativo, el sándwich abraza a "aller", no al infinitivo:'},
    {t:'ex', fr:'Je ne vais pas sortir.', es:'No voy a salir.'},

    {t:'regle', es:'PASSÉ RÉCENT: venir de + infinitivo. Significa "acabar de".', fr:'Je viens de manger. = Acabo de comer.'},
    {t:'ex', fr:'Je viens d’arriver.', es:'Acabo de llegar.'},
    {t:'ex', fr:'Elle vient de partir.', es:'Ella acaba de irse.'},
    {t:'ex', fr:'Nous venons de finir.', es:'Acabamos de terminar.'},
    {t:'piege', es:'"venir de + infinitivo" NO significa "venir de un lugar". "Je viens de Paris" = vengo de París (origen). "Je viens de manger" = acabo de comer. Lo que distingue es qué sigue: si es un infinitivo, es "acabar de"; si es un lugar, es origen.'},

    {t:'p', es:'¿Cuándo usar futur proche y cuándo el futuro simple (que veremos en A2)? La regla práctica:'},
    {t:'table', head:['Situación','Usa'], rows:[
      ['Hablando, plan concreto y cercano','futur proche: je vais partir'],
      ['Escrito, formal, predicción lejana','futur simple: je partirai'],
      ['Si dudas al hablar','futur proche']
    ]},
    {t:'p', es:'En el francés hablado real, el futur proche se come al futuro simple casi siempre. Puedes pasar meses sin necesitar el futuro simple para hablar. Para leer y escribir, sí lo necesitas.'}
  ],
  exercices:[
    {type:'trou', q:'Je ___ (aller) partir demain.', r:['vais'], expl:''},
    {type:'trou', q:'Nous ___ (aller) manger.', r:['allons'], expl:''},
    {type:'qcm', q:'"Acabo de llegar" es…', opts:['Je viens d’arriver','Je vais arriver','J’arrive de'], r:0,
     expl:'venir de + infinitivo = acabar de.'},
    {type:'qcm', q:'"Je viens de Paris" significa…', opts:['Vengo de París (origen)','Acabo de París','Voy a París'], r:0,
     expl:'Con un lugar es origen. Con un infinitivo sería "acabar de".'},
    {type:'trou', q:'Je ne ___ pas sortir ce soir.', r:['vais'], expl:'La negación abraza a aller, no al infinitivo.'}
  ]
}

];
