// Toujours commencer par importer les variables d'environnement !
require('dotenv').config();

const express = require('express');

// on importe le router
const router = require('./src/routers/router');


// un peu de config
const PORT = process.env.PORT || 3000;
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'src/views');



// servir les fichiers statiques qui sont dans "public"
app.use(express.static('public'));

// routage !
app.use(router);



// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
