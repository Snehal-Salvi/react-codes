console.log(typeof undefined);//undefined
console.log(typeof null);//object

//undefined
var a;
console.log(a); //undefined

/********************************************************/
//null
var a = null;
console.log(a); //null

//another eg
var a;
console.log(a ?? null); //null
/* we have to explicitly assign null value beacuse JS automatically assign undefined
and null is a value that JavaScript won't automatically assign by default.
*/

/*
1.undefined: This is the default value for variables that 
have been declared but not yet assigned. 
It's JavaScript's way of indicating that a variable exists 
but has no value assigned to it yet.

2. null: This is an intentional assignment to represent the absence of a value. 
You must explicitly assign null to a variable to indicate that it holds no value.
 */
