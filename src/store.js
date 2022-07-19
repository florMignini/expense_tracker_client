import { configureStore } from "@reduxjs/toolkit";
import transactionSlice from "./features/transaction/transactionSlice";
import authSlice from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionSlice,
    auth: authSlice,
  },
});
