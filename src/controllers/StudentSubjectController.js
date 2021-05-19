const Student = require('../models/Student');
const Subject = require('../models/Subject');

module.exports = {
  async indexSubjects(req, res) {
    const { studentId } = req.params;

    const student = await Student.findByPk(studentId, {
      include: {
        association: 'subjects',
        through: {
          attributes: []
        }
      }
    });

    return res.json(student);
  },
  async indexStudents(req, res) {
    const { subjectId } = req.params;

    const subject = await Subject.findByPk(subjectId, {
      include: {
        association: 'students',
        through: {
          attributes: []
        }
      }
    });

    return res.json(subject.students);
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

    return res.json({ student, subject });
  },
};