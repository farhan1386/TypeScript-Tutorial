class Person {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private position: string) {
        
        // call the constructor of the Person class:
        super(firstName, lastName);
    }
    describe(): string {
        return super.describe() + `I'm a ${this.position}.`;
    }
}

let emp1=new Employee('Farhan','Ahmed','Senior Software Engineer');
console.log(emp1.getFullName());
console.log(emp1.describe());