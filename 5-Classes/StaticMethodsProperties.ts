class Employee {
    static headCount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee.headCount++;
    }
}
let john = new Employee('Farhan', 'Ahmed', 'Software Engineer');
let jane = new Employee('Mohit', 'Sharma', 'Back-end Developer');

console.log(Employee.headCount);