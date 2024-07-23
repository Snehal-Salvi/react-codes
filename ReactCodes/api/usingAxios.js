//install: npm install axios

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <div>
        {data.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h2>{user.address.city}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
