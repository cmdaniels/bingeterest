var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/recent', function(req, res) {
  res.sendFile(__dirname + '/recent.html');
});

app.get('/bingeboard', function(req, res) {
  res.sendFile(__dirname + '/bingeboard.html');
});

app.get('/user/:uid', function(req, res) {
  res.sendFile(__dirname + '/user.html');
});

app.listen(process.env.PORT || 3000, function(){
  console.log('Bingeterest is listening on port ' + (process.env.PORT || 3000) + '!');
});
