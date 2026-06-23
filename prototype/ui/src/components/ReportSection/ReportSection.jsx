import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for API calls
import ReportButtons from "./ReportButtons";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import CaseReport from "../CaseReport/CaseReport";
import FontReport from "../FontReport/FontReport";
import ColorReport from "../ColorReport/ColorReport";
import CVReport from "../CVReport/CVReport";
import PopupCard from "../PopupCard/PopupCard";
import './ReportSection.css';
import { API_URL } from "../../utils/Utils";

const ReportSection = ({ url, loading, reportType, setReportType }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [complianceScore, setComplianceScore] = useState(null); // State to store compliance score

  const handleReportClick = (type) => {
    setReportType(type);
    if (type === "case" || type === "font" || type === "color" || type === "cv") {
      setIsPopupOpen(true);
    }
  };

  useEffect(() => {
    if (reportType === "case" || reportType === "font" || reportType === "color" || reportType === "cv") {
      setIsPopupOpen(true);
    }
  }, [reportType]);

  useEffect(() => {
    if (!loading) {
      setLoadingComplete(true);
      // Fetch compliance score when loading is complete
      axios.get(`${API_URL}/calculate-compliance-score`)
        .then(response => {
          setComplianceScore(response.data.complianceScore);
        })
        .catch(error => {
          console.error('Error fetching compliance score:', error);
        });
    }
  }, [loading]);

  return (
    <div>
      {loading && !loadingComplete ? (
        <LoadingSpinner />
      ) : (
        <div className={`report-section ${loadingComplete ? "visible" : ""}`}>
          <h1 style={{marginBottom: -15}}>Submitted URL:</h1>
          <p>{url}</p>
          {complianceScore !== null && (
            <div className="compliance-score">
              <h2 style={{ color: parseInt(complianceScore, 10) > 70 ? '#4bcd3e' : '#b21a53', marginBottom: 20 }}>
                Compliance Score: {complianceScore}
              </h2>
            </div>
          )}

          <div className="report-buttons">
            <ReportButtons setReportType={handleReportClick} />
          </div>
          {reportType !== "case" && reportType !== "font" && reportType !== "color" && reportType !== "cv"}
          <PopupCard isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
            {reportType === "case" && <CaseReport />}
            {reportType === "font" && <FontReport />}
            {reportType === "color" && <ColorReport />}
            {reportType === "cv" && <CVReport />}
          </PopupCard>
        </div>
      )}
    </div>
  );
};

export default ReportSection;