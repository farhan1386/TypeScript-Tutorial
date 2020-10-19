class Employee {
    Id: number;
    firstName: string;
    lastName: string;
    position: string;
    office: string;
    salary: number;
  
    constructor(
      Id: number,
      firstName: string,
      lastName: string,
      position: string,
      office: string,
      salary: number
    ) {
      this.Id = Id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.position = position;
      this.office = office;
      this.salary = salary;
    }
  
    getFullName() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const emp = new Employee(
    1,
    "Farhan",
    "Ahmed",
    "Software Engineer",
    "Bangalore",
    80000
  );
  console.log(emp.getFullName());
  console.log(emp.position);
  console.log(emp.salary);
  