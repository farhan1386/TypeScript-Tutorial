function multiply(a, b, c) {
    if (typeof c !== "undefined") {
        return a * b * c;
    }
    return a * b;
}
console.log(multiply(5, 10, 15));
console.log(multiply(10, 20));
