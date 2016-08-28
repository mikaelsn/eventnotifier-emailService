var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config');
var mailer = require('./mailer');

//Setup middleware.
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//REST HTTP Methods
app.post('/email', mailer.send);

app.listen(8081);
// console.log('App started on ' + appEnv.bind + ':' + appEnv.port);
console.log('App started on 8081 at ' + new Date().toISOString());