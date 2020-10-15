/*
The never type is a type that contains no values. Because of this, you cannot assign any value
to a variable with a never type.

Typically, you use the never type to represent the return type of a function that always throws
an error.
*/

function raiseError(message: string): never {
    throw new Error(message);
}

function reject() { 
    return raiseError('Rejected');
 }

 let loop = function forever() {
    while (true) {
        console.log('Hello');
    }
}