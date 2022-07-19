import axios from "axios";

//register user
const registerUser = async (userData) => {
  const response = await axios.post(
    "http://localhost:4000/users/register",
    userData
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//login user
const loginUser = async (userData) => {
  const response = await axios.post(
    "http://localhost:4000/users/login",
    userData
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//logout user
const logoutUser = async () => {
  localStorage.removeItem("user");
};

export const authUtils = {
  registerUser,
  logoutUser,
  loginUser,
};
