import { useEffect, useState } from "react";
import axios from "axios";
export default function StatsCards() {
  const [stats, setStats] = useState({
    farms: 0,
    animals: 0,
    users: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const farmsRes = await api.get("/farms");
        const animalsRes = await api.get("/animals");
        const usersRes = await api.get("/users");

        setStats({
          farms: farmsRes.data.length,   // ✅ REAL COUNT
          animals: animalsRes.data.length,
          users: usersRes.data.length,
        });
      } catch (error) {
        console.error("Failed to load stats", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <h2 className="text-4xl font-bold text-green-600">
          {stats.farms}
        </h2>
        <p className="text-gray-600">Farms</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <h2 className="text-4xl font-bold text-blue-600">
          {stats.animals}
        </h2>
        <p className="text-gray-600">Animals</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <h2 className="text-4xl font-bold text-purple-600">
          {stats.users}
        </h2>
        <p className="text-gray-600">Users</p>
      </div>
    </div>
  );
}
