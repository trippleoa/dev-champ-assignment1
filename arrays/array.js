//ARRAY
const numbers = [1, 2, 3, 4, 5];

//array methods: map(),filter(),reduce(),find() etc...
// map: transforms each item and returns a new array
const squares = numbers.map(n => n * n);
console.log('squares:', squares); // [1,4,9,16,25]


// filter: returns a new array of items that match a condition
const even = numbers.filter(n => n % 2 === 0);
console.log('even:', even); // [2,4]


// reduce: boil array down to a single value (sum, product, etc.)
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('sum:', sum); // 15


// find: returns the first item that matches condition
const firstLarge = numbers.find(n => n > 3);
console.log('first > 3:', firstLarge); // 4


