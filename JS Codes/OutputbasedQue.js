/***********************************************************/
//1
console.log(a); //undefined
var a = 5;

/***********************************************************/
//2
console.log(a); //reffernce error Cannot access 'a' before initialization
let a = 5;

/***********************************************************/
// 3
console.log(a); //undefined
console.log(b); //error b is not defined
var a = (b = 5);

/***********************************************************/
//4
var a = 5;
console.log(a++); //5
console.log(a); //6

/***********************************************************/
//5
var a = 5;
console.log(++a); //6
console.log(a); //6

/***********************************************************/
//6
console.log([1, 2] == [1, 2]); //false
/*In JavaScript, when you compare two arrays using the equality operator (==), 
it compares their references in memory, not their contents. */

console.log(JSON.stringify([1, 2]) === JSON.stringify([1, 2])); // true

/***********************************************************/
//7
console.log(1 < 2 < 3); //true
console.log(3 > 2 > 1); //false
/* 1 < 2 = true 
true < 3 means 1 < 3 = true

3 > 2 true 
true > 1 means 1 > 1 = false
*/

/***********************************************************/
//8
const foo = () => {
  console.log(this.name); //undefined: arrow functions refers to its parent scope
};

foo.call({ name: "John" });

/***********************************************************/
//9
const foo1 = function () {
  console.log(this.name); //john
};

foo1.call({ name: "John" });

/***********************************************************/
//10
const hoo = () => {
  console.log(this.name); //undefined
  const boo = () => {
    console.log(this.name); //undefined
  };
  boo();
};

hoo.call({ name: "John" });

/***********************************************************/
// 11
const voo = function () {
  console.log(this.name); //John
  const boo = () => {
    console.log(this.name); //John
  };
  boo();
};

voo.call({ name: "John" });

/***********************************************************/
// 12
const user = {
  id: 123,
  name: "John Doe",
  add: {
    city: "Mumbai",
    state: "Maharashtra",
  },
};

// freeze the property Id so that no one can modify
Object.defineProperties(user, { id: { writable: false } });

user.id = 456;
user.name = "Jeh";

console.log(user.id); // 123
console.log(user.name); // Jeh

/***********************************************************/
//13
console.log(4 + "2"); //42 //type coersion
console.log(4 - "2"); // 2
console.log("2" + 3 * 4); //212

console.log(typeof (4 + "2")); //string
console.log(typeof (4 - "2")); //number
console.log(typeof NaN); //number
console.log(NaN == NaN); //false
console.log(NaN === NaN); //false

/***********************************************************/
//14
function joo() {
  console.log("Hello"); //hello
}
const result = joo();
console.log(result); //undefined

/***********************************************************/
//15
function joo1() {
  return "hello";
}
const result1 = joo1();
console.log(result1); //hello

/***********************************************************/
// 16
function outer() {
  function inner() {
    console.log(x); // 5 beacuse of closures
  }
  const x = 5;
  return inner;
}

const inner = outer();
inner();

/***********************************************************/
//17
console.log("Start");
setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
/*
Start
End
Timeout
*/

/***********************************************************/
//18
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// 4 4 4

/*to fix this we can use let variable or */
for (var i = 1; i <= 3; i++) {
  (function (index) {
    setTimeout(() => {
      console.log(index);
    }, 1000);
  })(i);
} // 1 2 3

//print 1 2 3 with delay of 1 sec

for (var i = 1; i <= 3; i++) {
  (function (index) {
    setTimeout(() => {
      console.log(index);
    }, 1000 * index);
  })(i);
}

/***********************************************************/
//19
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
//1 2 3

//print 1 2 3 with delay of 1 sec
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}

/***********************************************************/
//20
function a() {
  console.log(x); //undefined
  var x = 10;
}

a();

/***********************************************************/
//21
function a() {
  console.log(x); //ReferenceError: Cannot access 'x' before initialization
  let x = 10;
}

a();

/***********************************************************/
//22

{
  let a = 5;
  let b = 6;

  console.log(a); //5
  console.log(b); //6
}
console.log(a); //ReferenceError: a is not defined
console.log(b);

/***********************************************************/
//23
{
  var c = 5;
  console.log(c); //5
}
console.log(c); // 5

/***********************************************************/
//24
function bi() {
  let a = 5;
  let b = 6;
}
bi();
console.log(a); //ReferenceError: a is not defined
console.log(b);

/***********************************************************/
//25
function bi() {
  var a = 5;
}
bi();
console.log(a); //ReferenceError: a is not defined

/***********************************************************/
//26
function bi() {
  a = 5;
}
bi();
console.log(a); //5

/***********************************************************/
//27
// console.log(0123); //83
//Octal literals are not allowed. Use the syntax '0o123'
//when we add zero before any no it will take as octal no

