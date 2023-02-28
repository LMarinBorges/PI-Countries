const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Activity",
    {
      activityId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
      duration: {
        type: DataTypes.SMALLINT,
      },
      season: {
        type: DataTypes.SMALLINT,
        validate: {
          min: 0,
          max: 3,
        },
      },
    },
    { tableName: "activities", underscored: true }
  );
};
