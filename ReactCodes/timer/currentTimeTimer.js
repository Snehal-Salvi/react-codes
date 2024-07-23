//current time
import React from "react";

export default function CurrentTime() {
  const time = new Date();
  // const[time, setTime] = useState(new Date());
  return (
    <div>
      <h1>Current Time: {time.toLocaleTimeString()}</h1>
    </div>
  );
}

//start timer
import React, { useState } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());

  const startTimer = () => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  };

  return (
    <div>
      <h1>Current Time: {time.toLocaleTimeString()}</h1>
      <button onClick={startTimer}>Start</button>
    </div>
  );
}

//Start and Stop Timer
/*To be able to stop the timer, you'll need to store 
the interval ID so you can clear the interval later.  */

import React, { useState } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    setIntervalId(id);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  return (
    <div>
      <h1>Time: {time.toLocaleTimeString()}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}


/*this has bug beacuse if we click start button multiple times and 
we tried to stop it timer will not stop
Issue arises because the startTimer function creates a new interval every time 
it's clicked but doesn't check if an interval is already running.*/

import React, { useState } from 'react';

export default function App() {
  const [time, setTime] = useState(new Date());
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (!intervalId) { // Ensure only one timer is running
      const id = setInterval(() => {
        setTime(new Date());
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
      <h1>Current Time: {time.toLocaleTimeString()}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

//start stop and reset timer
import React, { useState } from 'react';

export default function App() {
  const [time, setTime] = useState(new Date());
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (!intervalId) { // Ensure only one timer is running
      const id = setInterval(() => {
        setTime(new Date());
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
    setTime(new Date());
  };

  return (
    <div>
      <h1>Current Time: {time.toLocaleTimeString()}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
