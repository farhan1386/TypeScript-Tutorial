/*
Sometimes, you will run into a function that expects a parameter that is either a number or a string.
*/
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add(10, 30));
console.log('Farhan', 'Ahmed');
