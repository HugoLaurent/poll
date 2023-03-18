// Toujours commencer par importer les variables d'environnement !
const dotenv = require("dotenv");

dotenv.config();

const express = require('express');


// on importe le router

const router = require('./src/routers/router');
const authRouter = require("./src/routers/authRouter");
const sessionMiddleware = require("./src/middlewares/sessionMiddleware");



// un peu de config
const PORT = process.env.PORT || 3000;

// Création de l'application express
const app = express();


// Configurer le view engine
app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(sessionMiddleware);

// servir les fichiers statiques qui sont dans "public"
app.use(express.static('public'));

// Notre body parser pour les requêtes POST
app.use(express.urlencoded({ extended: true }));


// routage !
app.use(router);
app.use(authRouter);



// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
