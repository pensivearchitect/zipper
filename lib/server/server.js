var http = require("http");
var database = require("../database/databaseindex.js");

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'zip'});
	response.end(zippedfile);
	console.log("zipped file incoming")
});.listen(8124);


