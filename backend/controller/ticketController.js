const { Ticket } = require("../models/tickets.model");
const Route = require("../models/routes.model");
const moment = require("moment");
const QRcode= require('qrcode')

async function publishTickets(req, res) {
  try {
    const {
      routeId,
      departureTime,
      arrivalTime,
      price,
      
      numberOfTickets,
      date,
    } = req.body;
    const tickets = [];
    const parsedDepartureTime = moment(departureTime, "h:mm A").toDate();
    const parsedArrivalTime = moment(arrivalTime, "h:mm A").toDate();
    const parsedDate = new Date(date.split("-").reverse().join("-"));

    for (let i = 0; i < numberOfTickets; i++) {
      const ticket = new Ticket({
        route: routeId,
        departureTime: parsedDepartureTime,
        arrivalTime: parsedArrivalTime,
        price,
        date: parsedDate,
      });
      tickets.push(ticket);
    }
    await Ticket.insertMany(tickets);
    res.status(201).json({ message: "Tickets published successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error!!!" });
  }
}

async function getTicketsByRoute(req, res) {
  try {
    const routeId = req.params.routeId
    const tickets = await Ticket.find({ route: routeId });
    res.status(200).json(tickets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error!!!" });
  }
}


async function bookTicket(req, res) {
  try {
    const { routeId, departureTime, arrivalTime, price } = req.body;
    const parsedDepartureTime = moment(departureTime, "h:mm A").toDate();
    const parsedArrivalTime = moment(arrivalTime, "h:mm A").toDate();
    const route = await Route.findById(routeId);



    if (!route) {
      return res
        .status(400)
        .json({ message: "Route not found" });
    }

    const numberOfTickets = await Ticket.find({ route: routeId }).countDocuments();

    if (numberOfTickets >= route.numberOfTickets) {
      return res
       .status(400)
       .json({ message: "No more tickets available" });
    }

    const ticket = new Ticket({
      user: req.user,
      route: routeId,
      company:route.transportCompany,
      departureTime: parsedDepartureTime,
      arrivalTime: parsedArrivalTime,
      price,
    });
    console.log(ticket.user);

    await ticket.save();


    // Generating QR code with ticket details

    const qrCodeData={
      user: ticket.user,
      route:ticket.route,
      company:ticket.company,
      departureTime:ticket.departureTime,
      arrivalTime:ticket.arrivalTime,
      price:ticket.price,
      date:ticket.date,
      ticketId:ticket._id
    }
    const qrCodeUrl= await QRcode.toDataURL(JSON.stringify(qrCodeData))
  
 
    res.status(201).json({ ticket,qrCodeUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error!!!" });
  }
}

module.exports = {
  publishTickets,
  bookTicket,
  getTicketsByRoute
};
