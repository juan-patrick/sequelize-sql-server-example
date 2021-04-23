const Student = require('../models/Student');
const Subject = require('../models/Subject');

module.exports = {
  async index(req, res) {
    const { studentId } = req.params;

    const student = await Student.findByPk(studentId, {
      include: {
        association: 'subjects',
        attributes: ['name'],
        through: {
          attributes: []
        }
      }
    });

    return res.json(student.subjects);
  },
  async store(req, res) {
    const { studentId, subjectId } = req.params;

    const student = await Student.findByPk(studentId);

    if (!student) {
      return res.status(400).json({ error: 'Student not found' });
    }

    const subject = await Subject.findByPk(subjectId);

    if (!subject) {
      return res.status(400).json({ error: 'Subject not found' });
    }

    await student.addSubject(subject);
    await subject.addStudent(student);

    return res.json({ student, subject });
  },
};