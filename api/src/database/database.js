import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "expense_tracker",
  "postgres",
  "postgresecure",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
