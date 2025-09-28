import React from "react";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Customer",
    review: "Booked a plumber in minutes. Excellent service and very professional!",
  },
  {
    name: "Priya Patel",
    role: "Customer",
    review: "The cook I hired was amazing, made our family dinner special.",
  },
  {
    name: "Ravi Kumar",
    role: "Customer",
    review: "Electrician fixed our wiring quickly. Highly recommend LocalPro!",
  },
];

function Testimonials() {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        What Our Customers Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg p-6 text-center transform transition hover:-translate-y-2 hover:shadow-xl"
          >
            <p className="text-gray-700 italic mb-4">“{t.review}”</p>
            <h4 className="font-semibold text-gray-900">{t.name}</h4>
            <span className="text-sm text-gray-500">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
