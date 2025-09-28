import React from "react";
import { useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const service = params.get("service") || "";

  return (
    <section className="py-16 px-8 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Book {service ? service.charAt(0).toUpperCase() + service.slice(1) : "a Service"}
      </h2>
      <form
        action="https://formspree.io/f/xjkenbpz"  // replace with real form ID
        method="POST"
        className="max-w-lg mx-auto space-y-4 bg-gray-50 p-6 rounded-xl shadow-lg"
      >
        <input
          type="hidden"
          name="service"
          value={service}
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border rounded px-4 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full border rounded px-4 py-2"
        />
        <textarea
          name="message"
          placeholder={`Describe your ${service || "service"} issue...`}
          required
          className="w-full border rounded px-4 py-2"
        ></textarea>
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-2 rounded shadow hover:bg-purple-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
