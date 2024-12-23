import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUpPage() {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Here you can handle the sign-up logic (e.g., send data to server)
    if (formData.password === formData.confirmPassword) {
      // Assuming sign-up is successful, navigate to login page
      navigate('/login');
    } else {
      alert("Passwords do not match"); // Handle password mismatch
    }
  };

  return (
    <div>
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
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link text-white">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

      <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 pt-5">
        <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
          <h2 className="text-center mb-4">Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" name="email" onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="confirm-password" name="confirmPassword" onChange={handleInputChange} />
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          </form>
          <div className="text-center mt-3">
            <Link to="/login">Already have an account? Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
