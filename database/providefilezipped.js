var zipstream = require('zipstream');
var fs = require("fs");
var out = fs.createWriteStream('out.zip');
var zip = zipstream.createZip({ level: 1});
var providedfile = require("./resources/providedfile");

zip.pipe(out);

zip.addFile(fs.createReadStream('providedfile'), {name: '$NAMEOF_FILE' },
	    function() {
		    zip.finalize(function(written) {console.log("Your file" + written + "has been created and should be downloading"); })
	    };
module.exports = providefilezipped();
