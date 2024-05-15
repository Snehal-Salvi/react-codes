import React, { useState } from "react";

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
    email: "janesmith@example.com",
    phone: "987-654-3210",
  },
];

export default function SearchEmp() {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchEmployees = () => {
    setSearchResults(
      employeeDirectory.filter((employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <input type="text" value={searchTerm} onChange={handleSearch} />

      <button onClick={searchEmployees}>Search</button>
      <div>
        {searchResults.map((employee) => (
          <div key={employee.id}>
            <h2>{employee.name}</h2>
            <p>Position: {employee.position}</p>
            <p>Department: {employee.department}</p>
            <p>Email: {employee.email}</p>
            <p>Phone: {employee.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
