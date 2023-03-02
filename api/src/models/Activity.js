const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
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
        allowNull: false,
        validate: {
          min: 0,
          max: 3,
        },
      },
    },
    { tableName: "activities" }
  );
};
