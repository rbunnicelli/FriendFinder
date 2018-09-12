//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//tells node we are creating an "express" server
var app = express();

//sets initial port. used in listener
var PORT = process.env.PORT;

//sets up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
