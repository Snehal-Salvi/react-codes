import React from 'react'

// without using useState
export default function useState_name() {
    let name = "Snehal";

    const changeName = () => {
      name = "Salvi";
      console.log(name);
    };
  
    return (
      <>
        {name}
        <button onClick={changeName}>Click me to changed the name</button>
      </>
    );
  }

//   using useState 
export default function useState_name() {
const [name, setName] = useState("Snehal");

const changeName = () => {
  setName("Salvi");
};

return (
  <>
    {name}
    <button onClick={changeName}>Click me to changed the name</button>
  </>
);
}
  