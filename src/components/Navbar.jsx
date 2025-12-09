import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token")); // track token
  const navigate = useNavigate();

  useEffect(() => {
    // whenever token is removed, update navbar
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null); // update UI
    navigate("/login");
  };

  return (
    <nav className="bg-cyan-500 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <h1 className="text-white font-bold text-xl">Farm Profile</h1>

        <button
          onClick={() => setOpen(!open)}
          className="text-white text-2xl md:hidden"
        >
          ☰
        </button>

        {/* Center Menu */}
        <ul className="hidden md:flex md:space-x-10 text-black font-medium mx-auto">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/animals" className="hover:text-white">Animals</Link>
          <Link to="/farms" className="hover:text-white">Farms</Link>
        </ul>

        {/* Desktop Right Side */}
        {token ? (
          <button
            onClick={handleLogout}
            className="hidden md:block px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="hidden md:block px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col space-y-3 text-black font-medium bg-cyan-500 p-5 md:hidden">
          <Link to="/" className="py-2 hover:text-white">Home</Link>
          <Link to="/animals" className="py-2 hover:text-white">Animals</Link>
          <Link to="/farms" className="py-2 hover:text-white">Farms</Link>

          {token ? (
            <button
              onClick={handleLogout}
              className="py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Login
            </Link>
          )}
        </ul>
      )}
    </nav>
  );
}
