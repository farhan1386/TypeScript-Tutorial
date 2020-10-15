/*
The string literal types allow you to define a type that accepts only one specified string literal.
*/
var click; // valid
// click = 'dblclick'; // compiler error
var mouseEvent;
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
//mouseEvent = 'mouseover'; // compiler error
