var express = require('express'),
	app  	= express(),
	fs 	= require('fs'),
	path	= require('path');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.use(function (req, res) {
	var filePath 	= '.' + req.url,
	 	contentType = 'text/html';

	if (filePath == './' || './public/views/index.tpl.html' ) 
		filePath = './public/views/index.tpl.html';

	fs.readFile(filePath, function(error, content) {
	    if (error) {
	        if(error.code == 'ENOENT'){
	            fs.readFile('./404.html', function(error, content) {
	                res.writeHead(200, { 'Content-Type': contentType });
	                res.end(content, 'utf-8');
	            });
	        }
	        else {
	            res.writeHead(500);
	            res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
	            res.end(); 
	        }
	    }
	    else {
	        res.writeHead(200, { 'Content-Type': contentType });
	        res.end(content, 'utf-8');
	    }
	});
});

app.listen(app.get('port'), function () {
	console.log(' 127.0.0.1:'+ app.get('port') + ' Serving statics files in public');
});
