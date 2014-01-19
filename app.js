var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {

	// not really doing error handling
	if(err) throw err;
	
	// find one document in collection
	db.collection('coll').findOne({}, function(err, doc){
		// print result
		console.dir(doc);
		
		// tidy up
		db.close();
	});
	
	// say we're done
	console.dir("we called findOne()");
});