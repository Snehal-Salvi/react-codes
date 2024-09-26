// Create a progress bar in react js which will increase 10 px every after every 10 second?

// 1. Create the Progress Bar UI

import "./styles.css";
//progres bar which will increase by 10 px after every 10 sec

export default function App() {
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <div style={{ width: "100%", height: "20px", backgroundColor: "grey" }}>
        <div
          style={{ width: "10%", height: "20px", backgroundColor: "blue" }}
        ></div>
      </div>
    </div>
  );
}


// 2. Add State for Progress

import { useState } from "react";
import "./styles.css";
//progres bar which will increase by 10 px after every 10 sec

export default function App() {
  const [progress, setProgress] = useState(0);
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <div style={{ width: "100%", height: "20px", backgroundColor: "grey" }}>
        <div
          style={{ width: "10%", height: "20px", backgroundColor: "blue" }}
        ></div>
      </div>
    </div>
  );
}


// 3. Implement the Logic to Update Progress(Final Code)
import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        // Increase progress by 10px, but stop at 100%
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 10000); // 10 seconds interval

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <div style={{ width: "100%", height: "20px", backgroundColor: "grey" }}>
        <div
          style={{
            width: `${progress}%`,
            height: "20px",
            backgroundColor: "blue",
          }}
        ></div>
      </div>
      <p>{progress}%</p>
    </div>
  );
}

// Extra *****************************************************************
// if instead of precentage want to increase in px

import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [progress, setProgress] = useState(0);
  const maxProgress = 100; // Set the maximum width in pixels

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        // Increase progress by 10px, but stop at maxProgress (300px)
        if (prevProgress >= maxProgress) {
          clearInterval(interval);
          return maxProgress;
        }
        return prevProgress + 10;
      });
    }, 1000); // 1 second interval

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <div style={{ width: "100px", height: "20px", backgroundColor: "grey" }}>
        <div
          style={{
            width: `${progress}px`, // Set width in pixels
            height: "20px",
            backgroundColor: "blue",
          }}
        ></div>
      </div>
      <p>{progress}px</p>
    </div>
  );
}
