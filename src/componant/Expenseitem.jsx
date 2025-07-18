import Expensedate from "./Expensedate";
import React, { useState } from "react";

function Expenseitem(props) {
  const [title, settitle] = useState(props.title);

  const clickhandler = () => {
    settitle("updated!!! ");
  };
  return (
    <>
      <div className="flex justify-between items-center bg-gray-100 border border-gray-300 shadow-sm rounded-lg px-4 py-3">
        <div className="flex items-center space-x-4">
          <Expensedate date={props.date} />
          <h2 className="text-lg font-semibold text-gray-800">{props.title}</h2>
        </div>

        <div className="flex items-center gap-3">
          <span className="bg-purple-700 text-white font-bold px-4 py-2 rounded-md">
            ₹{props.amount}
          </span>
          <button
            onClick={clickhandler}
            className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Change Title
          </button>
        </div>
      </div>
    </>
  );
}

export default Expenseitem;
