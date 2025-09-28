// This file exports functions that can be reused in other files.
export function greet(name) {
return `Hello, ${name}!`;
}

export const farewell = name => `Goodbye, ${name}!`;
import { greet, farewell } from './utils.js';
console.log(greet('Charlie'));
console.log(farewell('Charlie'));