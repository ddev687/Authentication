//const MongoClient=require('mongodb').MongoClient;
const {MongoClient}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/student',(err,db)=>{
	if(err){
		return console.log("Error: "+err);
	}
	console.log("Success");
	
	db.collection('stud').findOneAndUpdate(
		{name:'Hemin'},{
			$set:{
				name:'Hemin',status:false
			},
			$inc:{
				age:1
			}
		},{
			returnOriginal:false
		}).then((res)=>{
		console.log(res);
	});
});