const express = require("express");
const {
  register,
  signIn,
  getAllUsers,
  updateUserProfile,
  getUserByEmail
} = require("../controller/authController");
// const {authorizeRoles}= require("../middlewares/authMiddleware")

const router = express.Router();

router.get("/", getAllUsers);
router.post("/signup", register);
router.post("/signin", signIn);
router.get("/:email",getUserByEmail)
router.put("/update/:id", updateUserProfile);

module.exports = router;
