import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Ensure both Link and useNavigate are imported
import "bootstrap/dist/css/bootstrap.min.css"; 
import "../Homepage.css";

function Homepage() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Remove isLoggedIn key from localStorage
    navigate("/login"); // Redirect to login page
  };

  if (!isLoggedIn) {
    return (
      <div className="homepage-container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
          <div className="container">
            <Link to="/" className="navbar-brand fw-bold fs-4 text-white">
              Quick<span className="text-warning">Stay</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/login" className="nav-link text-white">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link text-white">
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="hero-section d-flex justify-content-center align-items-center text-center">
          <div className="position-relative z-2 text-white">
            <h1 className="display-3 fw-bold mb-3">Luxurious Rooms</h1>
            <p className="lead mb-4">Deluxe Rooms Starting At $299</p>
            <Link to="/RoomAvailability" className="btn btn-warning btn-lg shadow-sm">
              View Rooms
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="homepage-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold fs-4 text-white">
            Quick<span className="text-warning">Stay</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/RoomAvailability" className="nav-link text-white">
                  Rooms
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/booking" className="nav-link text-white">
                  Booking
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="nav-link btn btn-link text-white">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="hero-section d-flex justify-content-center align-items-center text-center">
        <div className="position-relative z-2 text-white">
          <h1 className="display-3 fw-bold mb-3">Luxurious Rooms</h1>
          <p className="lead mb-4">Deluxe Rooms Starting At $299</p>
          <Link to="/RoomAvailability" className="btn btn-warning btn-lg shadow-sm">
            View Rooms
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
