// ES6 introduced `let` and `const` for block-scoped variables.
// var vs let/const
if (true) {
var oldVar = 'i am var';
let newLet = 'i am let';
const newConst = 'i am const';
}
console.log('oldVar (var is function-scoped):', oldVar); // accessible here
// console.log(newLet); // would throw ReferenceError
// console.log(newConst); // would throw ReferenceError


// Use `const` for values that shouldn't change, `let` for mutable values
const PI = 3.14159;
let counter = 0;
counter += 1;
console.log('PI:', PI, 'counter:', counter);