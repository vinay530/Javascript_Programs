//Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
const test50 = (x, y) => {
    return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(23,27));