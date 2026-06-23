import React, { useEffect, useState } from 'react';
import { API_URL } from '../../utils/Utils';
import './ColorReport.css';

const ColorReport = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const colorPalette = [
    { name: "Eggplant", hex: "#431c5b", rgb: "rgb(67, 28, 91)", type: "primary" },
    { name: "Navy", hex: "#1d1f48", rgb: "rgb(29, 31, 72)", type: "primary" },
    { name: "Raspberry", hex: "#b21a53", rgb: "rgb(178, 26, 83)", type: "secondary" },
    { name: "Charcoal", hex: "#3d3d40", rgb: "rgb(61, 61, 64)", type: "secondary" },
    { name: "Grey", hex: "#e6e7e8", rgb: "rgb(230, 231, 232)", type: "secondary" },
    { name: "Black", hex: "#000000", rgb: "rgb(0, 0, 0)", type: "tertiary" },
    { name: "White", hex: "#ffffff", rgb: "rgb(255, 255, 255)", type: "tertiary" },
    { name: "Core Green", hex: "#4bcd3e", rgb: "rgb(75, 205, 62)", type: "accent" }
  ];

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch(`${API_URL}/get-color-report`);
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error('Error fetching color reports:', error);
      } finally {
        setLoading(false);
      }
    };


    fetchReports();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const hasBadColors = reports.some(report => report.json_data.details.some(item => !colorPalette.some(color => color.hex === item.colorValue)));

  return (
    <div className="color-report">
      <h2>Color Report</h2>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>
            <img src={`${API_URL}/get-image/${report.image}`} alt="Annotated" />
            <div className="details">
              <h3 className='demo'>Details</h3>
              {report.json_data.details ? (
                <ul>
                  {report.json_data.details.map((item, idx) => (
                    <li key={idx}>
                      <strong>Type:</strong> {item.type}<br />
                      <strong>Color Value:</strong> {item.colorValue}<br />
                      <strong>Text Content:</strong> {item.textContent}<br />
                      <strong>Tag Hierarchy:</strong> {item.tagHierarchy}
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
      {hasBadColors ? (
        <div>
          <p className='demo-text'>Some components are using colors outside the recommended palette. Please use colors from the following set:</p>
          <ul className='demo-text'>
            {colorPalette.map((color, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '20px', height: '20px', backgroundColor: color.hex, marginRight: '10px' }}></div>
                <strong>{color.name}:</strong> {color.hex} ({color.rgb}) - {color.type}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className='demo-text'>The entire page uses colors within the FIS color palette.</p>
      )}
    </div>
  );
};

export default ColorReport;