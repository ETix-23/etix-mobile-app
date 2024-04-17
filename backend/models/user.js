const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:[8,"Password must be at least 8 characters"]
    },
    roles:{
        type:String,
        default:"client"
    }

})


const User= mongoose.model("User",userSchema);

module.exports =User;