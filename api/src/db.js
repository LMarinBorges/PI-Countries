require("dotenv").config();
const fs = require("node:fs");
const path = require("node:path");
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`,
  { logging: false, native: false, define: { timestamps: false } }
);

// Requerimos todos los modelos e injectamos la conneción a cada uno.
fs.readdirSync(path.join(__dirname, "models"))
  .filter((file) => file.endsWith(".js"))
  .map((file) => require(path.join(__dirname, "models", file)))
  .forEach((model) => model(sequelize));

// Definimos relaciones.
const { Activity, Country } = sequelize.models;
Activity.belongsToMany(Country, {
  through: "country_activities",
  as: "countries",
});
Country.belongsToMany(Activity, {
  through: "country_activities",
  as: "activities",
});

module.exports = {
  ...sequelize.models, // Modelos
  sequelize, // Instancia de sequelize
};
