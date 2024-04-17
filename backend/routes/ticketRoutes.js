const express = require("express");

const {getAllTickets,
    updateTicket,
    addTicket,
    searchTickets,
    bookTicket} = require("../controllers/ticketsController")


const router = express.Router();

router.get("/",getAllTickets)
router.post("/new",addTicket)
router.put("/update/:id",updateTicket)
router.get("/search",searchTickets)
router.post("/book", async (req, res) => {
    try {
        const { ticketData, numberOfTickets } = req.body;
        // Parse numberOfTickets to an integer
        const parsedNumberOfTickets = parseInt(numberOfTickets);
        if (isNaN(parsedNumberOfTickets) || parsedNumberOfTickets <= 0) {
            throw new Error("Invalid numberOfTickets value");
        }
        const bookedTickets = await bookTicket(ticketData, parsedNumberOfTickets);
        res.status(201).json({ bookedTickets });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;