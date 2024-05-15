import React, { useState } from "react";

// Create two dropdowns
// First dropdown will show the names of the countries
// Second dropdown will show the cities of the selected country
// Reference: https://baxture-react-assignment.vercel.app/dropdown
// You can use Google search to look up any syntax

const countries = [
  {
    name: "India",
    code: "IN",
    cities: ["New Delhi", "Mumbai", "Kolkata"],
  },
  {
    name: "USA",
    code: "US",
    cities: ["New York", "Los Angeles", "Chicago"],
  },
  {
    name: "Bangladesh",
    code: "BD",
    cities: ["Dhaka", "Chittagong", "Khulna"],
  },
];

export default function Country() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const handleCountry = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState("");
  };

  const handleState = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <div className="App">
      <select id="country" value={selectedCountry} onChange={handleCountry}>
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

     {selectedCountry && (
        <select id="state" value={selectedState} onChange={handleState}>
          {countries.find(country => country.name === selectedCountry)
            .cities.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
        </select>
      )}
    </div>
  );
}
