import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Farms from "./pages/Farms";
import Animals from "./pages/Animals";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farms" element={<Farms />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
