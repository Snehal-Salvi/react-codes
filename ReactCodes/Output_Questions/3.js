import React, { useState, useEffect } from "react";

const App = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Hello");
    setCounter(1);
  }, [props.visible]);

  return <div>{counter}</div>;
};

export default App;

/*
This React component will log "Hello" to the console once when the component mounts or 
when props.visible changes and it will display the value of 
counter as 1 after the state update.
 */
