var mongodb = require("mongodb");
var providedfile = require("providedfilefromhttpserver");
var zipthefile = require("./providefilezipped");
var uid = require("uid");

function createfile (providedfile) {
	var filetobezipped = {UID:uid, {safe:true}, function(err, result) {}};
	db.collection.insert({filetobezipped, {safe:true}, function (err, result) {}});
};

function zipfile (filetobezipped) {

};

function updatefile (zippedfile) {
	collection.update({uid}, ($push:{providedfile:{zippedfile:1}}, {safe:true}, function(err, result) {}))

};


module.exports = databaseserverindex;
