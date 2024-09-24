let numbers = [3,7,12,5,8];

let squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers);

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

let sum = numbers.reduce((acc, currVal) => acc + currVal, 0);
console.log(sum);

function checkNumbers(num) {
    if (typeof num !== "number") {
        return false
    }
    return num >= 10 && num % 2 === 0
}

console.log(checkNumbers(14));


