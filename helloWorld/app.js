var express = require('express'),
	app = express();

app.get('/', function(req, res){
	res.send ('Hello world!');
});


app.get('*', function(req, res){
	res.send('PAge not found', 404);
});

app.listen(8080);
console.log('Express server listening on port 8080');
