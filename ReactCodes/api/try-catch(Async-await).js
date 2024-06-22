import React, { useEffect, useState } from "react";

export const FetchApi = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      {error && <div>Error: {error}</div>}
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h2>{user.address.street}</h2>
        </div>
      ))}
    </>
  );
};
