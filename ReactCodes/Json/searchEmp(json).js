import React, { useEffect, useState } from "react";

const employeeDirectory = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    department: "Engineering",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    department: "Product Management",
    email: "janesmith@example.com",
    phone: "987-654-3210",
  },
  {
    id: 3,
    name: "Alex Johnson",
    position: "Product Manager",
    department: "Product Management",
    email: "alexjohnson@example.com",
    phone: "987-654-3210",
  },
];

export default function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setData(employeeDirectory);
  }, []);

  const filteredUsers = data.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Employee Directory</h1>
      <input
        type="text"
        placeholder="Search users..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>
        {filteredUsers.map((user) => (
          <ul key={user.id}>
            <li>
              <strong>{user.name}</strong>
              <br />
              {user.position} - {user.department}
              <br />
              Email: {user.email}
              <br />
              Phone: {user.phone}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
