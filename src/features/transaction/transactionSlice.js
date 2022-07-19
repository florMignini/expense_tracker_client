import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { transactionUtils } from "../../utils/transactionUtils";

const initialState = {
  transactions: [],
  balance: 0,
  items: 0,
  isLoading: false,
};

export const getTransactions = createAsyncThunk(
  "transaction/getTransactions",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await transactionUtils.getTransactions(token);
    } catch (error) {
      console.log(error);
    }
  }
);
export const createTransaction = createAsyncThunk(
  "transaction/createTransaction",
  async (newTransaction, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await transactionUtils.createTransaction(newTransaction, token);
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteTransaction = createAsyncThunk(
  "transaction/deleteTransaction",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await transactionUtils.deleteTransaction(id, token);
    } catch (error) {
      return error.message;
    }
  }
);
export const updateTransaction = createAsyncThunk(
  "transaction/updateTransaction",
  async (dataToUSe, thunkAPI) => {
    console.log(dataToUSe);
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await transactionUtils.updateTransaction(dataToUSe, token);
    } catch (error) {
      return error.message;
    }
  }
);
const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    calculateBalance: (state) => {
      let balance = 0;
      state.transactions.forEach((transaction) => {
        balance += parseFloat(transaction.amount);
      });
      //formatting number into currency format
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

      balance = formatter.format(balance);
      state.balance = balance;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.length;
      })
      .addCase(createTransaction.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.items = action.payload.length;
        state.isLoading = false;
      })
      .addCase(getTransactions.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.transactions = [state.transactions, ...action.payload];
        state.items = action.payload.length;
        state.isLoading = false;
      })
      .addCase(updateTransaction.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.items = action.payload.length;
        state.isLoading = false;
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { calculateBalance } = transactionSlice.actions;
export default transactionSlice.reducer;
