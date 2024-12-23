import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Navbar from "./NavBar"; 

function RoomAvailability() {
  const rooms = [
    { name: "Single Economy", price: 100, image: "/assets/images/room-1.jpeg", description: "A comfortable room for one person with basic amenities." },
    { name: "Single Basic", price: 150, image: "/assets/images/room-2.jpeg", description: "A basic room for solo travelers, offering essential features." },
    { name: "Single Standard", price: 250, image: "/assets/images/room-8.jpeg", description: "A standard room with a little more luxury." },
    { name: "Double Economy", price: 200, image: "/assets/images/room-4.jpeg", description: "A spacious room for two with standard amenities." },
    { name: "Double Deluxe", price: 300, image: "/assets/images/room-5.jpeg", description: "A luxurious double room with premium amenities." },
    { name: "Double Luxury", price: 400, image: "/assets/images/room-6.jpeg", description: "A top-tier double room offering the best luxury experience." },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  return (
    <div className="container my-5" style={{ paddingTop: "80px" }}>
      <Navbar />
      <h2 className="text-center mb-4 fw-bold">Rooms Available</h2>
      <div className="row">
        {rooms.map((room, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div
              className="card h-100 shadow border-0 room-card"
              style={{ cursor: "pointer" }}
              onClick={() => handleRoomClick(room)}
            >
              <img
                src={room.image}
                alt={room.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{room.name}</h5>
                <p className="card-text fw-bold">${room.price} per night</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedRoom && showModal && (
        <div className="modal fade show" style={{ display: "block" }} id="roomDetailModal" tabIndex="-1" aria-labelledby="roomDetailModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="roomDetailModalLabel">
                  {selectedRoom.name} Details
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  className="img-fluid mb-3"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <p><strong>Description:</strong> {selectedRoom.description}</p>
                <p><strong>Price per Night:</strong> ${selectedRoom.price}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setShowModal(false)}>Close</button>
                <Link
                  to="/booking"
                  state={{ name: selectedRoom.name, price: selectedRoom.price }}
                  className="btn btn-primary"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoomAvailability;
