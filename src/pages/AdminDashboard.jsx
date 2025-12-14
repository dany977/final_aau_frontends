import React from "react";
import StatsCards from "../components/StatsCards";
import AnimalsChart from "../components/AnimalsChart";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats */}
      <StatsCards />

      {/* Charts */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">
          Animals Registered (Monthly)
        </h2>
        <AnimalsChart />
      </div>
    </div>
  );
}