/***********************************************************/
//28
var a = 5;
function bi() {
  console.log(a); //5
}
bi();

/***********************************************************/
//29
voo();
var voo = 20;
function voo() {
  console.log("calling voo");
}
voo();
//TypeError: voo is not a function

/***********************************************************/
//29
setTimeout(() => {
  console.log("timeout");
}, 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");
/*end
promise
timeout*/

/***********************************************************/
//30
async function foo() {
  return "Hello World";
}

const res = foo();
console.log(res); //Promise { 'Hello World' }

//resolve promise using await
async function foo() {
  return "Hello World";
}

async function main() {
  const res = await foo();
  console.log(res); //Hello World
}

main();

/***********************************************************/
//31
async function foo() {
  return "Hello World";
}

async function main() {
  const res = await foo();
  console.log(res);
  console.log("1");
  console.log("2");
}

main();
/*Hello World
1
2
*/

/***********************************************************/
//32

function abc() {
  console.log("hi");
}
const val = new abc();
console.log(val);
/*hi
abc {} */

/***********************************************************/
//32

let details = {
  id: 1,
  name: "john",
};

//destructure the properties
let { user, name } = details;

//use spread operator
let n = { ...details };

//add field user-name instead of name
let details1 = {
  id: 1,
  "user-name": "john",
};

//access user-name
details["user-name"];

//destructure the property user-name
const { id, "user-name": userName } = details1;

console.log(id); // 1
console.log(userName); // "john"

/***********************************************************/
//33

//normal and array function
let obj = {
  name: "joe",
  first() {
    console.log(this.name); //joe
  },

  second: () => {
    console.log(this.name); //undefined
  },
};

obj.first();
obj.second();

//in normal function this refers to current context
//arrow function refers to global context

/***********************************************************/
//34

let arr1 = [1, 2, 3];
let arr2 = [11, 12, 13];
let arr3 = [...arr1, ...arr2];

console.log(arr3); //[ 1, 2, 3, 11, 12, 13 ]

/*
The main difference between rest and spread is that the rest operator 
puts the rest of some specific user-supplied values into a JavaScript array. 
But the spread syntax expands iterables into individual elements. */

console.log(..."joe"); // j o e

/***********************************************************/
//35
let x = 5;
let y = 15;
let z = 25;

x = y; //x = 15 and y=15
x = y = z;
console.log(
  x,
  y,
  z
)(
  //25 25 25

  /***********************************************************/
  //36
  function () {
    var x = (y = 5);
  }
)();
console.log(y); // 5
console.log(x); //5

/***********************************************************/
//37

var ans = "A" + "B"; //AB
console.log(ans);

var ans = "A" - "B";
console.log(ans); //Nan

/***********************************************************/
//38

let arr = [1, 2, 3, 4];
let obj1 = { ...arr };
console.log(obj1); //{ '0': 1, '1': 2, '2': 3, '3': 4 }

/***********************************************************/
//39
/*console.log(sum(2,3));
console.log(sum(2)(3));

write function for this */

function sum(a, b) {
  if (b == undefined) {
    return (c) => {
      return c + a;
    };
  }

  return a + b;
}
console.log(sum(2, 3));
console.log(sum(2)(3));

/***********************************************************/
//40

let xx = "hello";
let yy = new String("hello");
console.log(xx == yy); //true
console.log(xx === yy); //false

/***********************************************************/
//41
let v = "false";
let c = !v;

console.log(c); // Output: false

/*When you apply the logical NOT operator (!) to x, 
it converts x to its boolean equivalent. 
In JavaScript, any non-empty string (except for the string "false") 
is considered truthy. Since x is the string "false", 
it is treated as truthy, 
and negating a truthy value with ! results in false. */

/***********************************************************/
//42
console.log("A");

setTimeout(() => {
  console.log("B");
});

["C", "D"].forEach((x) => console.log(x));

console.log("E");

/*Ans: A C D E B*/

/***********************************************************/
//43

var obj11 = {
  hello: function () {
    return "hello " + this.name;
  },
  name: "hello",
};

var obj22 = {
  hello: obj11.hello,
  name: "bye",
};

console.log(obj22.hello()); //hello bye
console.log(obj22.hello.call(obj11)); //hello hello

/***********************************************************/
//44
let param = { a: 1 };
let xyz = [param];
param["a"] = 2;
console.log(param);
console.log(xyz);

//ans: { a: 2 }
// [ { a: 2 } ]

/***********************************************************/
//45
let param = { a: 1 };
let xyz1 = [{ ...param }];
param["a"] = 2;
console.log(param); // {"a": 2}
console.log(xyz1); // [{"a": 1}]

/***********************************************************/
//45
console.log("1"); // Synchronous: Logs "1"

// Schedules a macrotask with a delay of 0ms
setTimeout(() => {
  console.log("2");
}, 0);

let promiseReq = new Promise(function (resolve, reject) {
  console.log("3"); // Synchronous: Logs "3"
  resolve("4"); // Immediately resolves the promise
});

promiseReq
  .then((data) => {
    console.log(data); // Microtask: Logs "4"
  })
  .catch((err) => {
    console.log(err);
  });

// Schedules a macrotask with setImmediate
setImmediate(() => {
  console.log("5");
});

console.log("6"); // Synchronous: Logs "6"

// 1 3 6 4 2 5

// console.log("1"); //1

// setImmediate(() => {
//     console.log("5");
// });

// let promiseReq = new Promise(function(resolve, reject) {
//     console.log("3");
//     resolve("4");
// });

// promiseReq.then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// setTimeout(() => {
//     console.log("2");
// }, 0); //task queue

// console.log("6");

//// 1 3 6 4 2 5

/***********************************************************/
//46

console.log("Start");

process.nextTick(() => {
  console.log("Next Tick 1");
});

Promise.resolve().then(() => {
  console.log("Promise 1");
});

process.nextTick(() => {
  console.log("Next Tick 2");
});

Promise.resolve().then(() => {
  console.log("Promise 2");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

/*
Start
End
Next Tick 1
Next Tick 2
Promise 1
Promise 2
Timeout */

console.log("Start");

Promise.resolve().then(() => console.log("Microtask 1"));

setTimeout(() => console.log("Macrotask 1"), 0);

Promise.resolve().then(() => console.log("Microtask 2"));

setImmediate(() => console.log("Macrotask 2"));

process.nextTick(() => console.log("Next tik console"));

console.log("End");

/*
Start
End
Next tik console
Microtask 1
Microtask 2
Macrotask 1
Macrotask 2 */

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const myArray = [10, 20, 30, 40, 50];
console.log(findMax(myArray)); // Expected output: 50

//find error
/*
instead of  i <= arr.length we should use  i < arr.length
The error in the findMax function is in the loop condition. 
The loop runs one iteration too many due to the condition i <= arr.length. 
This causes the loop to attempt to access an element at arr[arr.length], 
which is undefined and results in incorrect behavior. */

/***********************************************************/
//47

function foo() {
  let a = (b = 0);
  a++;
  return a;
}

foo();
console.log(typeof a); // => ???
console.log(typeof b); // => ???

// console.log(typeof a); // => "undefined"
// console.log(typeof b); // => "number"
/*
typeof a will return "undefined" because a is not accessible outside the function.
typeof b will return "number" because b is now a global variable and holds the value 0.
*/

/***********************************************************/
//48
const array = [1, 2, 3];
array[10] = 10;
console.log(array.length); //11

/* The array after this operation will look like: 
[1, 2, 3, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 10]*/

/***********************************************************/
//49

console.log([] == []); //false

/* In JavaScript, the equality (==) and strict equality (===) operators 
compare object references when it comes to arrays (and other objects).*/

/***********************************************************/
//50

let a = 2 + "5";
console.log(a); //25

let a = 25 - "5";
console.log(a); //20

let a = 5 * "4";
console.log(a); //20

let a = 25 / "5";
console.log(a); //5

/*
2 + '5': The number 2 is concatenated with the string '5', resulting in the string '25'.
25 - '5': The string '5' is coerced into the number 5, and subtraction is performed, resulting in 20.
5 * '4': The string '4' is coerced into the number 4, and multiplication gives 20.
25 / '5': The string '5' is coerced into the number 5, and division results in 5.
 */

/***********************************************************/
//51

const numbers = [1, 2, 3, 4, 5];
const [a] = numbers;

console.log(a); //1

/*The destructuring assignment const [a] = numbers takes the 
first element of the numbers array (which is 1) and assigns it to the variable a.*/

/***********************************************************/
//52
console.log("1: Synchronous code start");

setTimeout(() => {
  console.log("5: Macrotask - setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("3: Microtask - Promise");
});

(async function () {
  await Promise.resolve();
  console.log("4: Microtask - Async/Await");
})();

console.log("2: Synchronous code end");

/*
1: Synchronous code start
2: Synchronous code end
3: Microtask - Promise
4: Microtask - Async/Await
5: Macrotask - setTimeout
*/

/***********************************************************/
//53
const length = 4;
const numbers = [];
for (var i = 0; i < length; i++) {
    numbers.push(i + 1);
}

/*[1, 2, 3, 4]

Here's the breakdown of each iteration:

When i = 0, numbers.push(0 + 1) → numbers = [1]
When i = 1, numbers.push(1 + 1) → numbers = [1, 2]
When i = 2, numbers.push(2 + 1) → numbers = [1, 2, 3]
When i = 3, numbers.push(3 + 1) → numbers = [1, 2, 3, 4]
*/