const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("CountryActivities", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  });
};
