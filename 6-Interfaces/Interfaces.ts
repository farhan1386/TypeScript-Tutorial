interface Person{
    fisrtName:string;
    middleName:string;
    lastName:string;
}

function getFullName(person: Person) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}

let person={
    firstName:'Farhan',
    middleName:'Ahmed',
    lastName:'Razvi'
};

console.log(getFullName(person));