import { Router } from "express";
import {
  createTransaction,
  getTransactions,
  deleteTransaction,
  updateTransaction,
} from "../controllers/transactions.controller.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/transactions", protectRoute, getTransactions);
router.post("/transactions", protectRoute, createTransaction);
router.put("/transactions/:id", protectRoute, updateTransaction);
router.delete("/transactions/:id", protectRoute, deleteTransaction);

export default router;
