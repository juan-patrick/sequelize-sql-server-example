require('dotenv');
const app = require('./app');
const { sequelize } = require('./database');

sequelize.sync();

app.listen(3333 || process.env.PORT, () => {
  console.log({
    server: 'http://localhost:3333',
    database: 'sql-server',
    orm: 'sequelize'
  });
});