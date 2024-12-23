import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import RoomAvailability from "./components/RoomAvailability";
import Booking from "./components/BookingPage";
import Contact from "./components/Contact";  
import LoginPage from "./components/Login";  
import SignUpPage from "./components/Signup";  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/RoomAvailability" element={<RoomAvailability />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
