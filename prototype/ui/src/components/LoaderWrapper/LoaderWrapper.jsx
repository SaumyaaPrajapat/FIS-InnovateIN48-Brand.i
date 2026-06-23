import React from "react";
import './LoaderWrapper.css';

const LoaderWrapper = ({ bgImage, children }) => {
  return (
    <div
      className="app-container loaded"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {children}
    </div>
  );
};

export default LoaderWrapper;