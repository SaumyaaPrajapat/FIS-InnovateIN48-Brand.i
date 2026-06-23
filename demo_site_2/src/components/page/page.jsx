import React from "react";
import "./page.css";
import Card from "../cards/cards";
import PieChart from "../piechart/piechart";

function Page() {
  return (
    <div className="page">
      <Card color="#CD473E" index={1} />
      <Card color="#EFBB2C" index={2} />
      <PieChart />
    </div>
  );
}

export default Page;