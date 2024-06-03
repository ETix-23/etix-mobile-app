const Company = require("../models/company.model");
const Route = require("../models/routes.model");
const moment = require("moment");
const currencyConversionService = require('../services/currencyConversionService'); // This is a fictional service, you need to implement or use a real one
async function getRoutes(req, res) {
  try {
    const routes = await Route.find()
    res.status(200).json({ routes});
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!!!" });
  }
}

async function getRouteById(req,res){
  const {id}= req.params
  try {
    const route= await Route.findById(id)
    res.status(200).json({route})
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!!!" });
  }
}
async function addRoute(req, res) {
  


   
  try {
   
    const { origin, 
      destination,
      numberOfTickets,
      companyId,
      departureTime,
      arrivalTime,
      price,
      currency = 'USD',
       } = req.body;

       const parsedDepartureTime = moment(departureTime, "h:mm A").toDate();
       const parsedArrivalTime = moment(arrivalTime, "h:mm A").toDate();

        // Convert price to the desired currency
       const convertedPrice = await currencyConversionService.convert(price, currency);


    const transportCompany= await Company.findById(companyId)
    if (!transportCompany) {
      return res
       .status(400)
       .json({ message: "Company not found" });
    }
    const route = new Route({
      origin,
      destination,
      numberOfTickets,
      departureTime:parsedDepartureTime,
      arrivalTime:parsedArrivalTime,
      price:convertedPrice,
      currency,
      transportCompany:transportCompany._id,


    });
    await route.save();
    res.status(201).json({ message: "Route added successfully",route });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error!!!" });
  }
}
async function deleteRoute(req, res) {
  const { id } = req.params;
  try {
    await Route.findByIdAndDelete(id);
    res.status(200).json({ message: "Route deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!!!" });
  }
}

async function getRouteById(req, res) {
  const { id } = req.params;
  try {
    const route = await Route.findById(id);
    res.status(200).json({ route });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!!!" });
  }
}

async function searchRoutesByQuery(req, res) {
  const { origin, destination } = req.query;
  try {
    let query = {};
    if (origin) query.origin = origin;
    if (destination) query.destination = destination;
    const routes = await Route.find(query);
    res.status(200).json({ routes });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
}

module.exports = {
  addRoute,
  deleteRoute,
  getRouteById,
  getRoutes,
  searchRoutesByQuery,
  getRouteById
};
