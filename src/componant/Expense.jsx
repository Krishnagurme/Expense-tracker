import React, { useState } from "react";
import Expenseitem from "./Expenseitem.jsx";
const Expense = (props) => {
  return (
    <>
      {/* <Expenseitem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />

      <Expenseitem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />
      <Expenseitem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      /> */}

      {props.items.map((expense) => {
        return (
          <Expenseitem
            key={expense.id} // if we dont to these react would add div element in the last and update above all div according to it so it is not good so by giving id react know where to put new element.
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </>
  );
};

export default Expense;
