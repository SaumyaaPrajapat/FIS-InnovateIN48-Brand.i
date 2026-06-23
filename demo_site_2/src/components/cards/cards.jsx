import React, { useState } from "react";
import {
  FaEllipsisV,
  FaChevronDown,
  FaChevronUp,
  FaPlus,
  FaExpand,
} from "react-icons/fa";
import "./cards.css";

function Card({ color, index }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const buttonClass = index === 1 ? "action-btn-1" : "action-btn-2"; // Dynamically set button class

  return (
    <div
      className={`card ${isExpanded ? "expanded" : ""}`}
      style={{ backgroundColor: color }}
    >
      <div className="card-header">
        <div
          className="card-title-container"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <FaChevronUp className="card-toggle-icon" />
          ) : (
            <FaChevronDown className="card-toggle-icon" />
          )}
          <div>
            <h3 className="card-title">Card Title</h3>
            <p className="card-subtitle">Card Subtitle</p>
          </div>
        </div>
        <FaEllipsisV className="card-menu-icon" />
      </div>

      {isExpanded && (
        <div className="card-content">
          <div className="card-footer">
            <div className="card-actions">
              <p className={buttonClass}>Action 1</p>
              <p className={buttonClass}>Action 2</p>
            </div>
            <div className="card-icons">
              <FaPlus className="card-icon" />
              <FaExpand className="card-icon" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;