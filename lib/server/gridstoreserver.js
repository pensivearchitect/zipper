var uid = require('uid');
var gs = new mongodb.Gridstore(db, "providedfile", "w", {
	"content_type": "html",
	"metadata" :{
		"author": uid
	}.
		"chunk_size": 4096
});

module.exports= gs;
