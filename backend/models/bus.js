const mongoose = require("mongoose");
const busSchema = new mongoose.Schema({
    busNo:{
        type:String,
        required:true
    },
    totalSeats:{
        type:Number,
        required:true
    },
    availableSeats:{
        type:Number,
        required:true
    }
})

const Bus= mongoose.model("Bus",busSchema)
module.exports=Bus;