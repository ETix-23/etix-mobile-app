const express = require("express");
const router = express.Router();
const {checkAuth}= require("../middlewares/authMiddleware")
const {
  addRoute,
  deleteRoute,
  getRouteById,
  getRoutes,
  searchRoutesByQuery,
} = require("../controller/routeController");

router.get("/", getRoutes);
router.get("/search", searchRoutesByQuery);
router.get("/:id", getRouteById);

router.use(checkAuth)
router.post("/", addRoute);
router.delete("/:id", deleteRoute);

module.exports = router;
