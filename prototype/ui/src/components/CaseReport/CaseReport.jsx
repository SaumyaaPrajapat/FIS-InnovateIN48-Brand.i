import React, { useEffect, useState } from 'react';
import { API_URL } from '../../utils/Utils';
import './CaseReport.css';

const CaseReport = () => {
    const [report, setReport] = useState(null);

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const response = await fetch(`${API_URL}/get-case-report`);
                const data = await response.json();
                setReport(data);
            } catch (error) {
                console.error('Error fetching case report:', error);
            }
        };

        fetchReport();
    }, []);

    if (!report) {
        return <div>Loading...</div>;
    }

    if (report.length === 0) {
        return <div className='demo-text'>Text is written with compliant casing throughout the page.</div>;
    }

    return (
        <div className="case-report">
            <h2>Case Report</h2>
            <ul>
                {report.map((item, index) => (
                    <li key={index}>
                        <strong>Component:</strong> {item.component}<br />
                        <strong>Text:</strong> {item.text}<br />
                        <strong>Case:</strong> {item.case}<br />
                        <strong>Valid:</strong> {item.is_valid ? 'Yes' : 'No'}<br />
                        <strong>Message:</strong> {item.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CaseReport;


