const Sequelize = require('sequelize');
const sequelize = new Sequelize('servers_meli', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
.then(() => {
    console.log('MySQL connected');
})
.catch(err => {
    console.log('Error in MySQL connection');
});


module.exports = sequelize;
