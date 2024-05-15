let arr = [
  { product: "Milk", quantity: 3, price: 1.5 },
  {
    product: "Burger",
    quantity: 2,
    price: 2.5,
  },
];

//calculate total price
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i].quantity * arr[i].price;
}

console.log(sum);
