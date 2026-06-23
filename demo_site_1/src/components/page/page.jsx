import React from "react";
import Card from "../cards/cards";
import PieChart from "../piechart/piechart";
import "./page.css";

function Page() {
  return (
    <div className="page">
      <Card />
      <Card />
      <PieChart />
    </div>
  );
}

export default Page;