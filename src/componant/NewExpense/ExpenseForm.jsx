import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredtitle] = useState("");
  const [enteredamount, setEnteredamount] = useState("");
  const [enterdate, setEntereddate] = useState("");

  const titlechangeHandler = (event) => {
    setEnteredtitle(event.target.value);
  };

  const amountHandler = (event) => {
    setEnteredamount(event.target.value);
  };

  const datechangeHandler = (event) => {
    setEntereddate(event.target.value);
  };

  const submithandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredamount,
      date: new Date(enterdate),
      id: Math.random().toString(),
    };

    // console.log(expenseData); // check output in console

    props.onSaveExpenseData(expenseData); //imppppppppppp

    // Reset form fields
    setEnteredtitle("");
    setEnteredamount("");
    setEntereddate("");
  };

  return (
    <form
      onSubmit={submithandler}
      className="max-w-4xl mx-auto bg-gray-400 shadow-md rounded-xl p-6 mt-6 space-y-6"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Add New Expense
      </h2>

      <div className="flex flex-col md:flex-row md:items-end md:space-x-6 space-y-4 md:space-y-0">
        {/* Title Input */}
        <div className="flex-1">
          <label className="block text-lg font-bold text-gray-800 mb-1">
            Title
          </label>
          <input
            value={enteredTitle}
            onChange={titlechangeHandler}
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="e.g. Groceries"
          />
        </div>

        {/* Amount Input */}
        <div className="flex-1">
          <label className="block text-lg font-bold text-gray-800 mb-1">
            Amount
          </label>
          <input
            value={enteredamount}
            onChange={amountHandler}
            type="number"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="e.g. 500"
          />
        </div>

        {/* Date Input */}
        <div className="flex-1">
          <label className="block text-lg font-bold text-gray-800 mb-1">
            Date
          </label>
          <input
            value={enterdate}
            onChange={datechangeHandler}
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-200 mt-6 md:mt-0"
          >
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
