import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-6"
      style={{
        backgroundImage: "url('/image2.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-5xl bg-white bg-opacity-95 p-10 rounded-2xl shadow-2xl"
      >
        {/* Title */}
        <h1 className="text-4xl font-bold text-cyan-600 text-center mb-4">
          Farm Management System
        </h1>

        <p className="text-gray-700 text-center text-lg mb-10">
          Manage farms, animals, and users in one platform
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Farms */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
            onClick={() => (window.location.href = "/farms")}
          >
            <h2 className="text-xl font-bold text-green-600">Farms</h2>
            <p className="text-gray-600 mt-2">
              Create, view, and manage farm information easily.
            </p>
          </motion.div>

          {/* Animals */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
            onClick={() => (window.location.href = "/animals")}
          >
            <h2 className="text-xl font-bold text-blue-600">Animals</h2>
            <p className="text-gray-600 mt-2">
              Track animal details, health, and ownership.
            </p>
          </motion.div>

          {/* Users */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
            onClick={() => (window.location.href = "/login")}
          >
            <h2 className="text-xl font-bold text-purple-600">Users</h2>
            <p className="text-gray-600 mt-2">
              User registration, roles, and access management.
            </p>
          </motion.div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-cyan-600 text-white rounded-xl shadow-md hover:bg-cyan-700 transition"
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-gray-800 text-white rounded-xl shadow-md hover:bg-gray-900 transition"
            onClick={() => (window.location.href = "/animals")}
          >
            View Animals
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
