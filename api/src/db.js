require("dotenv").config();
const fs = require("node:fs");
const path = require("node:path");
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`,
  {
    logging: false,
    native: false,
    define: { timestamps: false, underscored: true },
  }
);

// Requerimos todos los modelos e injectamos la conneción a cada uno.
fs.readdirSync(path.join(__dirname, "models"))
  .filter((file) => file.endsWith(".js"))
  .map((file) => require(path.join(__dirname, "models", file)))
  .forEach((model) => model(sequelize));

// Definimos relaciones.
const { Activity, Country, CountryActivities } = sequelize.models;
Activity.belongsToMany(Country, {
  through: CountryActivities,
  targetKey: "isoCode",
  as: "countries",
});
Country.belongsToMany(Activity, {
  through: CountryActivities,
  sourceKey: "isoCode",
  as: "activities",
});

module.exports = {
  ...sequelize.models, // Modelos
  sequelize, // Instancia de sequelize
};
