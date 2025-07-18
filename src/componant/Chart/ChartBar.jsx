import React from "react";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="flex flex-col items-center border border-blue-300 rounded-lg bg-cyan-100 px-1 py-2 shadow-sm">
      <div className="relative flex items-end" style={{ height: '60px', width: '10px' }}>
        <div
          className="bg-gradient-to-t from-blue-400 to-blue-300 rounded-full transition-all duration-500 w-full shadow-md"
          style={{ height: barFillHeight, minHeight: '4px', width: '10px', position: 'absolute', bottom: 0 }}
        ></div>
      </div>
      <div className="mt-1 text-[11px] font-semibold text-blue-700 text-center">
        {props.label}
      </div>
    </div>
  );
};

export default ChartBar;
