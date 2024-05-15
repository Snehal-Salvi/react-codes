
import React, { useState, useEffect } from "react";

export default function ToDoApi() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue.trim() !== "") {
      fetch("https://dummyjson.com/todos")
        .then((response) => response.json())
        .then((data) => {
          setData(data.todos);
        });
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something to fetch data..."
      />
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.todo}</li>
        ))}
      </ul>
    </div>
  );
}


// *****************************************

// {"todos":[{"id":1,"todo":"Do something nice for someone I care about","completed":true,"userId":26},
// {"id":2,"todo":"Memorize the fifty states and their capitals","completed":false,"userId":48},
// {"id":3,"todo":"Watch a classic movie","completed":false,"userId":4},
// {"id":4,"todo":"Contribute code or a monetary donation to an open-source software project","completed":false,"userId":48},{"id":5,"todo":"Solve a Rubik's cube","completed":false,"userId":31},{"id":6,"todo":"Bake pastries for me and neighbor","completed":false,"userId":39},{"id":7,"todo":"Go see a Broadway production","completed":false,"userId":32},{"id":8,"todo":"Write a thank you letter to an influential person in my life","completed":true,"userId":13},
