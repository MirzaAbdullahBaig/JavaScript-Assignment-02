// Task 07: Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:

// First number
// Second number
// Operation (+, -, *, /, %)

// Compute & show the calculated result to user.

var firstNumber = prompt ("Enter First Number");
var operation = prompt ("Plz enter any operational sing like; + - * / %");
var SecondNumber = prompt ("Enter Second Number");

if (operation == "+") {
    document.write(parseInt (firstNumber) + parseInt(SecondNumber));
} else if (operation == "-") {
    document.write(parseInt (firstNumber) - parseInt(SecondNumber));
} else if (operation == "*") {
    document.write(parseInt (firstNumber) * parseInt(SecondNumber));
} else if (operation == "/") {
    document.write(parseInt (firstNumber) / parseInt(SecondNumber));
} else if (operation == "%") {
    document.write(parseInt (firstNumber) % parseInt(SecondNumber));
} else {
    document.write("Plz enter any operational sing like; + - * / %");
}