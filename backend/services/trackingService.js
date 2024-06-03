const BusLocation = require("../models/busLocation")

const io= require("socket.io")(process.env.PORT);

io.on("connection",(socket)=>{
    console.log("New Client connected");
    socket.on('disconnect',()=>{
        console.log("Client disconnected");
    })
})

exports.updateLocation = async (req,res)=>{
    const{busId,latitude,longitude}= req.body;
    const busLocation= new BusLocation({busId,latitude,longitude});
    await busLocation.save();

    io.emit('locationUpdate',busLocation);

    res.status(200).send('Location updated')
}