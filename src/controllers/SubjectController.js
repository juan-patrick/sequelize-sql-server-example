const Subject = require('../models/Subject');

module.exports = {
  async index(req, res) {
    const subjects = await Subject.findAll();

    return res.json(subjects);
  },
  async store(req, res) {
    const { name, sigaCode, classesPerWeek } = req.body;

    const subject = await Subject.create({ name, sigaCode, classesPerWeek });

    return res.json(subject);
  },
}