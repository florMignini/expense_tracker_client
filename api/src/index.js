import express from "express";
import cors from "cors";
// database import
import { sequelize } from "./database/database.js";
import { config } from "dotenv";
config();
const PORT = process.env.PORT;

//routes import
import transactionsRoutes from "./routes/transactions.routes.js";
import usersRoutes from "./routes/users.routes.js";

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(transactionsRoutes);
app.use(usersRoutes);

const main = async () => {
  try {
    // database connection
    await sequelize.sync({ force: false });
    // server connection
    console.log(`database successfully connected`);
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Unable to connect to the database: ${error}`);
  }
};
// main function execution
main();
