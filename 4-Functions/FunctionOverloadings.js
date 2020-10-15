function addNumbers(a, b) {
    return a + b;
}
function addStrings(a, b) {
    return a + ' ' + b;
}
console.log(addNumbers(10, 20));
console.log(addStrings('farhan', 'ahmed'));
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
}
console.log(add(50, 50));
console.log('a', 'b');
