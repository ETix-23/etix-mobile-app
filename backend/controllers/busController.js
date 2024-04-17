const Bus = require("../models/bus");

const addBus =async(req,res)=>{
  try{

      const {busNo,totalSeats,availableSeats}= req.body;
      const newBus= new Bus({
    busNo,
    totalSeats,
    availableSeats
      }) 
      await newBus.save();
      res.json({newBus})
  }
catch(error){
    res.json({error:error.message})
}
}

const getBuses =async(req,res)=>{
    const buses= await Bus.find();
    res.json({buses}).status(200)

}
const getSingleBus=async(req,res)=>{
   const {id}= req.params
   const bus= await Bus.findById(id);
   res.json({bus}).status(200)
}

module.exports ={
    addBus,
    getBuses,
    getSingleBus
}