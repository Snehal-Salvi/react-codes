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

