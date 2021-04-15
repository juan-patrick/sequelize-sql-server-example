const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('user', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: DataTypes.STRING,
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});
