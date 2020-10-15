/*
An enum is a group of named constant values. Enum stands for enumerated type.

To define an enum, you follow these steps:

First, use the enum keyword followed by the name of the enum.
Then, define constant values for the enum.

Syntex:enum name {constant1, constant2, ...};
*/

enum Month {
    Jan=1,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

console.log(Month);

function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}

console.log(isItSummer(Month.Jun)); // true