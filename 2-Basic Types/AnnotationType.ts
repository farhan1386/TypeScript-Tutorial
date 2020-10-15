/*
let variableName: type;
let variableName: type = value;
const constantName: type = value;
*/

// Number annotation

let value: number = 30;
console.log(value);

// String Annotation

let employeeName: string;
employeeName = "Farhan Ahmed";
console.log(employeeName);

// Primitive type annotations

let firstName: string = "Farhan";
let lastName: string = "Ahmed";
let age: number = 30;
let active: boolean = true;

console.log("FullName:" + firstName + lastName);
console.log(age);
console.log(active);

//  Annotate an array type
// Syntex:let arrayName: type[];

let names: string[] = ["John", "Jane", "Peter", "David", "Mary"];

// To specify a type for an object, you use the object type annotation

let person: {
  name: string;
  age: number;
};

person = {
  name: "Farhan Ahmed",
  age: 30,
};

// function annotation with parameter type annotation and return type annotation

let greeting : (name: string) => string;

greeting = function (name: string) {
    return `Hi ${name}`;
};