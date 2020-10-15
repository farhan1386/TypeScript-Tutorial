/*
The string literal types allow you to define a type that accepts only one specified string literal.
*/

let click: 'click'; // valid

// click = 'dblclick'; // compiler error

let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
//mouseEvent = 'mouseover'; // compiler error