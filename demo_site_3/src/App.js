import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import SideNavbar from "./components/sidenavbar/sidenavbar";
import Page from "./components/page/page";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Initially visible

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className="App">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="content">
        <SideNavbar isOpen={isSidebarOpen} />
        <Page />
      </div>
    </div>
  );
}

export default App;