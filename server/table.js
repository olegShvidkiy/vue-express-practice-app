const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "words",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
      },
      word: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      transcr: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      tableName: "words",
    }
  );
};
