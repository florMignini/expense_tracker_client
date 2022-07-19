import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Transaction } from "./Transaction.js";

export const User = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Transaction, {
  foreignKey: "userId",
  sourceKey: "id",
});

Transaction.belongsTo(User, {
  foreignKey: "userId",
  targetId: "id",
});
