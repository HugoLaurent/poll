require("dotenv").config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, { // En 2eme paramètre, on peut mettre des options de connexion
  define: { // Option de TOUS nos modèles
    createdAt: "created_at", // Pour TOUS nos modèles, le champs createdAt, en base, se nomme "created_at"
    updatedAt: "updated_at"
  },
  logging: (message) => { console.log(message); } // Permet de logger la requête SQL qui est effectivement passée par Sequelize à notre place
});

module.exports = sequelize;