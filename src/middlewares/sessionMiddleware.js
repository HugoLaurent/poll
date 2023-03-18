const session = require("express-session");

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET, // Quand on gènère l'ID de la session, on utilise un seed different afin de rendre plus difficile de deviner les uuid de session
  resave: false, // Pas la peine de réenregistrer la session s'il n'y a pas eu de changement dans l'objet
  saveUninitialized: true, // Enregistre les infos de la session même s'il n'y a rien dedans
  cookie: { secure: false } // On fait du HTTP pour le moment, donc secure false
});
// Toutes nos requêtes à notre app passent par la.
// Ce middleware :
// - il regarde si l'utilisateur transmet un cookie avec la sessionId.
//  - SI NON (première connexion au site) :
//    - il créé une SESSION (en mémoire RAM du serveur) : une boite qui contient des information.
//      - il choisit un ID pour cette session.
//    - il envoie l'ID de la session qu'il vient de créer au client (en passant par le header `Set-Cookie: sid=<cookie-value>;`)
//  - SI OUI (seconde connexion au site)
//    - On récupère la session dans la RAM
//    - et on greffe la session dans `req` (req.session)
//    - Si bien qu'on peut manipuler `req.session` dans le reste de l'application

// En plus, il rajoute qqch sur req :
// req.onSend(() => { saveSession(); })

module.exports = sessionMiddleware;
