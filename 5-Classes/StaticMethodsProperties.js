var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Employee.headCount++;
    }
    Employee.headCount = 0;
    return Employee;
}());
var john = new Employee('Farhan', 'Ahmed', 'Software Engineer');
var jane = new Employee('Mohit', 'Sharma', 'Back-end Developer');
console.log(Employee.headCount);
