import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './FormComponent.css';

const FormComponent = ({ url, setUrl, handleSubmit }) => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "AI-Powered Precision. Consistent Branding.";
  const typingSpeed = 50;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="form-wrapper">
      <div className="animated-text">
        <motion.h2>
          {displayText}
        </motion.h2>
      </div>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Enter website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;