import React, { useEffect, useState } from "react";

export const FetchApi = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h2>{user.address.street}</h2>
        </div>
      ))}
    </>
  );
};
