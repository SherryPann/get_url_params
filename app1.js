var express = require('express');
var app = express();
app.get("/data",function(req,res){
  res.send(req.query);
});

app.listen(3000);
console.log('Listening on port http://localhost:3000');
