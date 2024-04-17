const express= require('express');
const dotenv = require('dotenv')
const app = express();
const userRoutes = require("./routes/userRoutes")
const ticketRoutes = require("./routes/ticketRoutes");
const busRoutes= require("./routes/busRoutes")
const mongoose = require("mongoose")
const {checkAuth,authorizeRoles}= require("./middlewares/authMiddleware")
// Configuration of environment variables
dotenv.config()


// Middlewares
app.use(express.json())

app.use(checkAuth);
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Connected to DB");
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})

.catch(err =>console.log(err))



const ROLES = {
    ENTITY_MANAGER: 'entity_manager',
    DRIVER: 'driver',
    CLIENT: 'client'
};
app.use("/api/users",userRoutes);

app.use("/api/tickets",authorizeRoles(ROLES.CLIENT),ticketRoutes);
app.use("/api/bus",busRoutes)
