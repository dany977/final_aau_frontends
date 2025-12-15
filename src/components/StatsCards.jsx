import React, { useEffect, useState } from "react";
import axios from "../utils/axios";

function Card({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center">
      <h2 className="text-4xl font-bold text-teal-600">{value}</h2>
      <p className="text-gray-600 mt-2">{title}</p>
    </div>
  );
}

export default function StatsCards() {
  const [stats, setStats] = useState({
    farms: 0,
    animals: 0,
    users: 0,
  });

  useEffect(() => {
    axios
      .get("/dashboard/stats")
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => {
        console.error("Stats API error:", err);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
      <Card title="Registered Farms" value={stats.farms} />
      <Card title="Animals Tracked" value={stats.animals} />
      <Card title="Active Users" value={stats.users} />
    </div>
  );
}
