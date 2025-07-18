import React from "react";
import Chart from "../Chart/Chart";
const ExpenseChart = (props) => {
  const chartDataPoint = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sept", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    const amount = typeof expense.amount === 'string' ? parseFloat(expense.amount) : expense.amount;
    chartDataPoint[expenseMonth].value += isNaN(amount) ? 0 : amount;
  }

  // Debug: log the chart data points
  console.log('Chart Data Points:', chartDataPoint);

  return <Chart dataPoints={chartDataPoint} />;
};

export default ExpenseChart;
