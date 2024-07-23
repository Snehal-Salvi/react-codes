import React, { useState } from "react";

export default function App() {
  const [time, setTime] = useState(0);

  const handleStart = () => {
    const id = setInterval(() => {
      setTime((prev) => {
        if (prev >= 10) {
          clearInterval(id);
          return 10;
        }
        return prev + 1;
      });
    }, 1000);
  };

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}
