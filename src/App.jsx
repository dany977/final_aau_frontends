import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Farms from "./pages/Farms";
import Home from "./pages/Home";
import axios from "axios";

import Animals from "./pages/Animals";
import AnimalDetail from "./pages/AnimalDetail";

axios.defaults.withCredentials = true;

// ======================
// 🔐 PROTECTED ROUTE
// ======================
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="w-full h-full absolute min-h-screen bg-gray-200">
        <Routes>
          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Protected: MUST login to access */}
          <Route
            path="/farms"
            element={
              <ProtectedRoute>
                <Farms />
              </ProtectedRoute>
            }
          />

          <Route
            path="/animals"
            element={
              <ProtectedRoute>
                <Animals />
              </ProtectedRoute>
            }
          />

          <Route
            path="/animals/:id"
            element={
              <ProtectedRoute>
                <AnimalDetail />
              </ProtectedRoute>
            }
          />

          {/* 404 */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
