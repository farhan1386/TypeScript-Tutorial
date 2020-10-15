/*
The void type denotes the absence of having any type at all. It is a little like
the opposite of the any type.

Typically, you use the void type as the return type of functions that do not return a value.
*/
function greet() {
    console.log('Hi!');
}
var speech = greet();
console.log(speech);
