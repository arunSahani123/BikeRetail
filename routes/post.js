const mongoose=require('mongoose');
// const { create } = require('./users');
const postSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    userFull:{
        type:String,
        required:true,
    },
    Address:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    createAt:{
        type:Date,
        default:Date.now,

    },
    likes:{
        type:Array,
        default:[],
    },
});
module.exports=mongoose.model('post',postSchema);