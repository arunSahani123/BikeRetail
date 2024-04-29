const mongoose=require("mongoose");
const plm=require("passport-local-mongoose")
require('dotenv').config();
const mongoURI = process.env.MONOGO_URI;
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.log('Error connecting to database');
    console.log(err);
  });
const userSchema=new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String
    
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  fullname:{
    type:String,
    required:true,
  },
  
  post:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'post',
  }],
});
userSchema.plugin(plm);

module.exports=mongoose.model('User',userSchema);
