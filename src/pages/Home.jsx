import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-cyan-600 text-center mb-4">
          Farm Management System
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Manage farms, animals, and users in one platform
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            onClick={() => navigate("/farms")}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              Farms
            </h2>
            <p className="text-gray-600 text-sm">
              Manage farm profiles and locations.
            </p>
          </div>

          <div
            onClick={() => navigate("/animals")}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Animals
            </h2>
            <p className="text-gray-600 text-sm">
              Track animal health and ownership.
            </p>
          </div>

          <div
            onClick={() => navigate("/login")}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-purple-600 mb-2">
              Users
            </h2>
            <p className="text-gray-600 text-sm">
              Login and role-based access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
