// Task 06: Write a program that checks whether the given input is an even number or an odd number.

var number = prompt ("Enter some number, one digit or multiple digit as you wish");

var even_odd = number % 2;

if (even_odd === 0) {
    document.write("Your number is Even");
} else {
    document.write("Your number is Odd");
}