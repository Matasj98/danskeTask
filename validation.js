const firstArray = [
    ["AAA", "BBB", "CCC"],
    ["AAA", "DDD"],
    ["BBB", "CCC", "DDD"],
];
const secondArray = ["AAA", "BBB"];

const secondArray_2 = ["DDD", "AAA"];

const checkArrays = (array1, array2) => {
    let matchingArrays = 0;
    array1.map((array) => {
        let countIncluded = 0;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array2.length; j++) {
                if (array[i] === array2[j]) countIncluded++;
            }
            if (countIncluded === array2.length && countIncluded === array.length) matchingArrays++;
        }
    });
    if (matchingArrays === 0) return -1;
    return matchingArrays;
};

console.log("example 1. Result: " + checkArrays(firstArray, secondArray));
console.log("example 2. Result: " + checkArrays(firstArray, secondArray_2));
