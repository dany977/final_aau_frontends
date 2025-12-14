import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full min-h-screen">

      {/* HERO SECTION */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/image2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/90 p-10 rounded-2xl shadow-2xl text-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-600 mb-4">
            Farm Management System
          </h1>

          <p className="text-gray-700 text-lg mb-8">
            Manage farms, animals, and users efficiently from one platform.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => (window.location.href = "/farms")}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              View Farms
            </button>

            <button
              onClick={() => (window.location.href = "/animals")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              View Animals
            </button>
          </div>
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

          <FeatureCard
            title="Farms"
            color="text-green-600"
            text="Register and manage farms easily."
          />

          <FeatureCard
            title="Animals"
            color="text-blue-600"
            text="Track animals, breeds, and production."
          />

          <FeatureCard
            title="Users"
            color="text-purple-600"
            text="Secure access for admins and users."
          />
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">
            System Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatBox number="120+" label="Farms Registered" />
            <StatBox number="2,450+" label="Animals Tracked" />
            <StatBox number="35+" label="System Users" />
          </div>
        </div>
      </section>

    </div>
  );
}

/* ---------- Components ---------- */

function FeatureCard({ title, text, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-xl shadow-lg text-center"
    >
      <h3 className={`text-xl font-bold mb-2 ${color}`}>{title}</h3>
      <p className="text-gray-600">{text}</p>
    </motion.div>
  );
}

function StatBox({ number, label }) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl shadow text-center">
      <h3 className="text-4xl font-bold text-cyan-600">{number}</h3>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  );
}
