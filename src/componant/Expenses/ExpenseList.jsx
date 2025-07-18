import Expenseitem from "./Expenseitem";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className=" flex justify-center items-center w-full text-2xl font-bold">
        Found No Expenses
      </h2>
    );
  }

  return (
    <ul className="">
      {props.items.map((expense) => (
        <Expenseitem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
