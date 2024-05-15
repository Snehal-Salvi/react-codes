import React, { useState } from "react";

export default function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

//   const updateTime = () => {
//     setCurrentTime(new Date());
//   };
 
  return (
    <div>
      <h1>Current Time:</h1>
      <h2>{currentTime.toLocaleTimeString()}</h2>
    </div>
  );
}
