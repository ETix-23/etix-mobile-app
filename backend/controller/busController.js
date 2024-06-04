const Bus = require('../models/bus');
const Company = require('../models/company.model');
const BusLocation = require('../models/busLocation');
const io = require('socket.io')(process.env.PORT);  // Adjust the port as needed
const moment = require('moment')
// Initialize WebSocket connection
io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

exports.getAllBuses = async (req,res)=>{
  try{

    const buses = await Bus.find();
    res.status(200).json({buses})
  }
  catch(err){
      console.error(err)
      res.status(500).json({error:"Internal Server Error"})
  }
}


// Add a new bus
exports.addBus = async (req, res) => {
  try {
    const { origin,destination,departureTime,arrivalTime,plateNo,numberOfTickets,price ,companyId} = req.body;

    const parsedDepartureTime = moment(departureTime, "h:mm A").toDate();
    const parsedArrivalTime = moment(arrivalTime, "h:mm A").toDate();

    


 const transportCompany= await Company.findById(companyId)
 if (!transportCompany) {
   return res
    .status(400)
    .json({ message: "Company not found" });
 }
    const bus = new Bus({
      origin,
      destination,
      departureTime:parsedDepartureTime,
      arrivalTime:parsedArrivalTime,
      plateNo,
      numberOfTickets,
      price,
      transportCompany,
    });
    await bus.save();
    res.status(201).json({ message: 'Bus added successfully', bus });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update bus information
exports.updateBus = async (req, res) => {
  try {
    const { busId } = req.params;
    const { plateNo} = req.body;
    const bus = await Bus.findByIdAndUpdate(busId, {
    
      plateNo
    }, { new: true });

    if (!bus) {
      return res.status(404).json({ message: 'Bus not found' });
    }

    res.status(200).json({ message: 'Bus updated successfully', bus });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteBus=async(req, res)=>{
  const { id } = req.params;
  try {
    await Bus.findByIdAndDelete(id);
    res.status(200).json({ message: "Route deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!!!" });
  }
}


exports.getBusById=async(req, res)=>{
  const { id } = req.params;
  try {
    const route = await Bus.findById(id);
    res.status(200).json({ route });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!!!" });
  }
}


exports.searchBusesByQuery=async(req, res)=>{
  const { origin, destination } = req.query;
  try {
    let query = {};
    if (origin) query.origin = { $regex: new RegExp(origin, 'i') }; // Case insensitive search
    if (destination) query.destination = { $regex: new RegExp(destination, 'i') }; // Case insensitive search
    const buses = await Bus.find(query);
    res.status(200).json({ buses });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
}






// Real-time location updates
exports.updateLocation = async (req, res) => {
  try {
    const { busId, latitude, longitude } = req.body;
    const busLocation = new BusLocation({
      bus: busId,
      latitude,
      longitude,
    });
    await busLocation.save();

    // Emit the location update to all connected clients
    io.emit('locationUpdate', busLocation);
    res.status(200).json({ message: 'Location updated successfully', busLocation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get bus location
exports.getLocation = async (req, res) => {
  try {
    const { busId } = req.params;
    const busLocation = await BusLocation.findOne({ bus: busId }).sort({ createdAt: -1 });

    if (!busLocation) {
      return res.status(404).json({ message: 'Bus location not found' });
    }

    res.status(200).json({ busLocation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

