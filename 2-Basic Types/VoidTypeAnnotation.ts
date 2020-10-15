/*
The void type denotes the absence of having any type at all. It is a little like 
the opposite of the any type.

Typically, you use the void type as the return type of functions that do not return a value.
*/

function greet(): void { 
    console.log('Hi!')
} 

let speech: void = greet(); 
console.log(speech);