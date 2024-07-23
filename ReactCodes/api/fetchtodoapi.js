import React, { useState, useEffect } from "react";

export default function ToDoFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todo")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.todos);
      });
  }, []);

  return (
    <div className="App">
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.todo}</li>
        ))}
      </ul>
    </div>
  );
}

 
// ************************************
// {"todos":[{"id":1,"todo":"Do something nice for someone I care about","completed":true,"userId":26},
// {"id":2,"todo":"Memorize the fifty states and their capitals","completed":false,"userId":48},
// {"id":3,"todo":"Watch a classic movie","completed":false,"userId":4},
// {"id":4,"todo":"Contribute code or a monetary donation to an open-source software project","completed":false,"userId":48},{"id":5,"todo":"Solve a Rubik's cube","completed":false,"userId":31},{"id":6,"todo":"Bake pastries for me and neighbor","completed":false,"userId":39},{"id":7,"todo":"Go see a Broadway production","completed":false,"userId":32},{"id":8,"todo":"Write a thank you letter to an influential person in my life","completed":true,"userId":13},