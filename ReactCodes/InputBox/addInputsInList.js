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

/**************************************************************************/
//add two input Name and Age
import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({ name: "", age: "" });
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Dynamically update the correct field
    });
  };

  const handleAdd = () => {
    if (formData.name && formData.age) {
      setItems([...items, formData]);
      setFormData({ name: "", age: "" }); // Reset form fields
    }
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Enter age"
        value={formData.age}
        onChange={handleInputChange}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            Name: {item.name}, Age: {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
