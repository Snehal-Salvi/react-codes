import React, { useState } from "react";

//make timer which will increase by one and if click on stop it will stop
export default function Timer() {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null); // To keep track of the interval ID

  const startTimer = () => {
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 1); // Increment time by 1 every second
    }, 1000); // Update time every second
    setTimerId(id); // Save interval ID
  };

  const stopTimer = () => {
    clearInterval(timerId); // Stop the timer
    setTimerId(null); // Clear interval ID
  };

  return (
    <>
      <h1>Timer: {time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </>
  );
}
