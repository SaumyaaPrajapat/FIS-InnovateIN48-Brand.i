import React from "react";
import "./sidenavbar.css";

function SideNavbar() {
  return (
    <div className="sidenav">
      <ul>
        <li>Nav 1</li>
        <li>Nav 2</li>
        <li>Nav 3</li>
        <li>
          <span className="tag1">Tag Label</span>
        </li>
        <li>
          <span className="tag2">Tag Label</span>
        </li>
        <li>
          <span className="tag3">Tag Label</span>
        </li>
        <li>
          <span className="tag4">Tag Label</span>
        </li>
        <li>
          <span className="tag5">Tag Label</span>
        </li>
      </ul>
    </div>
  );
}

export default SideNavbar;