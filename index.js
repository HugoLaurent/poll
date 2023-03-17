// Toujours commencer par importer les variables d'environnement !
const dotenv = require("dotenv");

dotenv.config();

const express = require('express');

// on importe le router

const router = require('./src/routers/router');


// un peu de config
const PORT = process.env.PORT || 3000;

// Création de l'application express
const app = express();


// Configurer le view engine
app.set('view engine', 'ejs');
app.set('views', 'src/views');



// servir les fichiers statiques qui sont dans "public"
app.use(express.static('public'));

// Notre body parser pour les requêtes POST
app.use(express.urlencoded({ extended: true }));
console.log(process.env.PG_URL)

// routage !
app.use(router);



// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
