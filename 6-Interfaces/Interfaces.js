function getFullName(person) {
    if (person.middleName) {
        return person.firstName + " " + person.middleName + " " + person.lastName;
    }
    return person.firstName + " " + person.lastName;
}
var person = {
    firstName: 'Farhan',
    middleName: 'Ahmed',
    lastName: 'Razvi'
};
console.log(getFullName(person));
