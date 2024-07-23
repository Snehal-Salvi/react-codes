import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        // setData(data.slice(0, 5));
      });
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <div>
        {data.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h1>{user.address.city}</h1>
          </div>
        ))}
      </div>

      {/* display in list  */}
      {/* <div>
      {data.map((user) => (
        <ul key={user.id}>
          <li>{user.name}</li>
          <li>{user.address.city}</li>
        </ul>
      ))}
    </div> */}
    </div>
  );
}
