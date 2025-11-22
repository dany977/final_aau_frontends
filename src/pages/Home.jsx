// import React from "react";

// export default function Home() {
//   return (
//     <div className="w-full h-screen bg-gray-100 flex items-center justify-center px-6">
//       <div className="text-center max-w-2xl bg-white p-10 rounded-xl shadow-lg">
        
//         <h1 className="text-3xl font-bold text-cyan-600 mb-4">
//           Welcome to Farm Management System
//         </h1>

//         <p className="text-gray-600 text-lg mb-6">
//           Easily manage your farms, track animals, monitor productivity, and
//           organize daily farm operations — all in one place.
//         </p>

//         <div className="flex justify-center space-x-4 mt-6">
//           <a
//             href="/farms"
//             className="px-6 py-3 bg-cyan-500 text-white rounded-lg shadow-md hover:bg-cyan-600 transition"
//           >
//             View Farms
//           </a>

//           <a
//             href="/animals"
//             className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
//           >
//             View Animals
//           </a>
//         </div>

//       </div>
//     </div>
//   );
// }
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-6"
      style={{
    
         backgroundImage: "url('/image2.jpg')"
         
      }}
    >
      {/* Background overlay */}
      
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center max-w-3xl bg-white bg-opacity-90 p-10 rounded-2xl shadow-2xl"
      >
        <h1 className="text-4xl font-bold text-cyan-600 mb-4">
          Welcome to Farm Management System
        </h1>

        <p className="text-gray-700 text-lg mb-8">
          Manage your arms, Animals and Users
        </p>


        {/* Cards Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Farms Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition"
            onClick={() => (window.location.href = "/farms")}
          >
            <h2 className="text-xl font-bold text-cyan-600">Farms</h2>
            <p className="text-gray-600 mt-2">
              View and Manage farm             </p>
          </motion.div>

          {/* Animals Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition"
            onClick={() => (window.location.href = "/animals")}
          >
            <h2 className="text-xl font-bold text-blue-600">Animals</h2>
            <p className="text-gray-600 mt-2">
              Animal information
            </p>
          </motion.div>

          {/* Users Card
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition"
            onClick={() => (window.location.href = "/profile")}
          >
            <h2 className="text-xl font-bold text-green-600">Users</h2>
            <p className="text-gray-600 mt-2">
              View and manage users in the system.
            </p>
          </motion.div> */}
        </motion.div>
      </motion.div>
      
    </div>
  );
 
}
