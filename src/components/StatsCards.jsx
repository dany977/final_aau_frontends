import React, { useEffect, useState } from "react";
import axios from "../utils/axios"; // you already have this

export default function StatsCards() {
  const [stats, setStats] = useState({
    farms: 0,
    animals: 0,
    users: 0,
  });

  useEffect(() => {
    axios.get("/dashboard/stats")
      .then(res => {
        setStats(res.data);
      })
      .catch(err => {
        console.error("Stats error:", err);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Farms" value={stats.farms} />
      <Card title="Animals" value={stats.animals} />
      <Card title="Users" value={stats.users} />
    </div>
  );
}
