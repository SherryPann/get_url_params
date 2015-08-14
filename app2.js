var express = require('express');
var app = express();
var fs = require("fs");
app.get("/:name",function(req,res){
  var n = req.params.name;
  res.send(n);
});
app.listen(3000);
console.log('Listening on port http://localhost:3000');
