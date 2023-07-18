// Task 09: Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise:

var isVolwel = prompt ("Enter any onr letter");

var character = isVolwel.toLocaleLowerCase();

if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
    document.write(true);
} else {
    document.write(false);
}