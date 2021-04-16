const { Model, DataTypes } = require('sequelize');


class User extends Model {
  static init(sequelize) {
    super.init({
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, { sequelize })
  }

  static associate() { }
};

module.exports = User;

