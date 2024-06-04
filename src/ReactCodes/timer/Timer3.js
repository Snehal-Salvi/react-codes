//make a start button which will incraese from 1 to 10
import React, { useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  const [timerId, setTimerId] = useState(null); // To keep track of the interval ID

  const startTimer = () => {
    if (!timerId) {
      // Ensure only one timer is running
      const id = setInterval(() => {
        setValue((prevValue) => {
          if (prevValue < 10) {
            return prevValue + 1;
          } else {
            clearInterval(id); // Stop the timer when value reaches 10
            setTimerId(null);
            return prevValue;
          }
        });
      }, 1000); // Update value every second
      setTimerId(id); // Save interval ID
    }
  };

  return (
    <>
      <h1>Value: {value}</h1>
      <button onClick={startTimer}>Start</button>
    </>
  );
}
