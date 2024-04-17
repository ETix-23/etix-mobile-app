const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    companyName:{
      type: String,
      required:true
    },
    pickup:{
        type: String,
        required:true
    },
    destination:{
        type: String,
        required:true
    },
    timeAvailable:{
    type:Date,
    required:true
    },
    price:{
        type:Number,
        required:true
    },
    busNo:{
        type :String,
        required:true
    }
})

const Ticket = mongoose.model("Ticket",ticketSchema);

module.exports =Ticket;