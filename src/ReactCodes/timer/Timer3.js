//make a start button which will incraese from 1 to 10 
import React, { useState, useEffect } from 'react';

export const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && count < 10) {
      timer = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, count]);

  const handleStart = () => {
    if (!isRunning) {
      setCount(0);
      setIsRunning(true);
    }
  };

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

