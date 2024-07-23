import React from "react";

const companyData = {
  company: {
    name: "Tech Solutions Inc.",
    location: "New York, USA",
    employees: [
      {
        id: 1,
        name: "John Doe",
        position: "Software Engineer",
        department: {
          name: "Engineering",
          manager: "Alice Johnson"
        },
        contact: {
          email: "johndoe@example.com",
          phone: "123-456-7890"
        },
        projects: [
          {
            title: "Project Alpha",
            status: "Completed",
            team: [
              "John Doe",
              "Emily Davis"
            ]
          },
          {
            title: "Project Beta",
            status: "In Progress",
            team: [
              "John Doe",
              "Michael Brown"
            ]
          }
        ]
      },
      {
        id: 2,
        name: "Jane Smith",
        position: "Product Manager",
        department: {
          name: "Product Management",
          manager: "Bob Smith"
        },
        contact: {
          email: "janesmith@example.com",
          phone: "987-654-3210"
        },
        projects: [
          {
            title: "Product Launch",
            status: "Ongoing",
            team: [
              "Jane Smith",
              "Sarah Lee"
            ]
          }
        ]
      }
    ]
  }
};

export default function App() {
  const { company } = companyData;
  return (
    <div>
      <h1>{company.name}</h1>
      <h2>Location: {company.location}</h2>
      <h3>Employees:</h3>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Manager</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Projects</th>
          </tr>
        </thead>
        <tbody>
          {company.employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department.name}</td>
              <td>{employee.department.manager}</td>
              <td>{employee.contact.email}</td>
              <td>{employee.contact.phone}</td>
              <td>
                <ul>
                  {employee.projects.map((project, index) => (
                    <li key={index}>
                      <strong>{project.title}</strong>: {project.status}
                      <ul>
                        {project.team.map((member, idx) => (
                          <li key={idx}>{member}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
