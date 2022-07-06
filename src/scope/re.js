var firstName; // Undefined
firstName = 'John'; // String
console.log(firstName); // John

var lastName = 'Doe'; // String
lastName = 'Smith'; // String
console.log(lastName); // Smith

var secondName = 'Jane'; // String
var secondName = 'Smith'; // String
console.log(secondName); // Smith

let age = 30; // Number
age = 40; // Number

console.log(age);

//const
const PI = 3.14; // Number
//PI = 3.15; // Error

const vehicle = []; // Array
vehicle.push('Car'); // Array
console.log(vehicle); // ['Car']
vehicle.pop();
console.log(vehicle); // []