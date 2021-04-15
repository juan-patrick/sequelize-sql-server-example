const Sequelize = require('sequelize');

const dbConfig = require('../config/database');
const UserModel = require('../models/User');

const sequelize = new Sequelize(dbConfig);

const User = UserModel(sequelize);

module.exports = { sequelize, User };