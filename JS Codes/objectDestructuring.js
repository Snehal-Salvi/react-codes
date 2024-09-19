/*object destructuring allows you to extract specific properties from an object 
and assign them to variables in a concise way. */

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Object destructuring
  const { name, age, city } = person;
  
  console.log(name);  // "John"
  console.log(age);   // 30
  console.log(city);  // "New York"
  
  //Destructuring with Different Variable Names
  const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Rename variables
  const { name: fullName, age: yearsOld, city: location } = person;
  
  console.log(fullName);  // "John"
  console.log(yearsOld);  // 30
  console.log(location);  // "New York"

//   Destructuring with Default Values
const person = {
    name: "John",
    city: "New York"
  };
  
  // Default value for age
  const { name, age = 25, city } = person;
  
  console.log(age);  // 25 (default value, since 'age' is not in the object)

//   Nested Object Destructuring
const person = {
    name: "John",
    address: {
      city: "New York",
      zip: 10001
    }
  };
  
  // Destructuring nested objects
  const { name, address: { city, zip } } = person;
  
  console.log(city);  // "New York"
  console.log(zip);   // 10001

//   Using Destructuring in Function Parameters

const person = { name: "John", age: 30, city: "New York" };

function greet({ name, city }) {
  console.log(`Hello ${name} from ${city}!`);
}

greet(person);  // "Hello John from New York!"
