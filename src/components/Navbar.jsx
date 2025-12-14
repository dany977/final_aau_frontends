import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-cyan-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">Farm System</h1>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/farms">Farms</Link>
          <Link to="/animals">Animals</Link>
          <Link to="/login">Login</Link>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cyan-700 px-6 py-4 space-y-3">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/farms" onClick={() => setOpen(false)}>Farms</Link>
          <Link to="/animals" onClick={() => setOpen(false)}>Animals</Link>
          <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
}
