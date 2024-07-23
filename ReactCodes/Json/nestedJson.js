import React from "react";

const studentDetails = [
  {
    id: 1,
    name: "A",
    age: "20",
    marks: {
      english: 90,
      math: 99,
    },
    percentage: [
      {
        semester: "sem 1",
        cgpa: 8.23,
      },
      {
        semester: "sem 2",
        cgpa: 8.03,
      },
    ],
  },
  {
    id: 2,
    name: "B",
    age: "20",
    marks: {
      english: 90,
      math: 99,
    },
    percentage: [
      {
        semester: "sem 1",
        cgpa: 8.23,
      },
      {
        semester: "sem 2",
        cgpa: 8.03,
      },
    ],
  },
];

export default function App() {
  return (
    <div>
      {studentDetails.map((student) => (
        <div key={student.id}>
          <h1>Name: {student.name}</h1>
          <h2>Age: {student.age}</h2>
          <ul>
            <p>Marks:</p>
            <li>English: {student.marks.english}</li>
            <li>Maths: {student.marks.math}</li>
          </ul>

          <ul>
            <p>Semester:</p>
            {student.percentage.map((sem, index) => (
              <li key={index}>
                {sem.semester}: CGPA {sem.cgpa}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
