/*make a start button which will incraese from 1 to 10 
and then will decrease from 10 to 0*/
import React, { useState, useEffect } from "react";

export const Timer2 = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    let timer;

    if (isRunning) {
      if (isIncreasing) {
        if (count < 10) {
          timer = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
          }, 1000);
        } else {
          setIsIncreasing(false);
        }
      } else {
        if (count > 0) {
          timer = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
          }, 1000);
        } else {
          setIsRunning(false);
        }
      }
    }

    return () => clearInterval(timer);
  }, [isRunning, count, isIncreasing]);

  const handleStartStop = () => {
    if (!isRunning) {
      setIsRunning(true);
      setIsIncreasing(true);
      setCount(0);
    } else {
      setIsRunning(false);
    }
  };

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
    </div>
  );
};

//automatic without using start button
import React, { useState, useEffect } from 'react';

function UpDownTimer() {
  const [count, setCount] = useState(0);
  const [isCountingUp, setIsCountingUp] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isCountingUp && count < 5) {
        setCount(count + 1);
      } else if (!isCountingUp && count > 0) {
        setCount(count - 1);
      } else {
        setIsCountingUp(!isCountingUp);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count, isCountingUp]);

  return (
    <div>
      {count}
    </div>
  );
}

export default UpDownTimer;
