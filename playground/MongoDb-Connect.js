//const MongoClient=require('mongodb').MongoClient;
const {MongoClient}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/student',(err,db)=>{
	if(err) return console.log("Error: "+err);
	console.log("Success");
	db.collection('stud').insertOne({
		_id:102,
		name:'XYZ',
		age:23,
		status:false
	},(err,result)=>{
		if(err){
			return console.log(err);
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	});
	db.close();
});