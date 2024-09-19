// Call:
/*The call() method allows you to call a function 
with a specified this value and arguments provided individually.  */

function greet(name) {
  console.log("Hello " + name); //Alice
  console.log("Hey " + this.name); //John
}

let person = {
  name: "John",
};

greet.call(person, "Alice");

/* Output:
Hello Alice
Hey John 
*/

//apply
/*The apply() method is similar to the call() method, 
but it takes an array of arguments instead of individual arguments. */

function greet(name,age){
  console.log("Hello " + name + " your age is " + age )
  console.log("Hey " + this.name)
}

let person = {
   name: "John"
}

greet.apply(person,["Alice",25]);

/*Output: 
Hello Alice your age is 25
Hey John
*/

//bind
/*It binds a function to a specific this value, 
but instead of calling it immediately, it returns a new function. */

function greet(name) {
  console.log("Hello " + name);
  console.log("Hey " + this.name);
}

let person = {
   name: "John"
}

let greetPerson = greet.bind(person, "Alice");

greetPerson();

/*Output:
Hello Alice
Hey John
*/
