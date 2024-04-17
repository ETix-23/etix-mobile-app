const Tickets = require("../models/tickets");
const Bus= require("../models/bus")
const moment = require("moment");
const Ticket = require("../models/tickets");

const getAllTickets= async(req,res)=>{
  
    try {
        const links = await Tickets.find();
        res.status(200).json({links});
    } 
    catch (error) {
        res.status(400).json({error:error.message})
    }

}

const addTicket =async(req,res)=>{
   const {companyName,pickup,destination,timeAvailable,price,busNo} = req.body
    
//    let currentDate = new Date();
//    let decimalHoursToAdd = hoursTime;
//    let millisecondsInHour = 60 * 60 * 1000; // Number of milliseconds in an hour
//    let millisecondsToAdd = decimalHoursToAdd * millisecondsInHour;
//    let newTime = new Date(currentDate.getTime() + millisecondsToAdd);


//    // Format the time as "HH:MM AM/PM"
//    let formattedTime = newTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
 
//    console.log(formattedTime);

   const newTicket = await Tickets.create({
    companyName,
    pickup,
    destination,
    timeAvailable:moment(timeAvailable,'h:mm').toDate(),
    price,
    busNo
   })
   await newTicket.save();
   res.status(201).json({newTicket})

}

const removeTicket = async(req,res)=>{
    const {id} = req.params;
    
    try {
        await Tickets.findByIdAndDelete(id)
        res.status(200).json({message:"Ticket removed successfully"})
    } catch (error) {
        res.status(error.status).json({error:error.message})
    }


}

const updateTicket = async(req,res)=>{
    const {id} = req.params;
    const {companyName,pickup,destination,price,busNo} = req.body;
    try {
     const updatedTicket= await Tickets.findByIdAndUpdate(id,{
            companyName,
            pickup,
            destination,
            timeAvailable,
            price,
            busNo
 })

     updatedTicket.save();
     res.status(200).json({message:"Ticket updated successfully",updatedLink})
    } catch (error) {
        res.status(error.status).json({error:error.message})
    }
}


const searchTickets =async(req,res)=>{
const {pickup,destination} = req.query;
try {
    let query ={};
    if(pickup) query.pickup = pickup;
    if(destination) query.destination = destination;
    const tickets = await Tickets.find(query)
    res.status(200).json({tickets});
} 
catch (error) {
    res.status(400).json({error: error.message})
}
}

const bookTicket = async(ticketData,numberOfSeats)=>{
try {
     const parsedTime = moment(ticketData.timeAvailable,'h:mm A').toDate()
    ticketData.timeAvailable = parsedTime;
    

    const totalPrice = ticketData.price * numberOfSeats;
    console.log(totalPrice);
    const bus= await Bus.findById(ticketData.busNo);
    console.log(bus);
    if(!bus){
        throw Error("Bus not found");
    }
    if (bus.availableSeats < numberOfSeats){
        throw Error("No enough seats available in this bus");
    }
    const tickets = [];
    for(let i=0;i<numberOfSeats;i++){
        const ticket= new Ticket(ticketData);
        await ticket.save();
        tickets.push(ticket);
    }
    bus.availableSeats -= parseInt(numberOfSeats);
    await bus.save();

    return tickets;
} 
catch (error) {
    throw  error;
}
}
module.exports ={
    getAllTickets,
    addTicket,
     bookTicket,  
     updateTicket,
    searchTickets,

}
