//var {mongoose} = require('./db/mongoose');
const validator=require('validator');
//var {mongoose} = require('C:/Users/lcom81_one/Desktop/NodeJs/mongodb/server/db/mongoose');
const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
const _=require('lodash');

var UserSchema=new mongoose.Schema({
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
      required:true
    },
    token:{ 
      type:String,
      required:true
    }
  }]
});

UserSchema.methods.toJSON=function(){
  var user=this;
  var userObject=user.toObject();
  return _.pick(userObject,['_id','email']);
};

UserSchema.methods.generateAuthToken=function(){
  var user=this;
  var access='auth';
  var token=jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();
  user.tokens.push({access,token});
  console.log(user.tokens);
  return user.save().then(()=>{
    return token;
  });
};
var user = mongoose.model('user', UserSchema);

module.exports={user}
