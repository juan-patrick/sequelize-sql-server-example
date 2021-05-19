const express = require('express');

const StudentController = require('./controllers/StudentController');
const StudentSubjectController = require('./controllers/StudentSubjectController');
const SubjectController = require('./controllers/SubjectController');

const routes = express.Router();

routes.get('/students', StudentController.index);
routes.get('/students/:studentId', StudentController.show);
routes.post('/students', StudentController.store);

routes.get('/subjects', SubjectController.index);
routes.post('/subjects', SubjectController.store);

routes.get('/students/:studentId/subjects', StudentSubjectController.indexSubjects);
routes.get('/students/subjects/:subjectI', StudentSubjectController.indexStudents);
routes.post('/students/:studentId/subjects/:subjectId', StudentSubjectController.store);

module.exports = routes;