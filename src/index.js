const app = require('./app');

app.listen(3333 || process.env.PORT, () => {
  console.log({
    server: 'http://localhost:3333',
    database: 'sql-server',
    orm: 'sequelize'
  });
});