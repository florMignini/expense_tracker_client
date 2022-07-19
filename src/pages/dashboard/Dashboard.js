import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ImageContainer } from "./DashboardStyle";
import Resume from "../../components/balance/Balance";
import IncomeExpense from "../../components/incomeExpense/IncomeExpense";
import Transactions from "../../components/transactions/Transactions";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);
  const openSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ImageContainer>
      <Sidebar openSidebar={openSidebar} isOpen={isOpen} />
      <Navbar openSidebar={openSidebar} />
      <Resume />
      <IncomeExpense />
      <Transactions />
    </ImageContainer>
  );
}
