// Create a progress bar in react js which will increase 10 px every after every 10 second?

// 1. Create the Progress Bar UI

import React from 'react';

const ProgressBar = () => {
  return (
    <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '5px', overflow: 'hidden' }}>
      <div
        style={{
          width: '0%', // Start with 0 width
          height: '20px',
          backgroundColor: '#76c7c0',
          transition: 'width 0.5s ease-in-out',
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;

// 2. Add State for Progress

import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0); // Initialize progress to 0

  return (
    <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '5px', overflow: 'hidden' }}>
      <div
        style={{
          width: `${progress}%`, // Use progress for width
          height: '20px',
          backgroundColor: '#76c7c0',
          transition: 'width 0.5s ease-in-out',
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;

// 3. Implement the Logic to Update Progress
import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0); // Initialize progress to 0

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
           
          return prev + 10; // Increase progress by 10
        } else {
          clearInterval(interval); // Stop when it reaches or exceeds 100
          return prev;
        }
      });
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '5px', overflow: 'hidden' }}>
      <div
        style={{
          width: `${progress}px`, // Use pixels for width
          height: '20px',
          backgroundColor: '#76c7c0',
          transition: 'width 0.5s ease-in-out',
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
