var express = require('express')
var app = express()
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/mean_stack_app_db');

mongoose.connection
	.once('open', () => {
		console.log('connectecd to db')
	})
	.on('error', (err) => {
		console.warn('Warning', err)
	});
app.get('/', function (req, res) {
	res.send('Hello World!')
})
// Retrieve


app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})