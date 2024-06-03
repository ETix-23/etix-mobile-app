const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const transportRoutes = require("./routes/route");
const companyRoutes = require("./routes/companyRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const cors= require('cors')
const { authorizeRoles } = require("./middlewares/authMiddleware");

// const {authorizeRoles}= require("./middlewares/authMiddleware")

const app = express();
dotenv.config();
app.use(cors())
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("connected to db");
  app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
  });
});

app.get("/api/route", (req, res) => {
  // Respond with some sample data
  res.json({
    message: "This is the /api/routes endpoint",
    data: [
      { id: 1, name: "Route 1" },
      { id: 2, name: "Route 2" },
      // Add more routes as needed
    ]
  });
});
const ROLES = {
  ENTITY_MANAGER: "entity_manager",
  DRIVER: "driver",
  CLIENT: "client",
};

app.use("/api/users", authRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/routes", transportRoutes);
app.use("/api/companies",authorizeRoles(ROLES.ENTITY_MANAGER), companyRoutes);
