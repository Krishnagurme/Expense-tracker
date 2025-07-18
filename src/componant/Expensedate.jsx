function Expensedate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear(); // also note capital F
  return (
    <>
      <div className="bg-gray-800 flex flex-col rounded-md p-6  text-white m-1 ">
        <div className="font-bold text-3xl">{day}</div>
        <div className="font-semibold">{month}</div>
        <div>{year}</div>
      </div>
    </>
  );
}

export default Expensedate;
