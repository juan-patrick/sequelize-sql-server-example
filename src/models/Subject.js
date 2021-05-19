const { Model, DataTypes } = require('sequelize');


class Subject extends Model {

  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sigaCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      classesPerWeek: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, { sequelize })
  }

  static associate(models) {
    this.belongsToMany(models.Student, { foreignKey: 'subject_id', through: 'students_subjects', as: 'students' });
  };
};

module.exports = Subject;