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
        placeholder="Type here"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      {/* Display items in a table */}
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
      [name]: value, // Dynamically update the field
    });
  };

  const handleAdd = () => {
    if (formData.name && formData.age) {
      setItems([...items, formData]);
      setFormData({ name: "", age: "" }); // Reset form
    }
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleInputChange}
      />
      <button onClick={handleAdd}>Add</button>

      {/* Display items in a table */}
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
