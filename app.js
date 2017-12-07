/***********************************************************************************
This program generates a list of 10,000 unique numbers in random order
between 1 and 10,000 (inclusive).
Assumptions:
	1.The Numbers that will be generated is integer not a double/float.
	2.Allowed to use existing libraries

************************************************************************************/

var express = require('express');
var app = express();
var router = express.Router();
var randomGenerator = require(__dirname + '/randomGenerator.js');



router.get('/randomNumberGenerator', function(request, response) {
	var list = randomGenerator.listGenerator();
	response.setHeader('Content-Type', 'application/json');
	response.json(list);
});



var server = app.listen(8000, function() {

	var port = server.address().port;

	console.log('App is listening at port:',  port);

});

app.use('/', router);
