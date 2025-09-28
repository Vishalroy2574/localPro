import React from "react";

function ContactForm() {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <form
        action="https://formspree.io/f/your_form_id" 
        method="POST"
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow"
      >
        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            name="name"
            required
            className="w-full mt-2 p-2 border rounded"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            required
            className="w-full mt-2 p-2 border rounded"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Message</span>
          <textarea
            name="message"
            required
            className="w-full mt-2 p-2 border rounded"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
