var express = require('express')
   , app    = express()
   , path   = require('path');

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname + '/public')));

app.listen(app.get('port'), function () {
	console.log(' 127.0.0.1:'+ app.get('port') + ' Serving statics files in public');
});
