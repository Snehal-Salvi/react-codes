// shallow copy
let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
 
console.log("Employee Name=> ", employee.ename);
let newEmployee = employee;    // Shallow copy
 
console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee Name=> ", employee.ename);


// *******************
// deep copy
let employee2 = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}

console.log("Employee Name=> ", employee2.ename);

console.log("=========Deep Copy========");
let newEmployee2 = JSON.parse(JSON.stringify(employee2));
console.log("Employee=> ", employee2);
console.log("New Employee=> ", newEmployee2);

console.log("---------After modification---------");
newEmployee2.ename = "Beck";
newEmployee2salary = 70000;
console.log("Employee Name=> ", employee2.ename);
