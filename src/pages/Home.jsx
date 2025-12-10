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
// }import FarmGrid from "../components/FarmGrid";

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <div className="relative">
        <img
          src="/assets/hero.jpg"    // <-- make sure this file exists
          className="w-full h-96 object-cover"
          alt="Farm Hero"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow">
          <h1 className="text-3xl font-bold text-center">
            Welcome to Farm Management System
          </h1>
          <p className="text-center text-gray-700">
            Manage your farms, animals and users.
          </p>
        </div>
      </div>

      {/* Farm Grid */}
      <div className="mt-10 p-6">
        <FarmGrid />
      </div>

    </div>
  );
}
