//make a start button which will incraese from 1 to 10 and then will decrase from 10 to 0
import React, { useState, useEffect } from 'react';

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
              setCount(prevCount => prevCount + 1);
            }, 1000);
          } else {
            setIsIncreasing(false);
          }
        } else {
          if (count > 0) {
            timer = setInterval(() => {
              setCount(prevCount => prevCount - 1);
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
        <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
      </div>
    );
  };