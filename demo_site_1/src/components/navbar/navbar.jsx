import React from "react";
import { FaSearch } from "react-icons/fa";
import FISlogo from "../../assets/FISlogo.png";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={FISlogo} alt="FIS Logo" style={{ height: 27, marginRight: 20, cursor: 'pointer' }} />
        <ul className="nav-links">
          <li>Who we serve</li>
          <li>Solutions we provide</li>
          <li>Resources</li>
          <li>Explore more</li>
        </ul>
      </div>

      <div className="navbar-right">
        <FaSearch className="search-icon" />
        <button className="contact-button">Label</button>
      </div>
    </nav>
  );
}

export default Navbar;