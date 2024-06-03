const express = require("express");
const {
  publishTickets,
  bookTicket,
  getTicketsByRoute,
} = require("../controller/ticketController");
const { checkAuth,authorizeRoles } = require("../middlewares/authMiddleware");

const router = express.Router();
router.use(checkAuth)

const ROLES = {
  ADMIN: "admin",
  DRIVER: "driver",
  CLIENT: "client",
};

router.post("/publish", publishTickets);
router.post("/book", bookTicket);
router.get("/:routeId", getTicketsByRoute);

module.exports = router;
