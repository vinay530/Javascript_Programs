// Write a JavaScript program to calculate multiplication and division of two numbers (input from user)

const multiplication = () => {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;

}

const division = () => {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

const newMul = (num3,num5) => {
   let output = num3 * num5;
   console.log(output);
}
newMul(22,3);