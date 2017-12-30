//const MongoClient=require('mongodb').MongoClient;
const {MongoClient}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/student',(err,db)=>{
	if(err){
		return console.log("Error: "+err);
	}
	console.log("Success");
	
	//db.collection('stud').deleteMany({status:false}).then((result)=>{
	//	console.log(result);
	//});

	//db.collection('stud').deleteOne({status:false}).then((result)=>{
	//	console.log(result);
	//});

	db.collection('stud').findOneAndDelete({status:true}).then((result)=>{
		console.log(result);
	});
	//db.close(
});