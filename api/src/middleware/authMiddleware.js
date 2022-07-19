import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

import { config } from "dotenv";
config();
const JWT_SECRET = process.env.JWT_SECRET;

export const protectRoute = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, JWT_SECRET);

      req.user = await User.findOne({ where: { id: decoded.id } });
      next();
    } catch (error) {
      res.status(401);
      res.json(`not allowed sesion`);
    }
  }
  if (!token) {
    res.status(401);
    res.json(`no token detected, please login or sign in`);
  }
};
