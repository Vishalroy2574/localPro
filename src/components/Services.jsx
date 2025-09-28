import React from "react";
import { Link } from "react-router-dom";
import plumber from "../assets/plumber.png";
import electrician from "../assets/electrician.png";
import carpenter from "../assets/carpenter.png";
import cook from "../assets/cook.png";

const services = [
  { id: "plumber", name: "Plumber", desc: "Fix leaks, pipes, and plumbing issues.", img: plumber, color: "bg-blue-100", hover: "hover:bg-blue-200" },
  { id: "electrician", name: "Electrician", desc: "Wiring, repairs, and installations.", img: electrician, color: "bg-yellow-100", hover: "hover:bg-yellow-200" },
  { id: "carpenter", name: "Carpenter", desc: "Custom furniture, fittings, woodwork.", img: carpenter, color: "bg-green-100", hover: "hover:bg-green-200" },
  { id: "cook", name: "Cook", desc: "Hire chefs for home or events.", img: cook, color: "bg-pink-100", hover: "hover:bg-pink-200" },
];

function Services() {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <Link key={service.id} to={`/contact?service=${service.id}`} className="block">
            <div
              className={`p-6 rounded-xl shadow-md ${service.color} ${service.hover}
              transition transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl 
              flex flex-col items-center`}
            >
              <img src={service.img} alt={service.name} className="w-20 h-20 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">{service.name}</h3>
              <p className="text-gray-700 text-center mb-4">{service.desc}</p>
              <span className="inline-block mt-2 text-blue-700 font-medium hover:underline">
                Book Now →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Services;
