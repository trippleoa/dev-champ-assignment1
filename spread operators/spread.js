// Spread (...) is used to copy or join arrays/objects easily.
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b]; 
console.log('combined:', combined); // [1,2,3,4]

// Spread with objects 
const base = { x: 1, y: 2 };
const extended = { ...base, z: 3 };
console.log('extended:', extended);


// Use spread to pass array items as function arguments
function sumThree(x, y, z) {
return x + y + z;
}
console.log('sumThree:', sumThree(...[10, 20, 30])); // 60