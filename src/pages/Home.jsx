import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-100">
      
      {/* ===== HERO / STATS SECTION ===== */}
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          <div>
            <h2 className="text-4xl font-bold">
              <CountUp end={120} duration={2} />+
            </h2>
            <p className="mt-2 text-lg">Registered Farms</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              <CountUp end={3500} separator="," duration={2.5} />+
            </h2>
            <p className="mt-2 text-lg">Animals Tracked</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              <CountUp end={45} duration={2} />+
            </h2>
            <p className="mt-2 text-lg">Active Users</p>
          </div>

        </div>
      </div>

      {/* ===== LATEST UPDATES ===== */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Latest Updates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">
              🌱 New Farm Module
            </h3>
            <p className="text-gray-600">
              Farm registration and editing is now faster and easier.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">
              🐄 Animal Tracking
            </h3>
            <p className="text-gray-600">
              Improved animal health and ownership tracking.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">
              🔐 Admin Roles
            </h3>
            <p className="text-gray-600">
              Admin users can now manage all system data.
            </p>
          </motion.div>

        </div>
      </div>

      {/* ===== CALL TO ACTION ===== */}
      <div className="bg-gray-900 text-white py-14">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Manage Your Farm Efficiently
          </h2>
          <p className="mb-6 text-gray-300">
            All farm, animal, and user management in one system
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-3 bg-teal-600 rounded-lg hover:bg-teal-700 transition"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/farms")}
              className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-800 transition"
            >
              View Farms
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
