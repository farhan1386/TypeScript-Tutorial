/*
Type aliases allow you to create a new name for an existing type.
The following shows the syntax of the type alias

Syntex:type alias = existingType;
*/

type chars = string;
let messsage: chars; // same as string type

type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
