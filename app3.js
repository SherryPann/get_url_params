var express = require('express');
var app = express();
app.get("/a/:math",function(req,res){
  var n = req.params.math;
  var a = n.split(".")[0];
  res.send(a);
});
app.listen(3000);
console.log('Listening on port http://localhost:3000');
