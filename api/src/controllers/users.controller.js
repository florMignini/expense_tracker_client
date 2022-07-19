//user import model
import { User } from "../models/User.js";
//package imports
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { config } from "dotenv";
config();
const JWT_SECRET = process.env.JWT_SECRET;

export const registerUser = async (req, res) => {
  const { Fullname, email, password /* , confirmPassword  */ } = req.body;
  if (!Fullname || !email || !password /* || !confirmPassword */) {
    res.status(400);
    res.json(`information is missing`);
  }
  //validation for an existing user
  const userAlreadyExist = await User.findOne({
    where: { email },
  });
  console;
  if (userAlreadyExist) {
    res.status(400);
    res.json(`the user ${email} allready exist`);
  }
  //if the user doesn't exist and is created
  //hashing password
  var salt = await bcrypt.genSalt(10);
  var hash = await bcrypt.hash(password, salt);

  //user creation
  const newUser = await User.create({
    Fullname,
    email,
    password: hash,
  });
  //user cereation validation
  if (newUser) {
    res.status(201).json({
      Fullname,
      email,
      token: TOKEN(newUser.id),
    });
  } else {
    res.status(400);
    res.json(`unable to login, invalid data`);
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: { email },
  });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      email,
      token: TOKEN(user.id),
    });
  } else {
    res.status(400);
    res.json(`invalid data`);
  }
};
//generate de JWT token
const TOKEN = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "30d",
  });
};
//get user info after sending the valid token to initialize sesion @PRIVATE ROUTE
export const getUser = async (req, res) => {
  const { id, Fullname, email } = await User.findOne({
    where: { id: req.user.id },
  });

  res.status(200).json({
    id,
    Fullname,
    email,
  });
};

export const getAllUsers = async (req, res) => {
  const usersData = await User.findAll();
  return res.json(usersData);
};
