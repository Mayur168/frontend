import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Custom CSS for navbar styling
const styles = `
  .nav-link {
    color: rgba(255, 255, 255, 0.5) !important; /* Faint color for inactive links */
    text-decoration: none !important; /* No underline for inactive links */
    transition: color 0.3s ease;
  }
  .nav-link:hover {
    color: rgba(255, 255, 255, 0.7) !important; /* Slightly brighter on hover */
  }
  .nav-link.active {
    color: #ffffff !important; /* Bright white for active link */
    text-decoration: underline !important; /* Underline for active link */
    text-underline-offset: 4px; /* Optional: Adjusts underline position */
  }
  .navbar-collapse {
    transition: height 0.3s ease; /* Smooth collapse animation */
  }
`;

export const Header = () => {
  // State to control navbar collapse
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle navbar state
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close navbar when a link is clicked
  const handleNavLinkClick = () => {
    setIsNavOpen(false); // Close navbar on link click
  };

  return (
    <>
      {/* Inject custom styles */}
      <style>{styles}</style>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top">
        <NavLink className="navbar-brand fw-bold" to="/" onClick={handleNavLinkClick}>
          Mayur Gaikwad
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
          onClick={toggleNav} // Use state-based toggle
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active"
                onClick={handleNavLinkClick}
                end // For React Router v6; use exact="true" for v5
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/project"
                className="nav-link"
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                Project
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                About Me
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                to="/contactdetails"
                className="nav-link"
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                Login
              </NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};