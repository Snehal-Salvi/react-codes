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