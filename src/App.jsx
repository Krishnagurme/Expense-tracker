import React, { useState } from "react";
import Expense from "./componant/Expenses/Expense";
import Newexpense from "./componant/NewExpense/Newexpense";
// import ExpenseFilter from "./componant/Expenses/ExpenseFilter";

const DUMMY_Expense = [
  {
    date: new Date(2024, 4, 10),
    title: "Car Insurance",
    amount: 8234,
  },
  {
    date: new Date(2021, 6, 1),
    title: "Bike",
    amount: 5234,
  },
  {
    date: new Date(2022, 5, 6),
    title: "Gas",
    amount: 234,
  },
];

function App() {
  const [expense, setExpenses] = useState(DUMMY_Expense);

  const addnewexpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <div className="min-h-screen bg-[#e6f0e9] px-4 py-8 flex flex-col items-center space-y-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-green-900 text-center">
          Expense Tracker
        </h1>

        {/* Form Section */}
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-6">
          <Newexpense onaddnewexpense={addnewexpenseHandler} />
        </div>

        {/* Expense List Section */}
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Your Expenses
          </h2>
          <Expense items={expense} />
        </div>
      </div>
    </>
  );
}

export default App;
