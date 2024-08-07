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

//show countries in dropdown

export default function App() {
  return (
    <div>
      <select>
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}

//final code 

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountryChange = (e) => {
    const country = countries.find((country) => country.name === e.target.value);
    setSelectedCountry(country);
  };

  return (
    <div>
      <select value={selectedCountry.name} onChange={handleCountryChange}>
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      <br />
      <select>
        {selectedCountry.cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

