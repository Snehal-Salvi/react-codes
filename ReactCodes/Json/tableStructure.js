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
    <div>
      <h1>Employee Directory</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Pin</th>
          </tr>
        </thead>
        <tbody>
          {employeeDirectory.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.address.city}</td>
              <td>{employee.address.pin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
