import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LoadingGif from "../../assets/dot.gif";
import "./LoadingSpinner.css";

const textLines = [
  "Verifying text cases... ✅",
  "Checking font usage... ✅",
  "Examining colors used... ✅",
  "Validating components... ✅",
];

const LoadingSpinner = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (currentLine < textLines.length) {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= textLines[currentLine].length) {
          setDisplayedText(textLines[currentLine].slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => setCurrentLine((prev) => prev + 1), 1000);
        }
      }, 200);
    }
  }, [currentLine]);

  return (
    <div className="loading-overlay">
      <div className="loading-box">
        <img src={LoadingGif} alt="Loading..." className="loading-gif" />
        <div className="loading-text">
          {textLines.slice(0, currentLine + 1).map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {index === currentLine ? displayedText : line}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;