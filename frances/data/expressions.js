/* ==========================================================================
   EXPRESSIONS — lo que los franceses dicen de verdad
   --------------------------------------------------------------------------
   No son frases de libro de texto. Son las que oyes en la calle, en series
   y entre amigos. Cada una lleva su registro, porque decir la equivocada
   en el momento equivocado es peor que no decir nada.

   reg: 'fam' familiar · 'cour' corriente (sirve casi siempre) · 'form' formal
   ========================================================================== */

window.EXPRESSIONS = [

{ id:'reactions', titre:'Reaccionar a algo', icone:'😲', items:[
  {fr:'Ça va ?', es:'¿Todo bien?', reg:'cour', note:'También es saludo y respuesta a la vez.'},
  {fr:'Ça marche.', es:'Va / Sale.', reg:'cour', note:'Aceptar un plan. Utilísima.'},
  {fr:'C’est pas grave.', es:'No pasa nada.', reg:'cour', note:'Con el "ne" caído, como se dice de verdad.'},
  {fr:'Ça m’étonne pas.', es:'No me sorprende.', reg:'fam', note:''},
  {fr:'Sérieux ?', es:'¿En serio?', reg:'fam', note:''},
  {fr:'N’importe quoi !', es:'¡Qué tontería!', reg:'fam', note:'Para descalificar algo absurdo.'},
  {fr:'Ça craint.', es:'Qué mal rollo.', reg:'fam', note:''},
  {fr:'Tant pis.', es:'Ni modo.', reg:'cour', note:'Resignación. Muy francesa.'},
  {fr:'Tant mieux.', es:'Mejor así.', reg:'cour', note:'El opuesto de tant pis.'},
  {fr:'Ça alors !', es:'¡Vaya!', reg:'cour', note:'Sorpresa.'},
  {fr:'Bof.', es:'Meh.', reg:'fam', note:'Indiferencia. Es un sonido, casi.'},
  {fr:'Carrément !', es:'¡Totalmente!', reg:'fam', note:'Acuerdo entusiasta.'},
  {fr:'Ça dépend.', es:'Depende.', reg:'cour', note:''},
  {fr:'Je m’en fiche.', es:'Me da igual.', reg:'fam', note:'Hay una versión más grosera con otra palabra.'},
  {fr:'Aucune idée.', es:'Ni idea.', reg:'cour', note:''},
  {fr:'C’est dingue !', es:'¡Es una locura!', reg:'fam', note:''},
  {fr:'Ah bon ?', es:'¿Ah sí?', reg:'cour', note:'Sorpresa moderada. Se usa constantemente.'},
  {fr:'Voilà.', es:'Ahí está / Eso es.', reg:'cour', note:'La palabra más versátil del francés.'}
]},

{ id:'quotidien', titre:'Sobrevivir el día', icone:'☕', items:[
  {fr:'Je suis crevé.', es:'Estoy muerto de cansancio.', reg:'fam', note:''},
  {fr:'J’en peux plus.', es:'No aguanto más.', reg:'fam', note:''},
  {fr:'J’en ai marre.', es:'Estoy harto.', reg:'fam', note:'De las más usadas del idioma.'},
  {fr:'Ça me saoule.', es:'Me tiene harto.', reg:'fam', note:''},
  {fr:'J’ai la flemme.', es:'Me da flojera.', reg:'fam', note:'Exactamente nuestra flojera.'},
  {fr:'Je suis à la bourre.', es:'Voy tardísimo.', reg:'fam', note:''},
  {fr:'On y va !', es:'¡Vámonos!', reg:'cour', note:''},
  {fr:'Ça y est !', es:'¡Ya está!', reg:'cour', note:'Algo se completó.'},
  {fr:'Attends une seconde.', es:'Espera un segundo.', reg:'cour', note:''},
  {fr:'Je reviens tout de suite.', es:'Ahorita vuelvo.', reg:'cour', note:''},
  {fr:'Tiens !', es:'¡Toma! / ¡Mira!', reg:'cour', note:'Al dar algo o al notar algo.'},
  {fr:'Ça fait longtemps !', es:'¡Cuánto tiempo!', reg:'cour', note:''},
  {fr:'Bon courage !', es:'¡Ánimo!', reg:'cour', note:'A alguien que enfrenta algo pesado.'},
  {fr:'Bonne continuation.', es:'Que siga bien.', reg:'cour', note:'Despedida elegante.'},
  {fr:'Fais gaffe !', es:'¡Aguas!', reg:'fam', note:'Versión corriente: "Fais attention".'},
  {fr:'T’inquiète.', es:'No te preocupes.', reg:'fam', note:'Contracción de "ne t’inquiète pas".'},
  {fr:'Ça roule ?', es:'¿Todo bien?', reg:'fam', note:''},
  {fr:'À plus !', es:'¡Nos vemos!', reg:'fam', note:'De "à plus tard". Se dice "a plüss".'}
]},

{ id:'opinion', titre:'Dar tu opinión', icone:'🗣️', items:[
  {fr:'À mon avis…', es:'En mi opinión…', reg:'cour', note:''},
  {fr:'Je trouve que…', es:'Me parece que…', reg:'cour', note:'Más natural que "je pense que" para gustos.'},
  {fr:'Je pense que…', es:'Pienso que…', reg:'cour', note:''},
  {fr:'Il me semble que…', es:'Me parece que…', reg:'form', note:'Más cauto.'},
  {fr:'Franchement…', es:'La verdad…', reg:'cour', note:''},
  {fr:'Pour être honnête…', es:'Para ser honesto…', reg:'cour', note:''},
  {fr:'Ça dépend du contexte.', es:'Depende del contexto.', reg:'cour', note:''},
  {fr:'Je suis d’accord.', es:'Estoy de acuerdo.', reg:'cour', note:''},
  {fr:'Je ne suis pas d’accord.', es:'No estoy de acuerdo.', reg:'cour', note:''},
  {fr:'Tu as raison.', es:'Tienes razón.', reg:'cour', note:''},
  {fr:'Tu as tort.', es:'Estás equivocado.', reg:'cour', note:'Directo. Con cuidado.'},
  {fr:'C’est vrai que…', es:'Es cierto que…', reg:'cour', note:'Para conceder antes de matizar.'},
  {fr:'Certes, mais…', es:'Cierto, pero…', reg:'form', note:'Estructura de debate.'},
  {fr:'Ça n’a rien à voir.', es:'No tiene nada que ver.', reg:'cour', note:''},
  {fr:'Ça revient au même.', es:'Es lo mismo al final.', reg:'cour', note:''},
  {fr:'Je ne vois pas le rapport.', es:'No veo la relación.', reg:'cour', note:''}
]},

{ id:'social', titre:'Situaciones sociales', icone:'🤝', items:[
  {fr:'Enchanté.', es:'Mucho gusto.', reg:'cour', note:'Al conocer a alguien.'},
  {fr:'On se tutoie ?', es:'¿Nos tuteamos?', reg:'cour', note:'La pregunta que rompe el hielo formal.'},
  {fr:'Je vous en prie.', es:'Por favor / De nada.', reg:'form', note:'Doble uso: ceder el paso o responder gracias.'},
  {fr:'Après vous.', es:'Usted primero.', reg:'form', note:''},
  {fr:'Ça ne vous dérange pas si… ?', es:'¿No le molesta si…?', reg:'form', note:''},
  {fr:'Excusez-moi de vous déranger.', es:'Disculpe la molestia.', reg:'form', note:''},
  {fr:'Avec plaisir.', es:'Con gusto.', reg:'cour', note:''},
  {fr:'Santé !', es:'¡Salud!', reg:'cour', note:'Al brindar. También "Tchin-tchin !"'},
  {fr:'Bon appétit !', es:'¡Buen provecho!', reg:'cour', note:'Casi obligatorio antes de comer.'},
  {fr:'Bonne journée !', es:'¡Buen día!', reg:'cour', note:'Al despedirse de día.'},
  {fr:'Bonne soirée !', es:'¡Buena noche!', reg:'cour', note:'Al despedirse de noche.'},
  {fr:'Félicitations !', es:'¡Felicidades!', reg:'cour', note:''},
  {fr:'Je suis désolé pour…', es:'Lo siento por…', reg:'cour', note:''},
  {fr:'Ça me fait plaisir.', es:'Me da gusto.', reg:'cour', note:''},
  {fr:'C’est très gentil.', es:'Es muy amable.', reg:'cour', note:''},
  {fr:'Bises', es:'Besos', reg:'fam', note:'Cierre de mensaje entre amigos.'}
]},

{ id:'resto', titre:'Restaurante y compras', icone:'🍽️', items:[
  {fr:'Une table pour deux, s’il vous plaît.', es:'Una mesa para dos, por favor.', reg:'cour', note:''},
  {fr:'Je voudrais…', es:'Quisiera…', reg:'cour', note:'Siempre condicional. "Je veux" suena grosero.'},
  {fr:'Qu’est-ce que vous me conseillez ?', es:'¿Qué me recomienda?', reg:'cour', note:''},
  {fr:'La carte, s’il vous plaît.', es:'El menú, por favor.', reg:'cour', note:'"Menu" en Francia es el fijo del día.'},
  {fr:'L’addition, s’il vous plaît.', es:'La cuenta, por favor.', reg:'cour', note:''},
  {fr:'C’était très bon.', es:'Estuvo muy bueno.', reg:'cour', note:''},
  {fr:'Je prends celui-là.', es:'Me llevo ese.', reg:'cour', note:''},
  {fr:'Combien ça coûte ?', es:'¿Cuánto cuesta?', reg:'cour', note:''},
  {fr:'C’est trop cher.', es:'Está muy caro.', reg:'cour', note:''},
  {fr:'Vous acceptez la carte ?', es:'¿Aceptan tarjeta?', reg:'cour', note:''},
  {fr:'Je regarde, merci.', es:'Solo estoy viendo, gracias.', reg:'cour', note:'Para que no te sigan en una tienda.'},
  {fr:'Vous avez ça en plus grand ?', es:'¿Lo tiene más grande?', reg:'cour', note:''},
  {fr:'Je peux essayer ?', es:'¿Puedo probármelo?', reg:'cour', note:''},
  {fr:'Sur place ou à emporter ?', es:'¿Para aquí o para llevar?', reg:'cour', note:'Te lo van a preguntar siempre.'}
]},

{ id:'idiomes', titre:'Modismos que suenan a nativo', icone:'🎭', items:[
  {fr:'Ça marche du tonnerre.', es:'Funciona de maravilla.', reg:'fam', note:'Literal: como el trueno.'},
  {fr:'Poser un lapin à quelqu’un.', es:'Dejar plantado a alguien.', reg:'fam', note:'Literal: ponerle un conejo.'},
  {fr:'Avoir le cafard.', es:'Estar deprimido.', reg:'fam', note:'Literal: tener la cucaracha.'},
  {fr:'Coûter les yeux de la tête.', es:'Costar un ojo de la cara.', reg:'cour', note:'Casi igual que en español, pero en plural.'},
  {fr:'Ce n’est pas la mer à boire.', es:'No es para tanto.', reg:'cour', note:'Literal: no es beberse el mar.'},
  {fr:'Avoir un coup de foudre.', es:'Ser amor a primera vista.', reg:'cour', note:'Literal: un rayo.'},
  {fr:'Mettre son grain de sel.', es:'Meter su cuchara.', reg:'fam', note:''},
  {fr:'Tomber dans les pommes.', es:'Desmayarse.', reg:'fam', note:'Literal: caer en las manzanas.'},
  {fr:'Raconter des salades.', es:'Contar cuentos.', reg:'fam', note:''},
  {fr:'Avoir la pêche / la patate.', es:'Estar con toda la energía.', reg:'fam', note:''},
  {fr:'Faire la grasse matinée.', es:'Levantarse tardísimo.', reg:'cour', note:''},
  {fr:'Ça me prend la tête.', es:'Me tiene loco.', reg:'fam', note:''},
  {fr:'Il pleut des cordes.', es:'Llueve a cántaros.', reg:'cour', note:''},
  {fr:'Appeler un chat un chat.', es:'Llamar a las cosas por su nombre.', reg:'cour', note:''},
  {fr:'Revenons à nos moutons.', es:'Volvamos al tema.', reg:'cour', note:'Viene de una farsa medieval.'},
  {fr:'Avoir d’autres chats à fouetter.', es:'Tener otras cosas que hacer.', reg:'fam', note:''},
  {fr:'Se creuser la tête.', es:'Romperse la cabeza.', reg:'cour', note:''},
  {fr:'Ce n’est pas mon truc.', es:'No es lo mío.', reg:'fam', note:''},
  {fr:'Ça vaut le coup.', es:'Vale la pena.', reg:'cour', note:'Utilísima.'},
  {fr:'Petit à petit, l’oiseau fait son nid.', es:'Poco a poco se llega lejos.', reg:'cour', note:'Refrán.'}
]},

{ id:'nuances', titre:'Muletillas y matices', icone:'💬', items:[
  {fr:'du coup', es:'entonces / así que', reg:'fam', note:'Los jóvenes la usan cada tres frases.'},
  {fr:'en fait', es:'de hecho / en realidad', reg:'cour', note:'Se pronuncia "an fet", con la t.'},
  {fr:'quoi', es:'pues / ¿no?', reg:'fam', note:'Al final de frase, como coletilla.'},
  {fr:'genre', es:'tipo / o sea', reg:'fam', note:'Muletilla juvenil.'},
  {fr:'bref', es:'en fin', reg:'cour', note:'Para cortar y resumir.'},
  {fr:'enfin', es:'bueno / en fin', reg:'cour', note:'Corrige o matiza lo dicho.'},
  {fr:'bon…', es:'bueno…', reg:'cour', note:'Para arrancar o cerrar un tema.'},
  {fr:'donc', es:'entonces', reg:'cour', note:''},
  {fr:'d’ailleurs', es:'por cierto / además', reg:'cour', note:''},
  {fr:'au fait', es:'por cierto', reg:'cour', note:'Introduce un tema nuevo.'},
  {fr:'quand même', es:'aun así / de todos modos', reg:'cour', note:'Muy frecuente, muchos matices.'},
  {fr:'carrément', es:'totalmente / de plano', reg:'fam', note:''},
  {fr:'plutôt', es:'más bien', reg:'cour', note:''},
  {fr:'à peu près', es:'más o menos', reg:'cour', note:''},
  {fr:'grosso modo', es:'a grandes rasgos', reg:'cour', note:'Latinajo que usan mucho.'},
  {fr:'voire', es:'incluso / o hasta', reg:'form', note:'No confundir con "voir".'}
]}

];
