const express=require('express');
const bodyParser=require('body-parser')
const {ObjectId}=require('mongodb');
const _=require('lodash');

var {mongoose} = require('C:/Users/lcom81_one/Desktop/NodeJs/mongodb/server/db/mongoose');
var {user} = require('./models/user');

var app=express();

app.use(bodyParser.json());

app.post('/users',(req,res)=>{
	var newUser = new user({
		name:req.body.name,
		email:req.body.email,
		password:req.body.password
	});
	newUser.save().then(()=>{
		return newUser.generateAuthToken();
	}).then((token)=>{
		res.header('x-auth',token).send(newUser);
	}).catch((e)=>{
		res.status(200).send(e);
	});
});

app.get('/users/:id',(req,res)=>{
	var id=req.params.id;
	if(!ObjectId.isValid(id)){
		return res.status(404).send();
		//return console.log("Invalid Id");
	}
	user.findById(id).then((user)=>{
		if(!user){
			return res.status(404).send();
		}
		res.send({user});
	}).catch((e)=>{
		res.status(400).send();
	})

});
app.listen(3000);

module.exports={app};