// Destructuring lets you pull values out of arrays or objects easily.
// Array destructuring
const rgb = [255, 200, 100];
const [red, green, blue] = rgb; // assign names by position
console.log('red:', red, 'green:', green, 'blue:', blue);

// Object destructuring
const user = { id: 1, name: 'Ada', role: 'Engineer' };
const { name: userName, role } = user; // get properties by key
console.log('userName:', userName, 'role:', role);

