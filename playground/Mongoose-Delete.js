const {mongoose}=require('./../server/db/mongoose');
const {stud}=require('./../server/models/stud');
const {ObjectId}=require('mongodb');

stud.remove({name:'Hardik'}).then((stud)=>{
	console.log(stud);
});

//stud.findOneAndRemove({status:false}).then((stud)=>{
//	console.log(stud);
//});

stud.findByIdAndRemove('5a45f9df7bac492824fe6e24').then((stud)=>{
	console.log(stud);
});