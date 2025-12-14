import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-6"
      style={{ backgroundImage: "url('/image2.jpg')" }}
    >
      {/* Background overlay (behind content) */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-6xl bg-white/95 p-6 sm:p-10 rounded-2xl shadow-2xl"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-cyan-600 mb-3">
            Farm Management System
          </h1>
          <p className="text-gray-700 text-base sm:text-lg">
            Manage farms, animals, and users in one secure platform
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Farms */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
            onClick={() => navigate("/farms")}
          >
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              Farms
            </h2>
            <p className="text-gray-600 text-sm">
              Create, view, and manage farm profiles and locations.
            </p>
          </motion.div>

          {/* Animals */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
            onClick={() => navigate("/animals")}
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Animals
            </h2>
            <p className="text-gray-600 text-sm">
              Track animal health, breed, and ownership details.
            </p>
          </motion.div>

          {/* Users */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
            onClick={() => navigate("/login")}
          >
            <h2 className="text-xl font-semibold text-purple-600 mb-2">
              Users
            </h2>
            <p className="text-gray-600 text-sm">
              Secure login, user roles, and access management.
            </p>
          </motion.div>
        </div>

        {/* Call To Action */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-cyan-600 text-white rounded-xl shadow-md hover:bg-cyan-700 transition"
            onClick={() => navigate("/login")}
          >
            Login
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-gray-800 text-white rounded-xl shadow-md hover:bg-gray-900 transition"
            onClick={() => navigate("/farms")}
          >
            View Farms
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
