/* TypeScript generics allow you to write the reusable and generalized form of functions,
classes, and interfaces.*/

//  generics type
function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

console.log(getRandomElement<number>(numbers));
console.log(getRandomElement<string>(colors))

// Using number type

function getRandomNumber(item: number[]): number {
  let randomIndex = Math.floor(Math.random() * item.length);
  return randomIndex;
}
let numbers = [10, 5, 3, 6, 4, 7, 9];

console.log(getRandomNumber(numbers));

// // Using string type

function getRandomStringElement(items: string[]): string {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let colors = ["red", "green", "blue"];
console.log(getRandomStringElement(colors));

// Using the any type

function getRandomAnyElement(items: any[]): any {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let myNumbers = [1, 5, 7, 4, 2, 9];
let myColors = ["red", "green", "blue"];

console.log(getRandomAnyElement(myNumbers));
console.log(getRandomAnyElement(myColors));
