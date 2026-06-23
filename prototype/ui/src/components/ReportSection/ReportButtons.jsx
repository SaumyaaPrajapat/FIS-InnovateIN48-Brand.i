import React from 'react';

const ReportButtons = ({ setReportType }) => (
  <div className='report-buttons'>
    <button onClick={() => setReportType('case')}>Case Report</button>
    <button onClick={() => setReportType('font')}>Font Report</button>
    <button onClick={() => setReportType('color')}>Color Report</button>
    <button onClick={() => setReportType('cv')}>CV Report</button>
  </div>
);

export default ReportButtons;