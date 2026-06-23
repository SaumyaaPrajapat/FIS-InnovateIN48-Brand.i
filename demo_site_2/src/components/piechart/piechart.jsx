import React from "react";
import pieChartImage from "../../assets/pie.png";
import "./piechart.css";

function PieChart() {
  return (
    <div className="piechart">
      <div className="piechart-container">
        <img
          src={pieChartImage}
          alt="Pie Chart"
          className="piechart-image"
          style={{ width: "200px", height: "200px" }}
        />
      </div>
    </div>
  );
}

export default PieChart;