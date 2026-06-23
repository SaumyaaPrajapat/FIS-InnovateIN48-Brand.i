import React from "react";
import "./sidenavbar.css";

function SideNavbar() {
  return (
    <div className="sidenav">
      <ul>
        <li>Home</li>
        <li>
          Global Business Travel <span className="tag">NEW</span>
        </li>
        <li>
          BUC Finder <span className="tag">BETA</span>
        </li>
      </ul>
    </div>
  );
}

export default SideNavbar;