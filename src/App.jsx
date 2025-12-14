import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Farms from "./pages/Farms";
import Animals from "./pages/Animals";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";




export default function App() {
  return (

    <Router>
      {/* ✅ HEADER / NAVIGATION */}
      <Navbar />

      {/* ✅ PAGE CONTENT */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farms" element={<Farms />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>

      {/* ✅ FOOTER */}
      <Footer />
    </Router>
  );
}
