const Bus = require('../models/bus');
const BusLocation = require('../models/busLocation');
const io = require('socket.io')(process.env.PORT);  // Adjust the port as needed

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
    const { company_id,plateNo, numberOfSeats } = req.body;
    const bus = new Bus({
      company:company_id,
      plateNo,
      numberOfSeats,
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
