/*
let variableName: type;
let variableName: type = value;
const constantName: type = value;
*/
// Number annotation
var value = 30;
console.log(value);
// String Annotation
var employeeName;
employeeName = "Farhan Ahmed";
console.log(employeeName);
// Primitive type annotations
var firstName = "Farhan";
var lastName = "Ahmed";
var age = 30;
var active = true;
console.log("FullName:" + firstName + lastName);
console.log(age);
console.log(active);
//  Annotate an array type
// Syntex:let arrayName: type[];
var names = ["John", "Jane", "Peter", "David", "Mary"];
// To specify a type for an object, you use the object type annotation
var person;
person = {
    name: "Farhan Ahmed",
    age: 30
};
// function annotation with parameter type annotation and return type annotation
var greeting;
greeting = function (name) {
    return "Hi " + name;
};
