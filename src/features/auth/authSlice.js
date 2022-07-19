import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authUtils } from "../../utils/authUtils";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//register user function
export const registerUser = createAsyncThunk("auth/register", async (user) => {
  try {
    return await authUtils.registerUser(user);
  } catch (error) {
    console.log(error);
  }
});

//login user function
export const loginUser = createAsyncThunk("auth/login", async (user) => {
  try {
    return await authUtils.loginUser(user);
  } catch (error) {
    console.log(error);
  }
});

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  await authUtils.logoutUser();
});
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
