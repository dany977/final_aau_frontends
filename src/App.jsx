import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Farms from "./pages/Farms";
import Home from "./pages/Home";
import axios from "axios";
// inside <Routes> component
import Animals from "./pages/Animals";
import AnimalDetail from "./pages/AnimalDetail";


axios.defaults.withCredentials = true;


const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="w-full h-full absolute min-h-screen bg-gray-200 from-blue-400 to-emerald-400">
       <header className=" flex justify-between items-center text-black pr-6 px-6 px-8 md:px-32 bg-white drop-shadow-md">
        
       </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/animals/:id" element={<AnimalDetail />} />

          <Route
            path="/farms"
            element={
              <ProtectedRoute>
                <Farms />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      
      
      </div>

    </BrowserRouter>
  );
}

export default App;
