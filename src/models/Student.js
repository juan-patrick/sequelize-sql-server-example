const { Model, DataTypes } = require('sequelize');


class Student extends Model {
  static init(sequelize) {
    super.init({
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: DataTypes.STRING,
      personalEmail: {
        type: DataTypes.STRING,
        allowNull: false
      },
      institutionalEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ra: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, { sequelize })
  }

  static associate(models) {
    this.belongsToMany(models.Subject, { foreignKey: 'student_id', through: 'students_subjects', as: 'subjects' });
  }
};

module.exports = Student;

