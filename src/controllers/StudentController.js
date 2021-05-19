const Student = require('../models/Student');

module.exports = {
  async index(req, res) {
    const students = await Student.findAll();

    return res.json(students);
  },
  async show(req, res) {
    const student = await Student.findByPk(req.studentId);

    return res.json(student);
  },
  async store(req, res) {
    const { firstName, lastName, age, email, ra, institutionalEmail, personalEmail } = req.body;

    const student = await Student.create({ firstName, lastName, age, email, ra, institutionalEmail, personalEmail });

    return res.json(student);
  },
}