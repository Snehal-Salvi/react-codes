import React from "react";

const employeeDirectory = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    department: "Engineering",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: {
      city: "ABC",
      pin: 402,
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    department: "Product Management",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    address: {
      city: "ABC",
      pin: 402,
    },
  },
];

export default function App() {
  return (
    <>
      {employeeDirectory.map((employee) => (
        <div key={employee.id}>
          <p>{employee.name}</p>
          <p>{employee.position}</p>
          <p>{employee.address.city}</p>
        </div>
      ))}
    </>
  );
}
