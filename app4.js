var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var server = require('http').createServer(app);

app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/urlencoded', function(req, res) {
  console.log(req.body);
  res.send(req.body);
});
app.listen(3000);
console.log('Listening on port http://localhost:3000');