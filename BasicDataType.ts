let isDone: boolean = false;

// Number Type
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String Type
let color: string = "blue";
color = "red";

// Array Types
let list: number[] = [1, 2, 3];

// Generic array type

let list: Array<number> = [1, 2, 3];

// Enumeration Type
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// Unknown Type

let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;
