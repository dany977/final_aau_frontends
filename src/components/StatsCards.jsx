import React, { useEffect, useState } from "react";
import axios from "../utils/axios";

/* SIMPLE CARD COMPONENT */
function Card({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center">
      <h2 className="text-3xl font-bold text-teal-600">{value}</h2>
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
        console.warn("Using fallback stats (API not ready)");

        // ✅ FALLBACK (prevents white screen)
        setStats({
          farms: 4,
          animals: 12,
          users: 2,
        });
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      <Card title="Farms" value={stats.farms} />
      <Card title="Animals" value={stats.animals} />
      <Card title="Users" value={stats.users} />
    </div>
  );
}
