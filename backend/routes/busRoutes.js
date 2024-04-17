const router = require("express").Router();
const {addBus,getBuses,getSingleBus} = require("../controllers/busController")


router.post("/add-bus",addBus);
router.get("/all",getBuses);
router.get("/get-buses/:id",getSingleBus);


module.exports = router;