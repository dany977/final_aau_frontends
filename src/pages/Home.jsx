import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* HERO SECTION */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/image2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white bg-opacity-95 p-10 rounded-2xl shadow-2xl text-center max-w-4xl"
        >
          <h1 className="text-4xl font-bold text-cyan-600 mb-4">
            Farm Management System
          </h1>

          <p className="text-gray-700 text-lg mb-6">
            Manage farms, animals, and users from one centralized platform
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-6 py-3 bg-cyan-600 text-white rounded-xl hover:bg-cyan-700"
              onClick={() => (window.location.href = "/login")}
            >
              Login
            </button>

            <button
              className="px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900"
              onClick={() => (window.location.href = "/animals")}
            >
              View Animals
            </button>
          </div>
        </motion.div>
      </div>

      {/* FEATURES */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">System Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Farms",
              color: "text-green-600",
              desc: "Register and manage all farm information.",
              link: "/farms",
            },
            {
              title: "Animals",
              color: "text-blue-600",
              desc: "Track animals, breed, age, and ownership.",
              link: "/animals",
            },
            {
              title: "Users",
              color: "text-purple-600",
              desc: "User registration and role management.",
              link: "/login",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md cursor-pointer"
              onClick={() => (window.location.href = item.link)}
            >
              <h3 className={`text-xl font-bold ${item.color}`}>
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATISTICS */}
      <section className="bg-cyan-600 text-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-4xl font-bold">120+</h3>
            <p className="mt-2">Registered Farms</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">3,500+</h3>
            <p className="mt-2">Animals Tracked</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">45+</h3>
            <p className="mt-2">Active Users</p>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Latest Updates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg">🚜 New Farm Module</h3>
            <p className="text-gray-600 mt-2">
              Farm registration and editing is now faster.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg">🐄 Animal Tracking</h3>
            <p className="text-gray-600 mt-2">
              Improved animal health and ownership tracking.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg">🔐 Admin Roles</h3>
            <p className="text-gray-600 mt-2">
              Admin users can now manage all system data.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>
            © {new Date().getFullYear()} Farm Management System. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
