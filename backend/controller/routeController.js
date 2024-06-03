const Company = require("../models/company.model");
const Route = require("../models/routes.model");

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
    const { origin, destination, distance, duration,numberOfTickets,companyId } = req.body;
    const transportCompany= await Company.findById(companyId)
    if (!transportCompany) {
      return res
       .status(400)
       .json({ message: "Company not found" });
    }
    const route = new Route({
      origin,
      destination,
      distance,
      duration,
      numberOfTickets,
      transportCompany

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
