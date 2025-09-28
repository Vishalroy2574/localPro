import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
// import BookingForm from "./components/BookingForm";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Testimonials />
              {/* <BookingForm /> */}
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
