import React, { useState } from "react";

//add toto list items in list

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

//add delete functionality

export default function App() {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (data) {
      setItems([...items, data]);
      setData("");
    }
  };

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="type here"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item}</span>{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// mark as completed functionality
import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);
  const [completed, setCompleted] = useState([]);

  const handleAdd = () => {
    if (data) {
      setItems([...items, data]);
      setCompleted([...completed, false]); // New task is initially not completed
      setData("");
    }
  };

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleMarkCompleted = (index) => {
    const newCompleted = [...completed];
    newCompleted[index] = true; 
    setCompleted(newCompleted);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="type here"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>
              {item} {completed[index] && "(Completed)"}
            </span>{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
            {!completed[index] && (
              <button onClick={() => handleMarkCompleted(index)}>
                Mark as Completed
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

