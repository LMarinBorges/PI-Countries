require("dotenv").config();
const fs = require("node:fs");
const path = require("node:path");
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

// Leemos todos los archivos de la carpeta Models,
// los requerimos e injectamos la conexion (sequelize) a todos los modelos.
fs.readdirSync(path.join(__dirname, "models"))
  .filter((file) => file.endsWith(".js"))
  .map((file) => require(path.join(__dirname, "models", file)))
  .forEach((model) => model(sequelize));

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Activity, Country } = sequelize.models;

// Relaciones
Activity.belongsToMany(Country, { through: "CountryActivities" });
Country.belongsToMany(Activity, { through: "CountryActivities" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Country, Activity } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
