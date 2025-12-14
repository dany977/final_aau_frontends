import { useEffect, useState } from "react";
import api from "../utils/axios";

export default function StatsCards() {
  const [stats, setStats] = useState({
    farms: 0,
    animals: 0,
    users: 0,
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const res = await api.get("/stats"); // backend later
        setStats(res.data);
      } catch (error) {
        console.warn("Backend not ready, using fallback numbers");

        // ✅ FALLBACK (your real numbers)
        setStats({
          farms: 4,
          animals: 0,
          users: 1,
        });
      }
    };

    loadStats();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
      <Card title="Farms" value={stats.farms} />
      <Card title="Animals" value={stats.animals} />
      <Card title="Users" value={stats.users} />
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-3xl font-bold text-teal-600 mt-2">{value}</p>
    </div>
  );
}
