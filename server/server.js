var http = require("http");
var database = require("../database/databaseindex.js");
var mongo = require('mongodb');
var mongoserver = mongo.Server;
var db = mongo.db;
var httpdb = new mongoserver('localhost', 27017, {auto_recconnect: true});
var register = new db ('filehandler', server);

db.open(function (err, db) {
	if(!err) P
		console.log("We are connected");
});
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'zip'});
	response.end(zippedfile);
	console.log("zipped file incoming");
});.listen(8124);


