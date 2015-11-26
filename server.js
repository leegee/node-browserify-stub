var express = require('express');
var app = express();
var config = require('./package.json');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.listen(config.port);
console.log('Listening on port ', config.port);
