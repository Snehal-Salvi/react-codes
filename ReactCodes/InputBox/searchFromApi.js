import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const filteredUsers = data.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Users List</h1>
      <input
        type="text"
        placeholder="Search users..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>
        {filteredUsers.map((user) => (
          <ul key={user.id}>
            <li key={user.id}>{user.name}</li>
          </ul>
        ))}
      </div>

      {/* no users found text if nothing is found */}
      {/* {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )} */}
    </div>
  );
}
