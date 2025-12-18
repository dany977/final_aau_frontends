import React from "react";
import axios from "../utils/axios";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const data = [
  { month: "Jan", animals: 200 },
  { month: "Feb", animals: 450 },
  { month: "Mar", animals: 800 },
  { month: "Apr", animals: 1200 },
  { month: "May", animals: 1800 },
  { month: "Jun", animals: 2500 },
];

export default function AnimalsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="animals"
          stroke="#14b8a6"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
