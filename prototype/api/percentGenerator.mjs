import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

function calculateComplianceScore() {
    const reports = [
        'case_report.json',
        'color_report.json',
        'font_report.json',
        'cv_screenshot_main.png.json'
    ];

    const reportDir = './compliance_report';
    if (!existsSync(reportDir)) mkdirSync(reportDir);
    const scoreFilePath = join(reportDir, 'compliance_score.json');

    // Overwrite report files with empty content
    writeFileSync(scoreFilePath, JSON.stringify({ }, null, 4), 'utf8');

    let totalIssues = 0;
    let totalChecks = 0;

    reports.forEach((reportPath) => {
        const fullPath = join(reportDir, reportPath);
        const reportData = JSON.parse(readFileSync(fullPath, 'utf-8'));

        if (reportPath.includes('case_report.json')) {
            totalChecks += reportData.length;
            totalIssues += reportData.filter(item => !item.is_valid).length;
        } else if (reportPath.includes('color_report.json') || reportPath.includes('font_report.json')) {
            totalChecks += Math.ceil(reportData.issuesFound / 7) * 7;
            totalIssues += reportData.issuesFound;
        } else if (reportPath.includes('cv_screenshot_main.png.json')) {
            const goodComponents = reportData.good_components || [];
            const badComponents = reportData.bad_components || [];
            totalChecks += goodComponents.length + badComponents.length;
            totalIssues += badComponents.length;
        }
    });

    const complianceScore = (totalChecks === 0 ? 100 : ((totalChecks - totalIssues) / totalChecks) * 100).toFixed(2) + '%';
    writeFileSync(scoreFilePath, JSON.stringify({ complianceScore }, null, 4), 'utf8');
    console.log(complianceScore);
}

calculateComplianceScore();
