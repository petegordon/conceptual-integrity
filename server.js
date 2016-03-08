var express = require('express')
var app = express()

var sqlite3 = require('sqlite3').verbose();


DatabaseConnection = new sqlite3.Database('./desire.db');

var MyObject = require('./desire/MyObject.js');
var ObjectDesire = require('./desire/ObjectDesire.js');
var MyDesire = require('./desire/MyDesire.js');

app.get('/', function (req, res) {
  var output = 'Hello World!';
  var breakStr = '</br></br>';
  output += breakStr;
  output += '<a href="http://localhost:3000/queryAllObjects/MyObject">All of My Objects</a>';
  output += breakStr;
  output += '<a href="http://localhost:3000/queryAllObjects/MyDesire">All of My Desires</a>';
  output += breakStr;
  output += '<a href="http://localhost:3000/queryAllObjects/ObjectDesire">All Objects of My Desires</a>';
  output += breakStr;
  output += '<a href="http://localhost:3000/queryObjectByPK/MyObject/1">A Specific Object</a>'
  output += breakStr;
  output += '<a href="http://localhost:3000/queryObjectByFK/ObjectDesire/MyObject/Id/1">My Desires of a specific Object</a>';
  output += breakStr;
  res.send(output);
})
app.post('/save/:object', function(req, res){
  console.log(req.params.object);
});
app.get('/queryObjectByPK/:object/:id', function(req, res){
  var obj = eval(req.params.object).queryByPrimaryKeyId(req.params.id);
  console.log(obj);
  console.log(req.params.object);
  console.log(req.params.id);
  res.send(obj);
});

app.get('/queryAllObjects/:object', function(req, res){
  console.log('all object');
  console.log(req.params);
  var objArray = eval(req.params.object).queryAll();
  console.log(objArray);
  console.log(req.params.object);
  res.send(objArray);
});

app.get('/queryObjectByFK/:object/:fkObject/:fkName/:fkId', function(req, res){
  console.log(req.params.object);
  console.log(req.params.fkObject);
  console.log(req.params.fkName);
  console.log(req.params.fkId);
  var objArray = eval(req.params.object+'.queryByForeignKey'+req.params.fkObject+req.params.fkName+'('+req.params.fkId+')');
  res.send(objArray);
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})