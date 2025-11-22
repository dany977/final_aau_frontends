
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-cyan-500 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left: Logo */}
        <h1 className="text-white font-bold text-xl">Farm Profile</h1>

        {/* Hamburger icon for mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-2xl md:hidden"
        >
          ☰
        </button>

        {/* Desktop Menu - Centered */}
        <ul className="hidden md:flex md:space-x-10 text-black font-medium mx-auto">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/animals" className="hover:text-white">Animals</Link>
          <Link to="/farms" className="hover:text-white">Farms</Link>
        </ul>

        {/* Desktop Logout Button */}
        <button
          onClick={handleLogout}
          className="hidden md:block px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Mobile Dropdown */}
      <ul
        className={`flex flex-col space-y-3 text-black font-medium bg-cyan-500 p-5 md:hidden transition-all duration-300 
        ${open ? "block" : "hidden"}`}
      >
        <Link to="/" className="py-2 hover:text-white">Home</Link>
        <Link to="/animals" className="py-2 hover:text-white">Animals</Link>
        <Link to="/farms" className="py-2 hover:text-white">Farms</Link>

        {/* Mobile logout */}
        <button
          onClick={handleLogout}
          className="py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </ul>
    </nav>
  );
}
