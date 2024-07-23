import React from "react";

//show current time
export default function CurrentTime() {
  const time = new Date();

  return (
    <div>
      <h1>Current Time: {time.toLocaleTimeString()}</h1>
    </div>
  );
}

//current time in real time with changing seconds

import React, { useState, useEffect } from 'react';

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() =>{
      setTime(new Date());
    },1000);
  },[]);

  return (
    <div>
      <h1>Time: {time.toLocaleTimeString()}</h1>
    </div>
  );
}

/*above code has a small issue: it does not clear the interval 
when the component unmounts, which can lead to memory leaks or unwanted behavior.  */
//optimized

import React, { useState, useEffect } from 'react';

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Create an interval to update the time every second
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h1>Time: {time.toLocaleTimeString()}</h1>
    </div>
  );
}

