function addNumbers(a: number, b: number): number {
    return a + b;
}

function addStrings(a: string, b: string): string {
    return a + ' ' + b;
}

console.log(addNumbers(10,20));
console.log(addStrings('farhan','ahmed'));

function add(a: number | string, b: number | string): number | string|undefined{
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;

    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
}

console.log(add(50,50));
console.log('a','b');