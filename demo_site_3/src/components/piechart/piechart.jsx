import React from "react";
import "./piechart.css";
import pieChartImage from "../../assets/pie.png";

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