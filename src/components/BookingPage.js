import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./NavBar";
import "../styles/Booking.css";

function Booking() {
  const location = useLocation();
  const { name, price } = location.state || {};
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed for ${name}\nCheck-in: ${checkInDate}\nCheck-out: ${checkOutDate}\nGuests: ${guests}`);
  };

  const calculatePrice = () => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const days = (checkOut - checkIn) / (1000 * 3600 * 24);
    if (days > 0) {
      const roomPrice = price * days * guests;
      setEstimatedPrice(roomPrice);
    } else {
      setEstimatedPrice(0);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid d-flex justify-content-center align-items-start pt-5" style={{ minHeight: "100vh" }}>
        <div className="card shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
          <div className="card-body">
            <h2 className="text-center mb-4">Booking Form</h2>
            <h5 className="card-title text-center">Room: {name}</h5>
            <p className="card-text text-center">Price per night: ${price}</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="checkin" className="form-label">Check-in Date</label>
                <input
                  type="date"
                  id="checkin"
                  className="form-control"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  required
                />
              </div>

              {/* Check-out Date */}
              <div className="mb-3">
                <label htmlFor="checkout" className="form-label">Check-out Date</label>
                <input
                  type="date"
                  id="checkout"
                  className="form-control"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="guests" className="form-label">Number of Guests</label>
                <input
                  type="number"
                  id="guests"
                  className="form-control"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  min="1"
                  max="5"
                  required
                />
              </div>

              <div className="mb-3">
                <button
                  type="button"
                  className="btn btn-secondary w-100"
                  onClick={calculatePrice}
                >
                  Calculate Estimated Price
                </button>
                {estimatedPrice > 0 && (
                  <div className="mt-3">
                    <p className="fw-bold">Estimated Price: ${estimatedPrice}</p>
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn-secondary w-100">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
