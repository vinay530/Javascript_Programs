//Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

const test20 = (x) => {
  if (Math.abs(100 - x) <= 20) {
    return true;
  }
  if (Math.abs(400 - x) <= 20) {
    return true
  } else {
    return false
  }
}
console.log(test20(10));
console.log(test20(80));
console.log(test20(90));