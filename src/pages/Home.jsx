import React from "react";
import { useNavigate } from "react-router-dom";
import StatsCards from "../components/StatsCards";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-white shadow">
        <h1 className="text-4xl font-bold text-cyan-600 mb-4">
          Farm Management System
        </h1>
        <p className="text-gray-600 max-w-xl">
          Manage farms, animals, and users in one modern digital platform
        </p>

        <div className="flex gap-4 mt-8">
          <button
            onClick={() => navigate("/farms")}
            className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700"
          >
            View Farms
          </button>

          <button
            onClick={() => navigate("/animals")}
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
          >
            View Animals
          </button>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-cyan-600 text-white">
        <StatsCards />
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-green-600 font-semibold text-lg">Farms</h3>
            <p className="text-gray-600 mt-2">
              Manage farm profiles and locations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-blue-600 font-semibold text-lg">Animals</h3>
            <p className="text-gray-600 mt-2">
              Track animal health and ownership.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-purple-600 font-semibold text-lg">Users</h3>
            <p className="text-gray-600 mt-2">
              Login and role-based access.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
