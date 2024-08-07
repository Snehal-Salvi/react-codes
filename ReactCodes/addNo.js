import React, { useState } from "react";

export default function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [sum, setSum] = useState(0);

  const addNumbers = () => {
    setSum(parseFloat(number1) + parseFloat(number2));
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Type Number 1"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Type Number 2"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />

      <button onClick={addNumbers}>Add</button>
      <h1>Ans = {sum}</h1>
    </div>
  );
}
