/*
All numbers in TypeScript are either floating-point values or big integers.
The floating-point numbers have the type number while the big integers get the type bigint.
*/

// Number annotation
let numberValue: number;
numberValue = 100;
console.log(numberValue);

// declare a variable that holds a floating-point value
let price: number;
price = 10.5;
console.log(price);

// decimal numbers

let counter: number = 0;
let x: number = 100,
  y: number = 200;

console.log(x);
console.log(y);

// Binary Numbers

let bin = 0b100;
let anotherBin: number = 0b010;

console.log(bin);
console.log(anotherBin);

// Octal Numbers

let octal: number = 0o10;
console.log(octal);

// Hexadecimal numbers

let hexadecimal: number = 0xa;
console.log(hexadecimal);
