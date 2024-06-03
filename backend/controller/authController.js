const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET_KEY, { expiresIn: "3d" });
};

const register = async (req, res) => {
  try {
    const { name, phoneNumber, email, password } = req.body;

    if (!name || !phoneNumber || !email || !password)
      return res.status(400).json({ error: "Please fill all the fields" });

    const exists = await User.findOne({ email });

    if (exists) {
      throw Error("Email already in use");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name,
      phoneNumber,
      email,
      password: hashedPassword,
    });
    const token = createToken(newUser._id);
    res.status(201).json({ newUser, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw Error("Email doesn't exist");
    }

    if (!email || !password) {
      throw Error("All fields must have value");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw Error("Passwords don't match");
    }

    const token = await createToken(user._id);

    res.status(200).json({ user: user, token });
    return user;
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserByEmail = async (req,res)=>{
  const {email}= req.params
  try {
    
    const user= await User.findOne({email})
    res.status(200).json({user})
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const updateUserProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const { username, password, address } = req.body;
    const user = await User.find({});

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const updatedUser = await User.findByIdAndUpdate(id, {
      username,
      password: hash,
      address,
    });

    res.status(200).json({ updatedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  register,
  getAllUsers,
  getUserByEmail,
  signIn,
  updateUserProfile,
};
