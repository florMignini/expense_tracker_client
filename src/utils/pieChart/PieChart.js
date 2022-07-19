import React from "react";

import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

export default function PieChart() {
  const { transactions } = useSelector((store) => store.transactions);

  const expenses = transactions.filter((item) => item.operation === "expense");
  var sumAllExpenses = expenses
    .map((item) => parseFloat(item.amount))
    .reduce((prev, curr) => prev + curr, 0);

  const incomes = transactions.filter((item) => item.operation === "income");
  var sumAllIncomes = incomes
    .map((item) => parseFloat(item.amount))
    .reduce((prev, curr) => prev + curr, 0);

  var incomePorcentage = 50;
  var expensePorcentage = 50;
  var sumAllAmountData = sumAllIncomes + sumAllExpenses;
  if (sumAllAmountData !== 0) {
    incomePorcentage = Math.round((sumAllIncomes / sumAllAmountData) * 100);
    expensePorcentage = Math.round((sumAllExpenses / sumAllAmountData) * 100);
  }

  return (
    <Chart
      type="donut"
      width={250}
      height={250}
      series={[incomePorcentage, expensePorcentage]}
      options={{
        colors: ["#1864ab", "#00fa9a"],
        noData: {
          text: "Empty data",
        },
        labels: ["Income", "Expense"],
        tooltip: {
          enabled: true,
        },
        fill: {
          colors: ["#1864ab", "#00fa9a"],
          type: "solid",
        },
        markers: {
          colors: ["#d3f9d8"],
        },
        legend: {
          show: false,
        },
      }}
    ></Chart>
  );
}
