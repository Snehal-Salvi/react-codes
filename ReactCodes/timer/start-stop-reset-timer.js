import React from "react";
import "./style.css";
import { useState } from "react";

//create start stop and reset timer

export default function App() {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const startTimer = () => {
    // Only start a new timer if there isn't one already running
    if (!timerId) {
      const id = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 1000);
      setTimerId(id);
    }
  };

  const stopTimer = () => {
    clearInterval(timerId);
    setTimerId(null);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div>
      <h1>Timer : {time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
