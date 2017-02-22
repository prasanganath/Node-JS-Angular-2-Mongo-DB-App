var express = require('express')
var MongoClient = require('mongodb').MongoClient;
	var app = express()
	app.get('/', function (req, res) {
  		res.send('Hello World!')
	})
	// Retrieve


// Connect to the db
MongoClient.connect("mongodb://localhost:27017/mean-stack-app-db", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
	app.listen(3000, function () {
  		console.log('Example app listening on port 3000!')
	})


