import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-white tracking-wide">
          Local<span className="text-yellow-300">Pro</span>
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <Link
            to="/"
            className="text-white font-medium hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-white font-medium hover:text-yellow-300 transition duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition duration-300"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
