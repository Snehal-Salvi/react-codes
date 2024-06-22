
import { useState } from "react";

export default function UseState() {
   
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("Enter your name");

  const Increment = () => {
    setCounter(counter + 1);
  };

  const inputValueHnadler = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div className="App">

<h1>useState</h1>

      <div>
        {counter}
        <button onClick={Increment}>Increment</button>
      </div>

      <div>
        <br />
        <input placeholder="Enter your name" onChange={inputValueHnadler} />
        {inputValue}
      </div>
      <hr />
    </div>
  );
}
