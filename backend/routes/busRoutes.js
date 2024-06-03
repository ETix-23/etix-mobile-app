const express = require('express');

const {addBus,updateBus,getAllBuses}= require("../controller/busController")
const router= express.Router();

router.get('/', getAllBuses)
router.post('/',addBus)
router.patch('/:id',updateBus)


module.exports= router;