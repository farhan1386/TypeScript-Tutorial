/*
Type inference describes where and how TypeScript infers types when you don’t explicitly
annotate them.
*/
var permanenteEmployee = {
    firstName: 'Farhan',
    lastName: 'Ahmed',
    sayHi: function () { return "Hi there"; }
};
var contractEmployee = {
    firstName: 'Fayaz',
    lastName: 'Ahmed',
    sayHi: function () { return "Hi there"; }
};
console.log(permanenteEmployee.firstName);
console.log(permanenteEmployee.lastName);
console.log(permanenteEmployee.sayHi());
console.log(contractEmployee.firstName);
console.log(contractEmployee.lastName);
console.log(contractEmployee.sayHi());
