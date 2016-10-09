const fs = require('fs')
var path = require('path');

var winterPath = path.join(__dirname, 'winter.txt');
fs.readFile(winterPath, 'utf-8', function(err, content){
	if(err){
		console.log(err);
	}
	console.log(content);
});
console.log('Im called before winter outputs');