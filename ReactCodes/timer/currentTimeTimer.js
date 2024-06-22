import React, { useState } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());
  const [timerId, setTimerId] = useState(null); // To keep track of the interval ID

  const startTimer = () => {
    if (!timerId) { // Ensure only one timer is running
      const id = setInterval(() => {
        setTime(new Date());
      }, 1000); // Update time every second
      setTimerId(id); // Save interval ID
    }
  };

  const stopTimer = () => {
    clearInterval(timerId); // Stop the timer
    setTimerId(null); // Clear interval ID
  };

  const resetTimer = () => {
    stopTimer(); // Stop the timer if running
    setTime(new Date()); // Reset time to current time
  };

  return (
    <>
      <h1>Time: {time.toLocaleTimeString()}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
}
