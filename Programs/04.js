//Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

function positiveNegative(x, y) {
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    return true;
  }
  else {
    return false;
  }
}
console.log(positiveNegative(2, 2));