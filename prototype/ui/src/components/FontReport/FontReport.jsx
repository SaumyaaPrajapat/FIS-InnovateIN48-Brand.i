import React, { useEffect, useState } from 'react';
import { API_URL } from '../../utils/Utils';
import './FontReport.css';

const FontReport = () => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await fetch(`${API_URL}/get-font-report`);
        const data = await response.json();
        setReport(data);
      } catch (error) {
        console.error('Error fetching font report:', error);
      }
    };

    fetchReport();
  }, []);

  if (!report) {
    return <div>Loading...</div>;
  }

  const hasBadComponents = report.some(item => item.json_data.details.some(detail => detail.fontFamily !== 'Roobert'));

  return (
    <div className="font-report">
      <h2>Font Report</h2>
      <ul>
        {report.map((item, index) => (
          <li key={index}>
            <img src={`${API_URL}/get-image/${item.image}`} alt="Annotated" />
            <div className="details">
              <h3 className='demo'>Details</h3>
              {item.json_data.details ? (
                <ul>
                  {item.json_data.details.map((detail, idx) => (
                    <li key={idx}>
                      <strong>Text Content:</strong> {detail.textContent}<br />
                      <strong>Tag Hierarchy:</strong> {detail.tagHierarchy}<br />
                      <strong>Font Family:</strong> {detail.fontFamily}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className='demo-text'>No details available</div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <h3 className='demo'>Message</h3>
      {hasBadComponents ? (
        <p className='demo-text'>Some components are not using the Roobert font. Please convert all text to use the Roobert font to comply with guidelines.</p>
      ) : (
        <p className='demo-text'>The entire page uses the Roobert font as per guidelines.</p>
      )}
    </div>
  );
};

export default FontReport;