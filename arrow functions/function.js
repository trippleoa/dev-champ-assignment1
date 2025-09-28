// Arrow functions are a shorter syntax for writing functions.
// They also keep the "this" from their surrounding context.

// Arrow function 
const addArrow = (a, b) => a + b; 
console.log('addArrow:', addArrow(2, 3)); // 5


// Arrow function with single parameter can omit parentheses
const square = x => x * x;
console.log('square:', square(4)); // 16

// Arrow functions are handy for short callbacks
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log('doubled:', doubled); // [2,4,6]