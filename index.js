// Toujours commencer par importer les variables d'environnement !
const path = require('path');
const dotenv = require("dotenv");
dotenv.config();

const express = require('express');


// on importe le router et mw

const router = require('./src/routers/router');
const sessionMiddleware = require("./src/middlewares/sessionMiddleware");
const middleware404 = require("./src/middlewares/404");
const authentifyRequestMiddleware = require("./src/middlewares/authentifyRequestMiddleware");
const loadToLocals = require("./src/middlewares/memoryLocals");


// un peu de config
const PORT = process.env.PORT || 3000;

// Création de l'application express
const app = express();
app.use(sessionMiddleware);

// Configurer le view engine
app.set('view engine', 'ejs');
app.set('views', 'src/views');


app.use(authentifyRequestMiddleware);

//Crée un guest
app.use(loadToLocals);

// servir les fichiers statiques qui sont dans "public"
app.use(express.static('public'));

// Notre body parser pour les requêtes POST
app.use(express.urlencoded({ extended: true }));

// routage !
app.use(router);



// Middleware de 404
router.use(middleware404);

// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});