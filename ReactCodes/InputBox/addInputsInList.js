import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (data) {
      setItems([...items, data]);
      setData("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="type here"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
