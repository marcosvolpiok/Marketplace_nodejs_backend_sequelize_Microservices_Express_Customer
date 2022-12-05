const express = require('express'),
    morgan = require('morgan'),
    app = express(),
    bodyParser = require('body-parser');
    cors = require('cors');

// importing routes
const indexRoutes = require('./routes/index');

const graphqlHTTP = require("express-graphql");
const schema = require("./graphql/schema");

//app.use(bodyParser.json());
app.use(express.json());

require('dotenv').config();

// settings
app.set('port', process.env.PORT || 4000);

app.use(cors());

// middlewares
app.use(morgan('dev'));
//app.use(express.urlencoded({extended: true}))


// routes
app.use('/', indexRoutes);

// error handler
app.use(function(err, req, res, next){
    res.status(400).json({error: err, message: err.message});
});

// Graphql
app.use(
    '/graphql',
    graphqlHTTP.graphqlHTTP((req) => {
      return {
        graphiql: true,
        schema,
        context: {
          req: req,
        }
      }
    })
)

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
