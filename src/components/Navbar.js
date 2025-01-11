import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar({ user, logout }) {
  // State to track if the navbar is toggled
  const [isNavbarExpanded, setNavbarExpanded] = useState(false);

  // Toggle function for the navbar
  const handleNavbarToggle = () => {
    setNavbarExpanded(!isNavbarExpanded);
  };

  return (
    <div className="container mb-4">
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg fixed-top ${isNavbarExpanded ? 'bg-dark' : ''}`} // Apply 'bg-dark' when expanded
        style={{ transition: 'background-color 0.3s ease' }} // Smooth transition for background change
      >
        <div className="container custom-font-brand">
          {/* Navbar title on the left */}
          <Link className="navbar-brand" to="/home">
            <img
              src="images/logo.png"
              alt="Karara eats logo"
              width="50"
              height="auto"
            />
            <span className="fs-5">
              &nbsp;Karara eats &nbsp; &nbsp;
              <img
                src="images/aus_flag.png"
                alt="USA Flag"
                width="40"
                height="auto"
                style={{ backgroundColor: '#001a33' }}
              />
            </span>
          </Link>
          {/* Navbar toggle button (burger icon) aligned to the right */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleNavbarToggle} // Toggle the state on click
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navbar menu, positioned to open from the left */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto custom-font">
              <li className="nav-item">
                <NavLink className="nav-link" to="/login" activeClassName="active">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sign_up" activeClassName="active">
                  Sign Up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu" activeClassName="active">
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" activeClassName="active">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
