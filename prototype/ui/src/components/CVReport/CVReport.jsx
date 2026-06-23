import React, { useEffect, useState } from 'react';
import { API_URL } from '../../utils/Utils';
import disabledButton from '../../good_assets/disabled_button.png';
import donutChart from '../../good_assets/donut_chart.png';
import errorTag from '../../good_assets/error_tag.png';
import generalTag from '../../good_assets/general_tag.png';
import largeCard from '../../good_assets/large_card.png';
import logoB from '../../good_assets/logo_b.png';
import logoG from '../../good_assets/logo_g.png';
import logoW from '../../good_assets/logo_w.png';
import pieChart from '../../good_assets/pie_chart.png';
import smallCard from '../../good_assets/small_card.png';
import staticButton from '../../good_assets/static_button.png';
import statusTag from '../../good_assets/status_tags.png';
import successTag from '../../good_assets/success_tag.png';
import './CVReport.css';

const CVReport = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const goodAssets = {
    'bad_disabled_button': disabledButton,
    'bad_donut_chart': donutChart,
    'bad_error_tag': errorTag,
    'bad_general_tag': generalTag,
    'bad_large_card': largeCard,
    'bad_logo': [logoB, logoG, logoW],
    'bad_pie_chart': pieChart,
    'bad_small_card': smallCard,
    'bad_static_button': staticButton,
    'bad_status_tag': statusTag,
    'bad_success_tag': successTag
  };

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch(`${API_URL}/get-cv-report`);
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error('Error fetching CV reports:', error);
      } finally {
        setLoading(false);
      }
    };


    fetchReports();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="cv-report">
      <h2>Computer Vision Report</h2>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>
            <img src={`${API_URL}/get-image/${report.image}`} alt="Annotated" />
            <div className="details">
              <h3>Good Components</h3>
              {report.json_data.good_components.length > 0 ? (
                <ul className='demo-text'>
                  {report.json_data.good_components.map((component, idx) => (
                    <li key={idx}>
                      <strong>Label:</strong> {component.label}<br />
                      <strong>Bounding Box:</strong> {component.bbox.join(', ')}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className='demo-text'>No good components detected.</p>
              )}
              <h3>Bad Components</h3>
              {report.json_data.bad_components.length > 0 ? (
                <ul className='demo-text'>
                  {report.json_data.bad_components.map((component, idx) => (
                    <li key={idx}>
                      <strong>Label:</strong> {component.label}<br />
                      <strong>Bounding Box:</strong> {component.bbox.join(', ')}
                      <div>
                        <strong>Suggestion:</strong> Consider using the following good asset:
                        {Array.isArray(goodAssets[component.label]) ? (
                          goodAssets[component.label].map((asset, assetIdx) => (
                            <img key={assetIdx} src={asset} alt={component.label} style={{ maxWidth: '100px', height: 'auto', marginLeft: '10px' }} />
                          ))
                        ) : (
                          <img src={goodAssets[component.label]} alt={component.label} style={{ maxWidth: '100px', height: 'auto', marginLeft: '10px' }} />
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className='demo-text'>No bad components detected.</p>
              )}
              <h3>Clear Space Validation</h3>
              {report.json_data.clear_space_validation.length > 0 ? (
                <ul className='demo-text'>
                  {report.json_data.clear_space_validation.map((validation, idx) => (
                    <li key={idx}>
                      <strong>Bounding Box:</strong> {validation.bbox.join(', ')}<br />
                      <strong>Valid:</strong> {validation.valid ? 'Yes' : 'No'}<br />
                      <strong>Minimum Clearance:</strong> {validation.min_clearance}<br />
                      {validation.failed_directions.length > 0 && (
                        <>
                          <strong>Failed Directions:</strong> {validation.failed_directions.join(', ')}<br />
                          <strong>Suggestion:</strong> {validation.suggestion}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className='demo-text'>No clear space validation issues detected.</p>
              )}
              <h3>Message</h3>
              <p className='demo-text'>{report.json_data.message}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CVReport;