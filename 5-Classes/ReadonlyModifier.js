/*
TypeScript provides the readonly modifier that allows you to mark the
properties of a class immutable.
The assignment to a readonly property can only occur in one of two places:

In the property declaration.
In the constructor of the same class.
To mark a property as immutable, you use the readonly keyword.
The following shows how to declare a readonly property in the Person class.
*/
var Student = /** @class */ (function () {
    function Student(birthDate) {
        this.birthDate = birthDate;
    }
    return Student;
}());
var student = new Student(new Date("10-13-2015"));
// student.birthDate = new Date(1991, 12, 25); // Compile error
