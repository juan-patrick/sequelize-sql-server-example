const express = require('express');

const StudentController = require('./controllers/StudentController');
const StudentSubjectController = require('./controllers/StudentSubjectController');
const SubjectController = require('./controllers/SubjectController');

const routes = express.Router();

routes.get('/students', StudentController.index);
routes.post('/students', StudentController.store);

routes.get('/subjects', SubjectController.index);
routes.post('/subjects', SubjectController.store);

routes.get('/users/:userId/subjects', StudentSubjectController.index);
routes.post('/users/:userId/subjects/:subjectId', StudentSubjectController.store);

module.exports = routes;