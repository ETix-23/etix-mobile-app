const express = require("express");
const {register,signIn,getAllUsers,updateUserProfile} = require("../controllers/userController")
const {authorizeRoles}= require("../middlewares/authMiddleware")


const router = express.Router();

router.get("/",getAllUsers)
router.post("/signup",register)
router.post("/signin",signIn)
router.put("/update/:id",updateUserProfile)

module.exports = router;
