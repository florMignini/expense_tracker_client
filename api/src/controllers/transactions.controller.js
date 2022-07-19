//transaction model import
import { Transaction } from "../models/Transaction.js";
import { User } from "../models/User.js";

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      limit: 10,
      where: { userId: req.user.id },
    });
    res.status(200).json(transactions);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTransaction = async (req, res) => {
  const { amount, operation, category, userId } = req.body;
  try {
    const newTransaction = await Transaction.create({
      amount,
      operation,
      category,
      userId: req.user.id,
    });
    res.status(200).json(newTransaction);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    await Transaction.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({ mesage: "transaction successfully deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTransaction = async (req, res) => {
  const { id } = req.params;

  const { amount, operation, category } = req.body;

  try {
    const transaction = await Transaction.findOne({
      where: {
        id,
      },
    });
    const user = await User.findOne({
      where: { id: req.user.id },
    });

    if (!user) {
      res.status(401).json(`User does not exist`);
    }
    if (transaction.userId !== user.id) {
      res.status(401).json(`user not allowed`);
    }

    transaction.amount = amount;

    transaction.operation = operation;

    transaction.category = category;

    const response = await transaction.save();
    res.sendStatus(200).json(`successfully updated`);
  } catch (error) {
    res.status(401);
  }
};
