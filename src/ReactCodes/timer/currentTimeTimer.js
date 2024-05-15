import React, { useEffect, useState } from "react";

export default function CurrentTimeTimer() {
  const [time, setTime] = useState(new Date());
  const [timerId, setTimerId] = useState(null); // To keep track of the interval ID

  const startTimer = () => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update time every second
    setTimerId(id); // Save interval ID
  };

  const stopTimer = () => {
    clearInterval(timerId); // Stop the timer
    setTimerId(null); // Clear interval ID
  };

  return (
    <>
      <h1>Time: {time.toLocaleTimeString()}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>  
    </>
  );
}
