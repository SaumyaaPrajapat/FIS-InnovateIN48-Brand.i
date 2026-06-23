import React, { useState, useEffect } from "react";
import { API_URL } from "./utils/Utils";
import FormComponent from "./components/FormComponent/FormComponent";
import LoaderWrapper from "./components/LoaderWrapper/LoaderWrapper";
import ReportSection from "./components/ReportSection/ReportSection";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"; // Import the Footer component
import LoadingScreen from "./components/LoadingScreen/LoadingScreen"; // Import the new LoadingScreen component
import ChatBot from "./components/ChatBot/ChatBot"; // Import the ChatBot component
import BgImage from "../src/assets/background.png";
import LoadingBgImage from "../src/assets/new-background.png"; // New loading background image
import BuildingImage from "../src/assets/building.png"; // Building image
import "./App.css";

const App = () => {
  const [url, setUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reportType, setReportType] = useState("");
  const [initialLoading, setInitialLoading] = useState(true);
  const [bgImage, setBgImage] = useState(BuildingImage); // Start with loading background image

  useEffect(() => {
    if (!initialLoading) {
      const loaderTimer = setTimeout(() => {
        setBgImage(BgImage);
      }, 250);


      return () => clearTimeout(loaderTimer);
    }
  }, [initialLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setLoading(true);
    setBgImage(LoadingBgImage);

    try {
      const response = await fetch(
        `${API_URL}/run-main-script?url=${encodeURIComponent(url)}`
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error running main script:", error);
    } finally {
      setLoading(false);
      setBgImage(BgImage);
    }
  };

  const resetState = () => {
    setUrl("");
    setSubmitted(false);
    setLoading(false);
    setReportType("");
  };

  return (
    initialLoading ? (
      <LoadingScreen setInitialLoading={setInitialLoading} />
    ) : (
      <LoaderWrapper bgImage={bgImage}>
        <Header resetState={resetState} />
        {!submitted ? (
          <FormComponent url={url} setUrl={setUrl} handleSubmit={handleSubmit} />
        ) : (
          <ReportSection url={url} loading={loading} reportType={reportType} setReportType={setReportType} />
        )}
        <ChatBot />
        <Footer />
      </LoaderWrapper>
    )
  );
};

export default App;