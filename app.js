var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.render('index', {
    signedIn: false
  });
});

app.get('/recent', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/login', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/post', function(req, res) {
  res.send(req.body);
});

app.listen(process.env.PORT || 3000, function(){
  console.log('Bingeterest is listening on port ' + (process.env.PORT || 3000) + '!');
});
