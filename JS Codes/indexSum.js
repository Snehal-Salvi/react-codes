//array = [1,3,10,11,14]
//goal = 13

// output = [1,2] index 1 and 2 has sum 13

array = [1, 3, 10, 11, 14];
goal = 13;

let arr = [];
for (let i = 0; i < array.length; i++) {
  let flag = false;
  for (let j = 0; j < array.length; j++) {
    if (i == j) continue;
    if (array[i] + array[j] === goal) {
      console.log(i, j);
      flag = true;
      break;
    }
  }
  if (flag) break;
}

//time complexity n^2

//another way

array = [1, 3, 10, 11, 14];
goal = 13;

let arr1 = [];
let obj = {};

for (let i = 0; i < array.length; i++) {
  const temp = goal - array[i];

  if (obj[temp]) {
    console.log(obj[temp], i);
    break;
  }

  obj[array[i]] = i;
}

// time complexity of O(n) 