var Employee = /** @class */ (function () {
    function Employee(Id, firstName, lastName, position, office, salary) {
        this.Id = Id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.office = office;
        this.salary = salary;
    }
    Employee.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Employee;
}());
var emp = new Employee(1, "Farhan", "Ahmed", "Software Engineer", "Bangalore", 80000);
console.log(emp.getFullName());
console.log(emp.position);
console.log(emp.salary);
