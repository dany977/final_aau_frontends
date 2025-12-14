import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Farm Profile</h1>

        <nav className="space-x-6">
          <Link to="/" className="hover:text-cyan-400">Home</Link>
          <Link to="/farms" className="hover:text-cyan-400">Farms</Link>
          <Link to="/animals" className="hover:text-cyan-400">Animals</Link>
          <Link to="/login" className="hover:text-cyan-400">Login</Link>
        </nav>
      </div>
    </header>
  );
}
