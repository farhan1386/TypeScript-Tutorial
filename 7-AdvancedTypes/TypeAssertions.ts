/* Type assertions instruct the TypeScript compiler to treat a value as a specified type.
It uses the as keyword to do so*/

// expression as targetType

function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}
let netPrice1 = getNetPrice(100, 0.05, true) as string;
console.log(netPrice1);

let netPrice2 = getNetPrice(100, 0.05, false) as number;
console.log(netPrice2);