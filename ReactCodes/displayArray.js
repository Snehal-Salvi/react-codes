import React from 'react';

const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
  ];

export const DisplayArray = () => {
  return (
    <div>
        <ul>
            {users.map((user,index) => (
             <li key={user.id}>{user.name}</li>
            ))}
           
        </ul>
    </div>
  ) 
}
