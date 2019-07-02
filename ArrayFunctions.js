// 1. Create a function which checks duplicate numbers in an array and how many times its duplicate'
let a = [1, 1, 3, 5, 2, 3, 7, 8, 1, 1, 3, 5, 2, 3, 7, 8];
let duplicate = {};

a.sort((a, b) => {
    if (a === b) {
        if (duplicate[a.toString()]) {
            duplicate[a.toString()]++;
        } else {
            duplicate[a.toString()] = 2;
        }
        return 0;
    } else if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    }
});

console.log('Problem 1:');
console.log(String(a));
console.log(JSON.stringify(duplicate));
console.log('----------------');

// 2. Create a function which checks the sum of the number to equal to another number and how many pairs are there which sum up to that number
const AnotherNumber = 8;
let b = [1, 1, 3, 5, 2, 3, 7, 8, 1, 1, 3, 5, 2, 3, 7, 8];
let pairs = [];

b.sort((a, b) => {
    if (a + b === AnotherNumber) {
        pairs.push(String([a, b]));
    }
    if (a === b) {
        return 0;
    } else if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    }
});

console.log('Problem 2:');
console.log(String(pairs));
console.log('----------------');