let a = 9;
let b = 8;

let temp;

temp = a;
a = b;
b = temp;

console.log(a, b);

//without using temp
let c = 5;
let d = 4;

c = c + d;
d = c - d;
c = c - d;

console.log(c, d);
