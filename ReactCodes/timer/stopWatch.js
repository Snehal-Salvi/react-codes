//start timer 
import React, { useState } from "react";

export default function App() {
  const [time, setTime] = useState(0);

  const startTimer = () => {
    setInterval(() => {
      setTime((previousTime) => previousTime + 1);
    }, 1000);
  };

  return (
    <div>
      <h1>Time: {time}</h1>
      <button onClick={startTimer}>Start</button>
    </div>
  );
}


//stop timer 

import React, { useState } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  return (
    <div>
      <h1>Time: {time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

// start stop and reset timer

import React, { useState } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (!intervalId) { 
      const id = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const resetTimer  = () => {
    stopTimer();
    setTime(0);
  }

  return (
    <div>
      <h1>Time: {time}</h1>
      <button onClick={startTimer}>Start</button> 
      <button onClick={stopTimer}>Stop</button> 
      <button onClick={resetTimer}>Reset</button> 
    </div>
  );
}

//if you need time in this format 00:00:00 

import React, { useState } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  const formatTime = (timeInSeconds) => {
    const h = String(Math.floor(timeInSeconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(2, "0");
    const s = String(timeInSeconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div>
      <h2>{formatTime(time)}</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
