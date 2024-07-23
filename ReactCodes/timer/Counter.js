import { useState } from "react";
//counter increase and decrease by one on click of button
export const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      {count}
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
};

//set limits

import { useState } from "react";

export const Counter4 = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      {count}
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
};

// counter increase and decrease by one on click of button using single function

import { useState } from "react";

export const Counter2 = () => {
  const [count, setCount] = useState(0);

  const handleCount = (number) => {
    setCount(count + number);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => handleCount(1)}>Increase</button>
      <button onClick={() => handleCount(-1)}>Decrease</button>
    </div>
  );
};

//set limits

import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const changeCount = (change) => {
    if (change > 0 && count < 10) {
      setCount(count + change);
    } else if (change < 0 && count > 0) {
      setCount(count + change);
    }
  };

  //another way
  /* 
  const changeCount = (number) => {
    if (count + number > 5) {
      setCount(5);
    } else if (count + number < 0) {
      setCount(0);
    } else {
      setCount(count + number);
    }
  };

   */

  //another way
  /* 
  const changeCount = (number) => {
    setCount((prevCount) => {
      const newCount = prevCount + number;
      if (newCount < 0) {
        return 0;
      } else if (newCount > 5) {
        return 5;
      } else {
        return newCount;
      }
    });
  };

  */

  return (
    <>
      {count}
      <button onClick={() => changeCount(1)}>Increase</button>
      <button onClick={() => changeCount(-1)}>Decrease</button>
    </>
  );
}
