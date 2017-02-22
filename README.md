MEAN STACK APPLICATION
Installing mongoDB

npm install mongodb --save

make db in mongo 

use mean-stack-app-db

added a code to app to check whether mongo db is connected correctly

MongoClient.connect("mongodb://localhost:27017/mean-stack-app-db", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});


dont forget to  insert  this on top of app

var MongoClient = require('mongodb').MongoClient;