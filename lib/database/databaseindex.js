var fs = require("fs");
var sunninja = require("./resources/sunninja.html");
var onRequest = require("../server/server.js");

fs.read(sunninja, "filetobezipped", 1, 64, null, onRequest);
