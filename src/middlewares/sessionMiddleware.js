const session = require("express-session");
const pgSession = require('connect-pg-simple')(session);
const { Client } = require("pg"); 

const client = new Client({
  user: 'jamn7947_userPoll',
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
});
client.connect();

const sessionMiddleware = session({
  store: new pgSession({
    pool : client, 
    tableName : 'user_session',
    createTableIfMissing: true
  }),
  secret: process.env.SESSION_SECRET, 
  resave: false, 
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === "prod", 
    expiration: 24 * 60 * 60 * 1000 //expire dans 24H
  }
});



module.exports = sessionMiddleware;
