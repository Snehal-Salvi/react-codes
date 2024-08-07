import React, { useState } from "react";

//add items and calculate total
export default function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (name && price) {
      setItems([...items, { name, price: Number(price) }]);
      setName("");
      setPrice(0);
    }
  };

  const totalExpense = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="item price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      <button onClick={handleAdd}>Add</button>

      <table border="2">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{totalExpense().toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}


//remove item from expense table

import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (name && price) {
      setItems([...items, { name, price: Number(price) }]);
      setName("");
      setPrice(0);
    }
  };

  const handleRemove = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const totalExpense = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="item price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      <button onClick={handleAdd}>Add</button>

      <table border="2">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => handleRemove(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{totalExpense().toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
