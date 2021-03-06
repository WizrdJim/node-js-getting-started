var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/cool', function(req, res) {
  res.send(cool());
});

app.get('/times', function(req, res) {
  var result = ''
  var times = process.env.TIMES || 5
  for (var i=0; i < times; i++)
    result += i + ' ';
  res.send(result);
}); 

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
