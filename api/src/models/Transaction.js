import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Transaction = sequelize.define("transactions", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  amount: {
    type: DataTypes.DECIMAL(20, 2),
    allowNull: false,
  },
  operation: {
    type: DataTypes.ENUM("income", "expense"),
  },
  category: {
    type: DataTypes.ENUM(
      "grocery",
      "taxes",
      "health",
      "fitness",
      "travel",
      "beauty",
      "fun",
      "salary",
      "investment",
      "loans"
    ),
  },
});
