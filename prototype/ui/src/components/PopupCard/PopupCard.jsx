import React from "react";
import axios from "axios";
import { FaDownload } from "react-icons/fa";
import { API_URL } from "../../utils/Utils";
import "./PopupCard.css";

const PopupCard = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleDownload = async () => {
    try {
      const response = await axios.get(`${API_URL}/download-pdf`, {
        responseType: "blob",
      });
      const blob = new Blob([response.data]);
      const fileURL = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = fileURL;
      a.download = "compliance_report.pdf"; // Set the desired filename
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(fileURL); // Clean up the blob URL
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <div className="button-container">
          <div className="download-button-container" onClick={handleDownload}>
            <button className="download-button">
              <i className="download-icon">
                <FaDownload />
              </i>
            </button>
          </div>
          <div className="close-button-container" onClick={onClose}>
            <button className="close-button">✖</button>
          </div>
        </div>
        <div className="popup-content">{children}</div>
      </div>
    </div>
  );
};

export default PopupCard;