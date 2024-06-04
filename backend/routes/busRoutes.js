const express = require('express');

const {addBus,updateBus,getAllBuses,getBusById,searchBusesByQuery,deleteBus}= require("../controller/busController")
const router= express.Router();

router.get('/', getAllBuses)
router.post('/',addBus)
router.patch('/:id',getBusById)
router.get("/search",searchBusesByQuery)



module.exports= router;