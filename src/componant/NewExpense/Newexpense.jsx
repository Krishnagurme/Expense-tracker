import React from "react";
import ExpenseForm from "./ExpenseForm.jsx";

const Newexpense = (props) => {
  const saveExpenseDatahandler = (enteredExpensedata) => {
    const expenseData = {
      ...enteredExpensedata,
      id: Math.random().toString(),
    };
    //console.log(expenseData);

    props.onaddnewexpense(expenseData);
  };

  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} />
    </div>
  );
};

export default Newexpense;
