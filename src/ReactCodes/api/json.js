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
    }
]

import React from 'react'

export default function Json() {
  return (
    <>
    {emp.map((employee) => (
      <div key={employee.id}>
        <p>{employee.name}</p>
      </div>
    ))}
  </>
);
}
