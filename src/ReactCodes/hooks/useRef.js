import { useRef } from "react";

export default function UseRef() {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus(); //adding focus
    inputRef.current.value = ""; //removing the input 
  };

  return (
    <div className="App">
      <h1>UseRef</h1>
      <div>
        <input
          placeholder="add focus to input box using use ref"
          ref={inputRef}
        />
        <button onClick={onClick}>Click here</button>
      </div>

      <hr />
    </div>
  );
}
