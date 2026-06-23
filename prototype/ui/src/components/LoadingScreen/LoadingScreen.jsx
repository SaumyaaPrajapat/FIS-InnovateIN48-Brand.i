import React, { useEffect } from "react";
import LoadingGif from "../../assets/loader.gif";
import './LoadingScreen.css';

const LoadingScreen = ({ setInitialLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 4000);


    return () => clearTimeout(timer);
  }, [setInitialLoading]);


  return (
    <div className="loading-screen">
      <img src={LoadingGif} alt="Loading..." className="loader-gif" />
    </div>
  );
};

export default LoadingScreen;