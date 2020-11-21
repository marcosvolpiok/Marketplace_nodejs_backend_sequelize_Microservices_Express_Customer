const express = require('express'),
    morgan = require('morgan'),
    app = express(),
    bodyParser = require('body-parser');
    cors = require('cors'),
    Sequelize = require('sequelize');


try{
// importing routes
const indexRoutes = require('./routes/index');

app.use(bodyParser.json());


// settings
app.set('port', process.env.PORT || 4000);

app.use(cors());

// middlewares
app.use(morgan('dev'));
//app.use(express.urlencoded({extended: true}))


// routes
app.use('/', indexRoutes);


// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
}catch(e){
    console.log(`Exeption in server: ${e.message}`);
}