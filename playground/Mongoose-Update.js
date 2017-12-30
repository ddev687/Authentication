const {mongoose}=require('./../server/db/mongoose');
const {stud}=require('./../server/models/stud');
const {ObjectId}=require('mongodb');
const _=require('lodash');

stud.findOneAndUpdate(
	{name:'Hemin'},
	{$set:{name:'Hardik',status:true},$inc:{age:1}},
	{returnOriginal:false}).then((stud)=>{ console.log(stud)});