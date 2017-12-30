// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/student', (err, db) => {
  	if (err) {
    	return console.log('Unable to connect to MongoDB server');
  	}
  	console.log('Connected to MongoDB server');
  	/*db.collection('stud').find({status:false}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log(err);
	});
  	db.collection('stud').find({name: 'Hemin'}).toArray().then((docs) => {
    	console.log(JSON.stringify(docs, undefined, 2));
 	});*/
  	db.collection('stud').find({age:{$age:60}}).count().then((c)=>{
		console.log('Total Recored = '+c);
	});
});
