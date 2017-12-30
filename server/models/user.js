//var {mongoose} = require('./db/mongoose');
const validator=require('validator');
//var {mongoose} = require('C:/Users/lcom81_one/Desktop/NodeJs/mongodb/server/db/mongoose');
const mongoose = require('mongoose');
var user = mongoose.model('user', {
  name: {
    type: String,
    required:true,
    trim:true
  },
  email : {
  	type:String,
    required:true,
    trim:true,
    unique:true,
    validate:{
    		validator:validator.isEmail,
    		message:'{VALUE} is not valid'
    	}	
    },
  password: {
  	type:String,
    required:true,
    trim:true,
    minlength:8,
    maxlength:15
  },
  tokens:[{
  	access:{
  		type:String,
  		require:true
  	},
  	token:{
  		type:String,
  		require:true
  	}
  }]
});
module.exports={user}
