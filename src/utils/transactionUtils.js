import axios from "axios";

//create a new transaction
const createTransaction = async (newTransaction, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    "http://localhost:4000/transactions",
    newTransaction,
    config
  );
  return response.data;
};

//get transactions from a specific token user
const getTransactions = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(
    "http://localhost:4000/transactions",
    config
  );
  return response.data;
};

const deleteTransaction = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(
    `http://localhost:4000/transactions/${id}`,
    config
  );
  return response.data;
};

const updateTransaction = async (dataToUSe, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    `http://localhost:4000/transactions/${dataToUSe.idSelected}`,
    dataToUSe.newValues,
    config
  );
  console.log(response.data);
  return response.data;
};

export const transactionUtils = {
  createTransaction,
  getTransactions,
  deleteTransaction,
  updateTransaction,
};
