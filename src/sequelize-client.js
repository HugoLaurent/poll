const dotenv = require("dotenv/config");
const pg = require('pg');

const { Sequelize } = require('sequelize');

// Ceci est une instance de connexion à la BDD Postgres (c'est notre "client")
const sequelize = new Sequelize(process.env.PG_URL, { 
  dialect: 'postgres',
  dialectModule: pg,
  define: {
    createdAt: "created_at", // Dans notre table, le champ 'createdAt' s'appelle `create_at`
    updatedAt: "updated_at" // Comme on va avoir plusieurs models, on peut aussi mettre cette liaison directement dans l'instance sequelize
  },
  logging: false
});

// Note : même pas besoin de faire le `connect()`. Par défaut, il se connecte à la base.


module.exports = sequelize;