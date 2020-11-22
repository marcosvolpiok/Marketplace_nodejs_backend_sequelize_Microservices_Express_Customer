const Sequelize = require('sequelize');
const sequelize = new Sequelize('servers_meli', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  define:{
    timestamps: false
  }
});

sequelize.authenticate()
.then(() => {
    console.log('MySQL connected');
})
.catch(err => {
    console.log('Error in MySQL connection');
});


module.exports = sequelize;
