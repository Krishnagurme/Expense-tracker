import React from "react";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const dataPointvalues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximun = Math.max(...dataPointvalues);
  return (
    <div className="flex flex-row items-end justify-between w-full gap-4 px-4 py-4 border border-purple-400 rounded-xl shadow-md bg-white">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
