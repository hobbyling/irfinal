// load the things we need
var express = require('express');
var firebase = require("firebase");  
var app = express();

//set the view engine to ejs 
//how we send a view to the user by using res.render(), res.render() will look in a views folder for the view, so we only have to define "page/index"
app.set('view engine', 'ejs');  
app.set('port', (process.env.PORT || 3000));

 //use res.render渲染 to load up an ejs view file 

 //index page
 app.get('/', function(req, res) {  
 	res.render('pages/index', { 
    });
 });


var server = app.listen(app.get('port'), function(){  
  console.log('Listening on port 3000');  
 });