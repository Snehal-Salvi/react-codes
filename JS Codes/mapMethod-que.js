//convert no to strings

const arr = [0,1, 2, 3, 4, 5];

const res = arr.map((no) => {
return no.toString();
})

console.log(res);

// convert it into object where key will be age and value will be no

const arr2 = [0, 1, 2, 3, 4, 5];

const objArray = arr2.map(no => ({ age: no }));

console.log(objArray);

//multiply by 2 using map and filter

const arr2 = [0, 1, 2, 3, 4, 5];
const res2 = arr2.filter((element) => element < 3).map((e) => e * 2); 
//this is called array chaining

console.log(res2); //[ 0, 2, 4 ]

//use reduce method and return sum of array

const arr3 = [0, 1, 2, 3, 4, 5];
const res3 = arr3
  .filter((element) => element < 3)
  .map((e) => e * 2)
  .reduce((acc, cv) => acc+cv);

console.log(res3); //6
