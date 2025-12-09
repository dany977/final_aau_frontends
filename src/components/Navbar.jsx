import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Update navbar whenever route changes
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">

        <Link to="/" className="text-2xl font-bold text-cyan-600">
          Farm
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-black font-medium">
          <Link to="/">Home</Link>
          <Link to="/animals">Animals</Link>
          <Link to="/farms">Farms</Link>
        </ul>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-white bg-cyan-500 px-4 py-2 rounded hover:bg-cyan-600"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-cyan-600 text-3xl"
          onClick={toggleMenu}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col space-y-3 text-black font-medium bg-cyan-500 p-5 md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/animals" onClick={() => setMenuOpen(false)}>Animals</Link>
          <Link to="/farms" onClick={() => setMenuOpen(false)}>Farms</Link>

          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="text-white bg-red-500 px-4 py-2 rounded"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-white bg-cyan-600 px-4 py-2 rounded"
            >
              Login
            </Link>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
