//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//tells node we are creating an "express" server
var app = express();

//sets initial port. used in listener
var PORT = process.env.PORT || 8080 ;

//expose public directory to use the html docs
//app.use(express.static(path.join(_dirname, './app/public')));//

//sets up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
//require(path.join("app/routing/apiRoutes"))(app);//
require(path.join(__dirname, "app/routing/htmlRoutes"))(app);

//listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
})

