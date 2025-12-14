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
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl bg-white bg-opacity-90 p-10 rounded-2xl shadow-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-600 mb-4">
          Farm Management System
        </h1>

        <p className="text-gray-700 text-lg mb-8">
          Manage farms, animals, and users efficiently from one platform.
        </p>

        {/* Visible Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-lg"
          >
            <h2 className="text-xl font-bold text-green-600">Farms</h2>
            <p className="text-gray-600 mt-2">
              Register and manage farms easily.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-lg"
          >
            <h2 className="text-xl font-bold text-blue-600">Animals</h2>
            <p className="text-gray-600 mt-2">
              Track animals, breeds, and production.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-lg"
          >
            <h2 className="text-xl font-bold text-purple-600">Users</h2>
            <p className="text-gray-600 mt-2">
              Secure access for admins and users.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
