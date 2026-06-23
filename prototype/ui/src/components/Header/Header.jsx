import React from "react";
import "./Header.css";
import FISlogo from "../../assets/FISlogo.png";
import Logo from "../../assets/Logo.png"

function Header({ resetState }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src={FISlogo}
          alt="FIS Logo"
          style={{ height: 25, marginLeft: 30, marginRight: 20, marginBottom: 4, cursor: 'pointer' }}
          onClick={resetState}
        />
        <img
          src={Logo}
          alt="FIS Logo"
          style={{ height: 27, marginLeft: -10, marginRight: -30, marginBottom: 4, cursor: 'pointer' }}
        />
        <ul className="nav-links">
          <li>
            <a href="https://brandzone.fisglobal.com/hub/43" target="_blank" rel="noopener noreferrer">
              Branding Guidelines
            </a>
          </li>
          <li>About Us</li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;