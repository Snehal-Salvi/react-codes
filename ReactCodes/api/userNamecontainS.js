import { useEffect, useState } from "react";
import "./styles.css";

//return username which contain s

export default function App() {
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
    <div className="App">
      {users
        .filter((user) => user.name.toLowerCase().includes("s"))
        .map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
          </div>
        ))}
    </div>
  );
}
