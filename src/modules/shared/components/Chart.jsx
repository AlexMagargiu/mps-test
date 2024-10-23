import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const dataTransformUtils = {
  formatDate: (dateString) => {
    const weekNumber = dateString.split("-")[1];
    return `Week ${weekNumber}`;
  },

  formatValue: (value) => `${value.toLocaleString()} units`,

  processData: (rawData) => {
    return rawData.map((item) => ({
      week: item.week,
      sales: Number(item.sales),
      production: Number(item.production),
    }));
  },
};

export default function Chart({
  data,
  title = "Weekly Sales and Production Data (Over 1 Year)",
}) {
  const processedData = useMemo(() => {
    return dataTransformUtils.processData(data);
  }, [data]);

  return (
    <div className="w-full max-w-4xl p-4 mx-auto">
      <h2 className="mb-4 text-xl font-semibold text-center">{title}</h2>
      <div className="w-full max-w-[40rem] p-4 bg-white rounded-lg shadow-delimitingShadow h-[25rem]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={processedData}
            margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis
              dataKey="week"
              tick={{ fill: "#666" }}
              tickFormatter={dataTransformUtils.formatDate}
            />
            <YAxis
              domain={[80, 160]}
              tick={{ fill: "#666" }}
              tickFormatter={dataTransformUtils.formatValue}
            />
            <Tooltip
              formatter={dataTransformUtils.formatValue}
              labelFormatter={dataTransformUtils.formatDate}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#FFB347"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="production"
              stroke="#4F46E5"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
