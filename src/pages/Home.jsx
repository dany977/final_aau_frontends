import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* HERO */}
      <section className="bg-cyan-600 text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Farm Management System
        </motion.h1>

        <p className="text-lg">
          Manage farms, animals and users efficiently
        </p>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <Feature title="🌾 Farms" desc="Track and manage farm profiles" />
        <Feature title="🐄 Animals" desc="Monitor livestock records" />
        <Feature title="👤 Users" desc="Role-based access control" />
      </section>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
