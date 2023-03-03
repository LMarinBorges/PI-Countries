const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Country",
    {
      isoCode: {
        type: DataTypes.STRING(3),
        validate: { len: 3 },
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flagImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        defaultValue: "None",
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING,
      },
      area: {
        type: DataTypes.INTEGER,
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      indexes: [
        {
          fields: ["iso_code"],
          using: "HASH",
        },
      ],
    }
  );
};
