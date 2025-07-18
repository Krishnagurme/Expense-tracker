import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter.jsx";
import ExpenseList from "./ExpenseList.jsx";
import ExpenseChart from "./ExpensesChart.jsx";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2025");

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear;
  });
  return (
    <>
      {/* <Expenseitem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />

      
      {/* {props.items.map((expense) => {
        return (
          <Expenseitem
            key={expense.id} // if we dont to these react would add div element in the last and update above all div according to it so it is not good so by giving id react know where to put new element.
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })} */}
      <ExpenseChart expenses={filteredExpenses} />

      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList items={filteredExpenses} />
    </>
  );
};

export default Expense;
