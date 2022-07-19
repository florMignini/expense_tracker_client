import { Router } from "express";
import {
  registerUser,
  loginUser,
  getUser,
  getAllUsers,
  // getUserTransactions,
} from "../controllers/users.controller.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/users/register", registerUser);
router.post("/users/login", loginUser);
router.get("/users/getUser", protectRoute, getUser);
router.get("/users", getAllUsers);

// router.get("/users/getUser/transactions", protectRoute, getUserTransactions);

export default router;
