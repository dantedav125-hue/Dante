/* ==========================================================================
   VERBES — base de verbos franceses
   --------------------------------------------------------------------------
   Campos:
     i    infinitivo
     es   traducción al español
     g    grupo: 1 = -er regular · 2 = -ir con -iss- · 3 = todo lo demás
     aux  auxiliar del passé composé: 'avoir' o 'être'
     pp   participio pasado
     n    rango de frecuencia (1 = el más usado del francés)
     lvl  nivel CEFR donde conviene aprenderlo
     t    tipo de terminación de presente, si no se deduce del infinitivo
     p    1 si es pronominal (se lever)
     h    1 si empieza con h aspirada (no hay elisión: je hais)
     r    radicales irregulares { pres, imp, fut, sub, ps }
            pres: string o [singular, nous/vous, ils]
            sub:  string o [ils, nous/vous]
            ps:   { rad, t } donde t es 'a' | 'i' | 'u' | 'in'
     f    formas completas, cuando el verbo es de veras caótico
   ========================================================================== */

window.VERBES = [

  /* ====================== LOS INDISPENSABLES ============================ */

  { i:'être', es:'ser / estar', g:3, aux:'avoir', pp:'été', n:1, lvl:'A1',
    f:{ present:['suis','es','est','sommes','êtes','sont'],
        imparfait:['étais','étais','était','étions','étiez','étaient'],
        futur:['serai','seras','sera','serons','serez','seront'],
        conditionnel:['serais','serais','serait','serions','seriez','seraient'],
        subjonctif:['sois','sois','soit','soyons','soyez','soient'],
        passeSimple:['fus','fus','fut','fûmes','fûtes','furent'],
        imperatif:['sois','soyons','soyez'] } },

  { i:'avoir', es:'tener / haber', g:3, aux:'avoir', pp:'eu', n:2, lvl:'A1',
    f:{ present:['ai','as','a','avons','avez','ont'],
        imparfait:['avais','avais','avait','avions','aviez','avaient'],
        futur:['aurai','auras','aura','aurons','aurez','auront'],
        conditionnel:['aurais','aurais','aurait','aurions','auriez','auraient'],
        subjonctif:['aie','aies','ait','ayons','ayez','aient'],
        passeSimple:['eus','eus','eut','eûmes','eûtes','eurent'],
        imperatif:['aie','ayons','ayez'] } },

  { i:'faire', es:'hacer', g:3, aux:'avoir', pp:'fait', n:3, lvl:'A1',
    r:{ fut:'fer', sub:'fass', ps:{rad:'f', t:'i'} },
    f:{ present:['fais','fais','fait','faisons','faites','font'] } },

  { i:'dire', es:'decir', g:3, aux:'avoir', pp:'dit', n:4, lvl:'A1',
    r:{ fut:'dir', sub:'dis', ps:{rad:'d', t:'i'} },
    f:{ present:['dis','dis','dit','disons','dites','disent'] } },

  { i:'pouvoir', es:'poder', g:3, aux:'avoir', pp:'pu', n:5, lvl:'A1',
    r:{ pres:['peu','pouv','peuv'], fut:'pourr', sub:'puiss', ps:{rad:'p', t:'u'} },
    f:{ present:['peux','peux','peut','pouvons','pouvez','peuvent'] } },

  { i:'aller', es:'ir', g:1, aux:'être', pp:'allé', n:6, lvl:'A1',
    r:{ fut:'ir', sub:['aill','all'], ps:{rad:'all', t:'a'} },
    f:{ present:['vais','vas','va','allons','allez','vont'],
        imperatif:['va','allons','allez'] } },

  { i:'voir', es:'ver', g:3, aux:'avoir', pp:'vu', n:7, lvl:'A1',
    r:{ pres:['voi','voy','voi'], fut:'verr', sub:['voi','voy'], ps:{rad:'v', t:'i'} } },

  { i:'savoir', es:'saber', g:3, aux:'avoir', pp:'su', n:8, lvl:'A1',
    r:{ fut:'saur', sub:'sach', ps:{rad:'s', t:'u'} },
    f:{ present:['sais','sais','sait','savons','savez','savent'],
        imperatif:['sache','sachons','sachez'] } },

  { i:'vouloir', es:'querer', g:3, aux:'avoir', pp:'voulu', n:9, lvl:'A1',
    r:{ pres:['veu','voul','veul'], fut:'voudr', sub:['veuill','voul'], ps:{rad:'voul', t:'u'} },
    f:{ present:['veux','veux','veut','voulons','voulez','veulent'],
        imperatif:['veuille','veuillons','veuillez'] } },

  { i:'venir', es:'venir', g:3, aux:'être', pp:'venu', n:10, lvl:'A1',
    r:{ pres:['vien','ven','vienn'], fut:'viendr', sub:['vienn','ven'], ps:{rad:'v', t:'in'} } },

  { i:'devoir', es:'deber', g:3, aux:'avoir', pp:'dû', n:11, lvl:'A2',
    r:{ pres:['doi','dev','doiv'], fut:'devr', sub:['doiv','dev'], ps:{rad:'d', t:'u'} } },

  { i:'prendre', es:'tomar / coger', g:3, aux:'avoir', pp:'pris', n:12, lvl:'A1',
    r:{ pres:['prend','pren','prenn'], fut:'prendr', sub:['prenn','pren'], ps:{rad:'pr', t:'i'} } },

  { i:'mettre', es:'poner', g:3, aux:'avoir', pp:'mis', n:13, lvl:'A1',
    r:{ pres:['met','mett','mett'], fut:'mettr', sub:'mett', ps:{rad:'m', t:'i'} } },

  { i:'falloir', es:'hacer falta (impersonal)', g:3, aux:'avoir', pp:'fallu', n:14, lvl:'A2',
    imperso:1,
    f:{ present:['—','—','faut','—','—','—'],
        imparfait:['—','—','fallait','—','—','—'],
        futur:['—','—','faudra','—','—','—'],
        conditionnel:['—','—','faudrait','—','—','—'],
        subjonctif:['—','—','faille','—','—','—'],
        passeSimple:['—','—','fallut','—','—','—'],
        imperatif:['—','—','—'] } },

  /* ====================== -ER REGULARES DE ALTA FRECUENCIA ============== */

  { i:'parler', es:'hablar', g:1, aux:'avoir', pp:'parlé', n:20, lvl:'A1' },
  { i:'aimer', es:'amar / gustar', g:1, aux:'avoir', pp:'aimé', n:21, lvl:'A1' },
  { i:'donner', es:'dar', g:1, aux:'avoir', pp:'donné', n:22, lvl:'A1' },
  { i:'trouver', es:'encontrar', g:1, aux:'avoir', pp:'trouvé', n:23, lvl:'A1' },
  { i:'demander', es:'pedir / preguntar', g:1, aux:'avoir', pp:'demandé', n:24, lvl:'A1' },
  { i:'penser', es:'pensar', g:1, aux:'avoir', pp:'pensé', n:25, lvl:'A1' },
  { i:'regarder', es:'mirar', g:1, aux:'avoir', pp:'regardé', n:26, lvl:'A1' },
  { i:'écouter', es:'escuchar', g:1, aux:'avoir', pp:'écouté', n:27, lvl:'A1' },
  { i:'travailler', es:'trabajar', g:1, aux:'avoir', pp:'travaillé', n:28, lvl:'A1' },
  { i:'habiter', es:'vivir (residir)', g:1, aux:'avoir', pp:'habité', n:29, lvl:'A1' },
  { i:'chercher', es:'buscar', g:1, aux:'avoir', pp:'cherché', n:30, lvl:'A1' },
  { i:'montrer', es:'mostrar', g:1, aux:'avoir', pp:'montré', n:31, lvl:'A1' },
  { i:'porter', es:'llevar / cargar', g:1, aux:'avoir', pp:'porté', n:32, lvl:'A1' },
  { i:'laisser', es:'dejar', g:1, aux:'avoir', pp:'laissé', n:33, lvl:'A2' },
  { i:'garder', es:'guardar / conservar', g:1, aux:'avoir', pp:'gardé', n:34, lvl:'A2' },
  { i:'jouer', es:'jugar / tocar (instrumento)', g:1, aux:'avoir', pp:'joué', n:35, lvl:'A1' },
  { i:'oublier', es:'olvidar', g:1, aux:'avoir', pp:'oublié', n:36, lvl:'A1' },
  { i:'gagner', es:'ganar', g:1, aux:'avoir', pp:'gagné', n:37, lvl:'A2' },
  { i:'marcher', es:'caminar / funcionar', g:1, aux:'avoir', pp:'marché', n:38, lvl:'A1' },
  { i:'arriver', es:'llegar / ocurrir', g:1, aux:'être', pp:'arrivé', n:39, lvl:'A1' },
  { i:'entrer', es:'entrar', g:1, aux:'être', pp:'entré', n:40, lvl:'A1' },
  { i:'rester', es:'quedarse', g:1, aux:'être', pp:'resté', n:41, lvl:'A1' },
  { i:'tomber', es:'caer', g:1, aux:'être', pp:'tombé', n:42, lvl:'A1' },
  { i:'passer', es:'pasar', g:1, aux:'être', pp:'passé', n:43, lvl:'A1' },
  { i:'monter', es:'subir', g:1, aux:'être', pp:'monté', n:44, lvl:'A2' },
  { i:'rentrer', es:'volver a casa', g:1, aux:'être', pp:'rentré', n:45, lvl:'A1' },
  { i:'retourner', es:'regresar', g:1, aux:'être', pp:'retourné', n:46, lvl:'A2' },
  { i:'sembler', es:'parecer', g:1, aux:'avoir', pp:'semblé', n:47, lvl:'A2' },
  { i:'arrêter', es:'parar / detener', g:1, aux:'avoir', pp:'arrêté', n:48, lvl:'A2' },
  { i:'exprimer', es:'expresar', g:1, aux:'avoir', pp:'exprimé', n:49, lvl:'B1' },
  { i:'expliquer', es:'explicar', g:1, aux:'avoir', pp:'expliqué', n:50, lvl:'A2' },
  { i:'décider', es:'decidir', g:1, aux:'avoir', pp:'décidé', n:51, lvl:'A2' },
  { i:'rencontrer', es:'encontrarse con / conocer', g:1, aux:'avoir', pp:'rencontré', n:52, lvl:'A2' },
  { i:'raconter', es:'contar (narrar)', g:1, aux:'avoir', pp:'raconté', n:53, lvl:'A2' },
  { i:'apporter', es:'traer', g:1, aux:'avoir', pp:'apporté', n:54, lvl:'A2' },
  { i:'utiliser', es:'usar', g:1, aux:'avoir', pp:'utilisé', n:55, lvl:'A2' },
  { i:'changer', es:'cambiar', g:1, aux:'avoir', pp:'changé', n:56, lvl:'A2' },
  { i:'continuer', es:'continuar', g:1, aux:'avoir', pp:'continué', n:57, lvl:'A2' },
  { i:'accepter', es:'aceptar', g:1, aux:'avoir', pp:'accepté', n:58, lvl:'B1' },
  { i:'refuser', es:'rechazar', g:1, aux:'avoir', pp:'refusé', n:59, lvl:'B1' },
  { i:'oser', es:'atreverse', g:1, aux:'avoir', pp:'osé', n:60, lvl:'B1' },
  { i:'exister', es:'existir', g:1, aux:'avoir', pp:'existé', n:61, lvl:'B1' },
  { i:'créer', es:'crear', g:1, aux:'avoir', pp:'créé', n:62, lvl:'B1' },
  { i:'signer', es:'firmar', g:1, aux:'avoir', pp:'signé', n:63, lvl:'B1' },
  { i:'tuer', es:'matar', g:1, aux:'avoir', pp:'tué', n:64, lvl:'B1' },
  { i:'frapper', es:'golpear', g:1, aux:'avoir', pp:'frappé', n:65, lvl:'B1' },
  { i:'chanter', es:'cantar', g:1, aux:'avoir', pp:'chanté', n:66, lvl:'A1' },
  { i:'danser', es:'bailar', g:1, aux:'avoir', pp:'dansé', n:67, lvl:'A1' },
  { i:'aider', es:'ayudar', g:1, aux:'avoir', pp:'aidé', n:68, lvl:'A1' },
  { i:'fermer', es:'cerrar', g:1, aux:'avoir', pp:'fermé', n:69, lvl:'A1' },
  { i:'tourner', es:'girar', g:1, aux:'avoir', pp:'tourné', n:70, lvl:'A2' },
  { i:'presenter', es:'presentar', g:1, aux:'avoir', pp:'presenté', n:71, lvl:'A2' },

  /* --- -ER con cambio ortográfico. Aquí es donde la gente falla. -------- */

  { i:'manger', es:'comer', g:1, aux:'avoir', pp:'mangé', n:80, lvl:'A1', ortho:'ger' },
  { i:'commencer', es:'empezar', g:1, aux:'avoir', pp:'commencé', n:81, lvl:'A1', ortho:'cer' },
  { i:'voyager', es:'viajar', g:1, aux:'avoir', pp:'voyagé', n:82, lvl:'A1', ortho:'ger' },
  { i:'nager', es:'nadar', g:1, aux:'avoir', pp:'nagé', n:83, lvl:'A2', ortho:'ger' },
  { i:'ranger', es:'ordenar / acomodar', g:1, aux:'avoir', pp:'rangé', n:84, lvl:'A2', ortho:'ger' },
  { i:'partager', es:'compartir', g:1, aux:'avoir', pp:'partagé', n:85, lvl:'A2', ortho:'ger' },
  { i:'placer', es:'colocar', g:1, aux:'avoir', pp:'placé', n:86, lvl:'A2', ortho:'cer' },
  { i:'lancer', es:'lanzar', g:1, aux:'avoir', pp:'lancé', n:87, lvl:'A2', ortho:'cer' },
  { i:'avancer', es:'avanzar', g:1, aux:'avoir', pp:'avancé', n:88, lvl:'B1', ortho:'cer' },
  { i:'acheter', es:'comprar', g:1, aux:'avoir', pp:'acheté', n:89, lvl:'A1', ortho:'e_er' },
  { i:'lever', es:'levantar', g:1, aux:'avoir', pp:'levé', n:90, lvl:'A2', ortho:'e_er' },
  { i:'emmener', es:'llevarse a alguien', g:1, aux:'avoir', pp:'emmené', n:91, lvl:'B1', ortho:'e_er' },
  { i:'peser', es:'pesar', g:1, aux:'avoir', pp:'pesé', n:92, lvl:'B1', ortho:'e_er' },
  { i:'appeler', es:'llamar', g:1, aux:'avoir', pp:'appelé', n:93, lvl:'A1', ortho:'eler' },
  { i:'jeter', es:'tirar / arrojar', g:1, aux:'avoir', pp:'jeté', n:94, lvl:'A2', ortho:'eter' },
  { i:'préférer', es:'preferir', g:1, aux:'avoir', pp:'préféré', n:95, lvl:'A1', ortho:'é_er' },
  { i:'espérer', es:'esperar (tener esperanza)', g:1, aux:'avoir', pp:'espéré', n:96, lvl:'A2', ortho:'é_er' },
  { i:'répéter', es:'repetir', g:1, aux:'avoir', pp:'répété', n:97, lvl:'A2', ortho:'é_er' },
  { i:'considérer', es:'considerar', g:1, aux:'avoir', pp:'considéré', n:98, lvl:'B1', ortho:'é_er' },
  { i:'payer', es:'pagar', g:1, aux:'avoir', pp:'payé', n:99, lvl:'A1', ortho:'yer' },
  { i:'essayer', es:'intentar / probar', g:1, aux:'avoir', pp:'essayé', n:100, lvl:'A2', ortho:'yer' },
  { i:'employer', es:'emplear', g:1, aux:'avoir', pp:'employé', n:101, lvl:'B1', ortho:'yer' },
  { i:'nettoyer', es:'limpiar', g:1, aux:'avoir', pp:'nettoyé', n:102, lvl:'A2', ortho:'yer' },
  { i:'ennuyer', es:'aburrir / molestar', g:1, aux:'avoir', pp:'ennuyé', n:103, lvl:'B1', ortho:'yer' },
  { i:'envoyer', es:'enviar', g:1, aux:'avoir', pp:'envoyé', n:104, lvl:'A2', ortho:'yer',
    r:{ fut:'enverr' } },

  /* ====================== GRUPO 2 : -IR con -ISS- ======================= */

  { i:'finir', es:'terminar', g:2, aux:'avoir', pp:'fini', n:110, lvl:'A1' },
  { i:'choisir', es:'elegir', g:2, aux:'avoir', pp:'choisi', n:111, lvl:'A1' },
  { i:'réussir', es:'lograr / tener éxito', g:2, aux:'avoir', pp:'réussi', n:112, lvl:'A2' },
  { i:'remplir', es:'llenar', g:2, aux:'avoir', pp:'rempli', n:113, lvl:'A2' },
  { i:'grandir', es:'crecer', g:2, aux:'avoir', pp:'grandi', n:114, lvl:'A2' },
  { i:'réfléchir', es:'reflexionar', g:2, aux:'avoir', pp:'réfléchi', n:115, lvl:'B1' },
  { i:'obéir', es:'obedecer', g:2, aux:'avoir', pp:'obéi', n:116, lvl:'B1' },
  { i:'bâtir', es:'construir', g:2, aux:'avoir', pp:'bâti', n:117, lvl:'B1' },
  { i:'établir', es:'establecer', g:2, aux:'avoir', pp:'établi', n:118, lvl:'B1' },
  { i:'saisir', es:'agarrar / captar', g:2, aux:'avoir', pp:'saisi', n:119, lvl:'B1' },
  { i:'nourrir', es:'alimentar', g:2, aux:'avoir', pp:'nourri', n:120, lvl:'B1' },
  { i:'guérir', es:'curar / sanar', g:2, aux:'avoir', pp:'guéri', n:121, lvl:'B2' },
  { i:'avertir', es:'advertir', g:2, aux:'avoir', pp:'averti', n:122, lvl:'B2' },
  { i:'applaudir', es:'aplaudir', g:2, aux:'avoir', pp:'applaudi', n:123, lvl:'B2' },

  /* ====================== GRUPO 3 : LOS IRREGULARES ==================== */

  /* --- -ir sin -iss- : el radical pierde su última consonante en singular */
  { i:'partir', es:'partir / irse', g:3, aux:'être', pp:'parti', n:130, lvl:'A1',
    r:{ pres:['par','part','part'], ps:{rad:'part', t:'i'} } },
  { i:'sortir', es:'salir', g:3, aux:'être', pp:'sorti', n:131, lvl:'A1',
    r:{ pres:['sor','sort','sort'], ps:{rad:'sort', t:'i'} } },
  { i:'dormir', es:'dormir', g:3, aux:'avoir', pp:'dormi', n:132, lvl:'A1',
    r:{ pres:['dor','dorm','dorm'], ps:{rad:'dorm', t:'i'} } },
  { i:'sentir', es:'sentir / oler', g:3, aux:'avoir', pp:'senti', n:133, lvl:'A2',
    r:{ pres:['sen','sent','sent'], ps:{rad:'sent', t:'i'} } },
  { i:'servir', es:'servir', g:3, aux:'avoir', pp:'servi', n:134, lvl:'A2',
    r:{ pres:['ser','serv','serv'], ps:{rad:'serv', t:'i'} } },
  { i:'mentir', es:'mentir', g:3, aux:'avoir', pp:'menti', n:135, lvl:'B1',
    r:{ pres:['men','ment','ment'], ps:{rad:'ment', t:'i'} } },

  /* --- -ir que se conjugan como -er en presente ------------------------- */
  { i:'ouvrir', es:'abrir', g:3, aux:'avoir', pp:'ouvert', n:140, lvl:'A1',
    t:'er', r:{ pres:'ouvr', ps:{rad:'ouvr', t:'i'} } },
  { i:'offrir', es:'ofrecer / regalar', g:3, aux:'avoir', pp:'offert', n:141, lvl:'A2',
    t:'er', r:{ pres:'offr', ps:{rad:'offr', t:'i'} } },
  { i:'souffrir', es:'sufrir', g:3, aux:'avoir', pp:'souffert', n:142, lvl:'B1',
    t:'er', r:{ pres:'souffr', ps:{rad:'souffr', t:'i'} } },
  { i:'couvrir', es:'cubrir', g:3, aux:'avoir', pp:'couvert', n:143, lvl:'B1',
    t:'er', r:{ pres:'couvr', ps:{rad:'couvr', t:'i'} } },
  { i:'découvrir', es:'descubrir', g:3, aux:'avoir', pp:'découvert', n:144, lvl:'A2',
    t:'er', r:{ pres:'découvr', ps:{rad:'découvr', t:'i'} } },

  /* --- -ir de radical mutante ------------------------------------------ */
  { i:'courir', es:'correr', g:3, aux:'avoir', pp:'couru', n:150, lvl:'A2',
    r:{ pres:'cour', fut:'courr', ps:{rad:'cour', t:'u'} } },
  { i:'mourir', es:'morir', g:3, aux:'être', pp:'mort', n:151, lvl:'A2',
    r:{ pres:['meur','mour','meur'], fut:'mourr', sub:['meur','mour'], ps:{rad:'mour', t:'u'} } },
  { i:'tenir', es:'sostener / tener', g:3, aux:'avoir', pp:'tenu', n:152, lvl:'A2',
    r:{ pres:['tien','ten','tienn'], fut:'tiendr', sub:['tienn','ten'], ps:{rad:'t', t:'in'} } },
  { i:'devenir', es:'volverse / convertirse en', g:3, aux:'être', pp:'devenu', n:153, lvl:'A2',
    r:{ pres:['devien','deven','devienn'], fut:'deviendr', sub:['devienn','deven'], ps:{rad:'dev', t:'in'} } },
  { i:'revenir', es:'volver', g:3, aux:'être', pp:'revenu', n:154, lvl:'A1',
    r:{ pres:['revien','reven','revienn'], fut:'reviendr', sub:['revienn','reven'], ps:{rad:'rev', t:'in'} } },
  { i:'obtenir', es:'obtener', g:3, aux:'avoir', pp:'obtenu', n:155, lvl:'B1',
    r:{ pres:['obtien','obten','obtienn'], fut:'obtiendr', sub:['obtienn','obten'], ps:{rad:'obt', t:'in'} } },
  { i:'appartenir', es:'pertenecer', g:3, aux:'avoir', pp:'appartenu', n:156, lvl:'B2',
    r:{ pres:['appartien','apparten','appartienn'], fut:'appartiendr', sub:['appartienn','apparten'], ps:{rad:'appart', t:'in'} } },

  /* --- -re ------------------------------------------------------------- */
  { i:'vendre', es:'vender', g:3, aux:'avoir', pp:'vendu', n:160, lvl:'A1',
    r:{ ps:{rad:'vend', t:'i'} } },
  { i:'attendre', es:'esperar (aguardar)', g:3, aux:'avoir', pp:'attendu', n:161, lvl:'A1',
    r:{ ps:{rad:'attend', t:'i'} } },
  { i:'entendre', es:'oír', g:3, aux:'avoir', pp:'entendu', n:162, lvl:'A1',
    r:{ ps:{rad:'entend', t:'i'} } },
  { i:'répondre', es:'responder', g:3, aux:'avoir', pp:'répondu', n:163, lvl:'A1',
    r:{ ps:{rad:'répond', t:'i'} } },
  { i:'perdre', es:'perder', g:3, aux:'avoir', pp:'perdu', n:164, lvl:'A1',
    r:{ ps:{rad:'perd', t:'i'} } },
  { i:'descendre', es:'bajar', g:3, aux:'être', pp:'descendu', n:165, lvl:'A2',
    r:{ ps:{rad:'descend', t:'i'} } },
  { i:'rendre', es:'devolver', g:3, aux:'avoir', pp:'rendu', n:166, lvl:'A2',
    r:{ ps:{rad:'rend', t:'i'} } },
  { i:'défendre', es:'defender / prohibir', g:3, aux:'avoir', pp:'défendu', n:167, lvl:'B1',
    r:{ ps:{rad:'défend', t:'i'} } },

  { i:'prendre', es:'tomar', g:3, aux:'avoir', pp:'pris', n:12, lvl:'A1', dup:1,
    r:{ pres:['prend','pren','prenn'], fut:'prendr', sub:['prenn','pren'], ps:{rad:'pr', t:'i'} } },
  { i:'comprendre', es:'entender', g:3, aux:'avoir', pp:'compris', n:170, lvl:'A1',
    r:{ pres:['comprend','compren','comprenn'], fut:'comprendr', sub:['comprenn','compren'], ps:{rad:'compr', t:'i'} } },
  { i:'apprendre', es:'aprender', g:3, aux:'avoir', pp:'appris', n:171, lvl:'A1',
    r:{ pres:['apprend','appren','apprenn'], fut:'apprendr', sub:['apprenn','appren'], ps:{rad:'appr', t:'i'} } },
  { i:'surprendre', es:'sorprender', g:3, aux:'avoir', pp:'surpris', n:172, lvl:'B1',
    r:{ pres:['surprend','surpren','surprenn'], fut:'surprendr', sub:['surprenn','surpren'], ps:{rad:'surpr', t:'i'} } },

  { i:'permettre', es:'permitir', g:3, aux:'avoir', pp:'permis', n:175, lvl:'A2',
    r:{ pres:['permet','permett','permett'], fut:'permettr', sub:'permett', ps:{rad:'perm', t:'i'} } },
  { i:'promettre', es:'prometer', g:3, aux:'avoir', pp:'promis', n:176, lvl:'B1',
    r:{ pres:['promet','promett','promett'], fut:'promettr', sub:'promett', ps:{rad:'prom', t:'i'} } },

  { i:'écrire', es:'escribir', g:3, aux:'avoir', pp:'écrit', n:180, lvl:'A1',
    r:{ pres:['écri','écriv','écriv'], ps:{rad:'écriv', t:'i'} } },
  { i:'décrire', es:'describir', g:3, aux:'avoir', pp:'décrit', n:181, lvl:'B1',
    r:{ pres:['décri','décriv','décriv'], ps:{rad:'décriv', t:'i'} } },
  { i:'lire', es:'leer', g:3, aux:'avoir', pp:'lu', n:182, lvl:'A1',
    r:{ pres:['li','lis','lis'], ps:{rad:'l', t:'u'} } },
  { i:'vivre', es:'vivir', g:3, aux:'avoir', pp:'vécu', n:183, lvl:'A2',
    r:{ pres:['vi','viv','viv'], ps:{rad:'véc', t:'u'} } },
  { i:'suivre', es:'seguir', g:3, aux:'avoir', pp:'suivi', n:184, lvl:'A2',
    r:{ pres:['sui','suiv','suiv'], ps:{rad:'suiv', t:'i'} } },
  { i:'boire', es:'beber', g:3, aux:'avoir', pp:'bu', n:185, lvl:'A1',
    r:{ pres:['boi','buv','boiv'], sub:['boiv','buv'], ps:{rad:'b', t:'u'} } },
  { i:'croire', es:'creer', g:3, aux:'avoir', pp:'cru', n:186, lvl:'A2',
    r:{ pres:['croi','croy','croi'], sub:['croi','croy'], ps:{rad:'cr', t:'u'} } },
  { i:'rire', es:'reír', g:3, aux:'avoir', pp:'ri', n:187, lvl:'A2',
    r:{ pres:['ri','ri','ri'], ps:{rad:'r', t:'i'} } },
  { i:'sourire', es:'sonreír', g:3, aux:'avoir', pp:'souri', n:188, lvl:'B1',
    r:{ pres:['souri','souri','souri'], ps:{rad:'sour', t:'i'} } },
  { i:'conduire', es:'conducir / manejar', g:3, aux:'avoir', pp:'conduit', n:189, lvl:'A2',
    r:{ pres:['condui','conduis','conduis'], ps:{rad:'conduis', t:'i'} } },
  { i:'construire', es:'construir', g:3, aux:'avoir', pp:'construit', n:190, lvl:'B1',
    r:{ pres:['construi','construis','construis'], ps:{rad:'construis', t:'i'} } },
  { i:'produire', es:'producir', g:3, aux:'avoir', pp:'produit', n:191, lvl:'B1',
    r:{ pres:['produi','produis','produis'], ps:{rad:'produis', t:'i'} } },
  { i:'traduire', es:'traducir', g:3, aux:'avoir', pp:'traduit', n:192, lvl:'B1',
    r:{ pres:['tradui','traduis','traduis'], ps:{rad:'traduis', t:'i'} } },
  { i:'détruire', es:'destruir', g:3, aux:'avoir', pp:'détruit', n:193, lvl:'B2',
    r:{ pres:['détrui','détruis','détruis'], ps:{rad:'détruis', t:'i'} } },
  { i:'connaître', es:'conocer', g:3, aux:'avoir', pp:'connu', n:194, lvl:'A1',
    r:{ pres:['connaî','connaiss','connaiss'], ps:{rad:'conn', t:'u'} },
    f:{ present:['connais','connais','connaît','connaissons','connaissez','connaissent'] } },
  { i:'reconnaître', es:'reconocer', g:3, aux:'avoir', pp:'reconnu', n:195, lvl:'B1',
    r:{ ps:{rad:'reconn', t:'u'} },
    f:{ present:['reconnais','reconnais','reconnaît','reconnaissons','reconnaissez','reconnaissent'] } },
  { i:'paraître', es:'parecer', g:3, aux:'avoir', pp:'paru', n:196, lvl:'B1',
    r:{ ps:{rad:'par', t:'u'} },
    f:{ present:['parais','parais','paraît','paraissons','paraissez','paraissent'] } },
  { i:'naître', es:'nacer', g:3, aux:'être', pp:'né', n:197, lvl:'A2',
    r:{ ps:{rad:'naqu', t:'i'} },
    f:{ present:['nais','nais','naît','naissons','naissez','naissent'] } },
  { i:'plaire', es:'gustar / agradar', g:3, aux:'avoir', pp:'plu', n:198, lvl:'B1',
    r:{ ps:{rad:'pl', t:'u'} },
    f:{ present:['plais','plais','plaît','plaisons','plaisez','plaisent'] } },
  { i:'battre', es:'golpear / vencer', g:3, aux:'avoir', pp:'battu', n:199, lvl:'B1',
    r:{ pres:['bat','batt','batt'], ps:{rad:'batt', t:'i'} } },

  /* --- -indre : el grupo que casi nadie enseña bien --------------------- */
  { i:'craindre', es:'temer', g:3, aux:'avoir', pp:'craint', n:200, lvl:'B1',
    t:'ir_nu', r:{ pres:['crain','craign','craign'], ps:{rad:'craign', t:'i'} } },
  { i:'joindre', es:'juntar / contactar', g:3, aux:'avoir', pp:'joint', n:201, lvl:'B2',
    t:'ir_nu', r:{ pres:['join','joign','joign'], ps:{rad:'joign', t:'i'} } },
  { i:'peindre', es:'pintar', g:3, aux:'avoir', pp:'peint', n:202, lvl:'B1',
    t:'ir_nu', r:{ pres:['pein','peign','peign'], ps:{rad:'peign', t:'i'} } },
  { i:'éteindre', es:'apagar', g:3, aux:'avoir', pp:'éteint', n:203, lvl:'B1',
    t:'ir_nu', r:{ pres:['étein','éteign','éteign'], ps:{rad:'éteign', t:'i'} } },
  { i:'atteindre', es:'alcanzar', g:3, aux:'avoir', pp:'atteint', n:204, lvl:'B2',
    t:'ir_nu', r:{ pres:['attein','atteign','atteign'], ps:{rad:'atteign', t:'i'} } },

  /* --- -oir ------------------------------------------------------------ */
  { i:'recevoir', es:'recibir', g:3, aux:'avoir', pp:'reçu', n:210, lvl:'A2',
    r:{ pres:['reçoi','recev','reçoiv'], fut:'recevr', sub:['reçoiv','recev'], ps:{rad:'reç', t:'u'} } },
  { i:'apercevoir', es:'percibir / divisar', g:3, aux:'avoir', pp:'aperçu', n:211, lvl:'B2',
    r:{ pres:['aperçoi','apercev','aperçoiv'], fut:'apercevr', sub:['aperçoiv','apercev'], ps:{rad:'aperç', t:'u'} } },
  { i:'valoir', es:'valer', g:3, aux:'avoir', pp:'valu', n:212, lvl:'B1',
    r:{ pres:['vau','val','val'], fut:'vaudr', sub:['vaill','val'], ps:{rad:'val', t:'u'} },
    f:{ present:['vaux','vaux','vaut','valons','valez','valent'] } },
  { i:'s’asseoir', es:'sentarse', g:3, aux:'être', pp:'assis', n:213, lvl:'B1', p:1,
    r:{ fut:'assiér', sub:'assey', ps:{rad:'ass', t:'i'} },
    f:{ present:['assieds','assieds','assied','asseyons','asseyez','asseyent'] } },
  { i:'pleuvoir', es:'llover (impersonal)', g:3, aux:'avoir', pp:'plu', n:214, lvl:'A2',
    imperso:1,
    f:{ present:['—','—','pleut','—','—','—'],
        imparfait:['—','—','pleuvait','—','—','—'],
        futur:['—','—','pleuvra','—','—','—'],
        conditionnel:['—','—','pleuvrait','—','—','—'],
        subjonctif:['—','—','pleuve','—','—','—'],
        passeSimple:['—','—','plut','—','—','—'],
        imperatif:['—','—','—'] } },

  /* --- pronominales de uso diario -------------------------------------- */
  { i:'se lever', es:'levantarse', g:1, aux:'être', pp:'levé', n:220, lvl:'A1', p:1,
    base:'lever', ortho:'e_er' },
  { i:'se laver', es:'lavarse', g:1, aux:'être', pp:'lavé', n:221, lvl:'A1', p:1, base:'laver' },
  { i:'se coucher', es:'acostarse', g:1, aux:'être', pp:'couché', n:222, lvl:'A1', p:1, base:'coucher' },
  { i:'se réveiller', es:'despertarse', g:1, aux:'être', pp:'réveillé', n:223, lvl:'A1', p:1, base:'réveiller' },
  { i:'s’habiller', es:'vestirse', g:1, aux:'être', pp:'habillé', n:224, lvl:'A1', p:1, base:'habiller' },
  { i:'se dépêcher', es:'apurarse', g:1, aux:'être', pp:'dépêché', n:225, lvl:'A2', p:1, base:'dépêcher' },
  { i:'s’amuser', es:'divertirse', g:1, aux:'être', pp:'amusé', n:226, lvl:'A2', p:1, base:'amuser' },
  { i:'se souvenir', es:'acordarse', g:3, aux:'être', pp:'souvenu', n:227, lvl:'A2', p:1,
    r:{ pres:['souvien','souven','souvienn'], fut:'souviendr', sub:['souvienn','souven'], ps:{rad:'souv', t:'in'} } },
  { i:'s’appeler', es:'llamarse', g:1, aux:'être', pp:'appelé', n:228, lvl:'A1', p:1,
    base:'appeler', ortho:'eler' },
  { i:'se sentir', es:'sentirse', g:3, aux:'être', pp:'senti', n:229, lvl:'A2', p:1,
    r:{ pres:['sen','sent','sent'], ps:{rad:'sent', t:'i'} } },
  { i:'s’inquiéter', es:'preocuparse', g:1, aux:'être', pp:'inquiété', n:230, lvl:'B1', p:1,
    base:'inquiéter', ortho:'é_er' },
  { i:'se rendre compte', es:'darse cuenta', g:3, aux:'être', pp:'rendu compte', n:231, lvl:'B1', p:1,
    base:'rendre' }
];

/* Los verbos pronominales guardan su forma "desnuda" para conjugar:
   "se lever" conjuga el radical de "lever" y le pone el pronombre delante. */
window.VERBES.forEach(function (v) {
  if (v.p && v.base) v.i_conj = v.base;
});

/* Quitamos el duplicado de control que dejamos arriba a propósito */
window.VERBES = window.VERBES.filter(function (v) { return !v.dup; });
