import React, { useEffect, useState } from "react";
import api from "../utils/axios";


export default function StatsCards() {
  const [stats, setStats] = useState({
    farms: 0,
    animals: 0,
    users: 0,
  });

  useEffect(() => {
    // TEMP MOCK (replace with backend later)
    setStats({
      farms: 120,
      animals: 3500,
      users: 45,
    });

    // REAL API (enable later)
    /*
    api.get("/dashboard/stats").then(res => {
      setStats(res.data);
    });
    */
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <h2 className="text-3xl font-bold text-teal-600">
          {stats.farms}+
        </h2>
        <p className="text-gray-600 mt-2">Registered Farms</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <h2 className="text-3xl font-bold text-blue-600">
          {stats.animals}+
        </h2>
        <p className="text-gray-600 mt-2">Animals Tracked</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <h2 className="text-3xl font-bold text-purple-600">
          {stats.users}+
        </h2>
        <p className="text-gray-600 mt-2">Active Users</p>
      </div>

    </div>
  );
}
