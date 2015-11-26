const express = require('express'),
      app     = express();
      config  = require('./package.json');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index.js');
});

app.listen(config.port);
console.log('Listening on port ', config.port);
