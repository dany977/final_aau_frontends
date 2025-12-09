import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const navigate = useNavigate();
  const location = useLocation();

  // Detect token change on route navigation
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-cyan-500 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-white font-bold text-xl">Farm Profile</h1>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-2xl md:hidden"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-10 text-black font-medium mx-auto">
          <Link to="/">Home</Link>

          {isLoggedIn && <Link to="/animals">Animals</Link>}
          {isLoggedIn && <Link to="/farms">Farms</Link>}
        </ul>

        {/* Desktop Login/Logout */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="hidden md:block px-3 py-1 bg-red-600 text-white rounded-md"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="hidden md:block px-3 py-1 bg-green-600 text-white rounded-md"
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="flex flex-col space-y-3 text-black font-medium bg-cyan-500 p-5 md:hidden">

          <Link to="/">Home</Link>

          {isLoggedIn && <Link to="/animals">Animals</Link>}
          {isLoggedIn && <Link to="/farms">Farms</Link>}

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="py-2 bg-red-600 text-white rounded-md"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="py-2 bg-green-600 text-white rounded-md"
            >
              Login
            </Link>
          )}
        </ul>
      )}
    </nav>
  );
}
