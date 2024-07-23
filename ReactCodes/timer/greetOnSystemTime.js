import React from "react";

export default function App() {
  function greetOnTime() {
    const hours = new Date().getHours();

    if (hours < 12) {
      return "Good Morning";
    } else if (hours < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }

  return (
    <div>
      <h1>Hello {greetOnTime()} </h1>
    </div>
  );
}

//using use State

import React, { useState, useEffect } from 'react';

export default function App2() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const greetOnTime = () => {
            const hrs = new Date().getHours();
            if (hrs < 12) {
                return 'Good Morning';
            } else if (hrs < 17) {
                return 'Good Afternoon';
            } else {
                return 'Good Evening';
            }
        };

        setGreeting(greetOnTime());
    }, []); 

    return (
        <div className="App">
            <h1>{greeting}</h1>
        </div>
    );
}

