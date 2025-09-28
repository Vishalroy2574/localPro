import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white py-20 px-6 overflow-hidden">
      {/* Background Glow Circles */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-pink-400 opacity-20 rounded-full mix-blend-multiply blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-400 opacity-20 rounded-full mix-blend-multiply blur-3xl animate-pulse"></div>

      <div className="container mx-auto text-center max-w-3xl relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug mb-6 drop-shadow-lg">
          Hire <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Trusted</span> Local Professionals
        </h1>
        <p className="text-base md:text-lg text-purple-100 mb-8">
          Plumbers, electricians, carpenters, and cooks — all at your service.  
          Quick bookings. Trusted workers. Stress-free experience.
        </p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-3 rounded-full font-semibold text-base md:text-lg shadow-xl hover:from-yellow-300 hover:to-orange-400 transition duration-300"
        >
          Get Started →
        </Link>
      </div>
    </section>
  );
}

export default Hero;
