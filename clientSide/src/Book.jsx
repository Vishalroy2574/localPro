import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"; 

const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL;


export default function Book() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const serviceName = params.get("service");

  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const stateCity = {
    Uttar_Pradesh: ["Noida", "Greater Noida", "Meerut", "Gorakhpur"],
    Delhi: ["New Delhi", "South Delhi", "North Delhi"],
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedDistrict("");
  };

  return (
    <div className="container" style={{ padding: "50px 20px", maxWidth: 600 }}>
      <div className="card shadow-lg p-4 rounded-4 bg-dark text-light">
        <h2 className="mb-4 text-center">Book a {serviceName}</h2>
        <form action={formspreeUrl} method="POST" className="d-flex flex-column gap-3">
          <div className="form-floating">
            <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required />
            <label htmlFor="name">Your Name</label>
          </div>

          <div className="form-floating">
            <input name="address" type="text" className="form-control" id="address" placeholder="Address" required />
            <label htmlFor="address">Address</label>
          </div>

          <div className="form-floating">
            <input name="mobile" type="tel" className="form-control" id="mobile" placeholder="Mobile Number" required />
            <label htmlFor="mobile">Mobile Number</label>
          </div>

          <div className="form-floating">
            <select name="state" className="form-select" value={selectedState} onChange={handleStateChange} required>
              <option value="">Select State</option>
              {Object.keys(stateCity).map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            <label>Select State</label>
          </div>

          <div className="form-floating">
            <select name="city" className="form-select" value={selectedDistrict} onChange={e => setSelectedDistrict(e.target.value)} required>
              <option value="">Select City</option>
              {selectedState && stateCity[selectedState].map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <label>Select City</label>
          </div>

          <div className="row g-3">
            <div className="col">
              <input name="date" type="date" className="form-control" required />
            </div>
            <div className="col">
              <input name="time" type="time" className="form-control" required />
            </div>
          </div>

          <input name="service" type="hidden" value={serviceName} />

          <button type="submit" className="btn btn-primary btn-lg mt-3">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
}
