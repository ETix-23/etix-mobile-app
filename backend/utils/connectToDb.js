const mongoose =require("mongoose")

const connection = {};

 exports.connectToDb = async () => {
  try {
    if(connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect('mongodb://127.0.0.1:27017/etix-db');
    connection.isConnected = db.connections[0].readyState
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
