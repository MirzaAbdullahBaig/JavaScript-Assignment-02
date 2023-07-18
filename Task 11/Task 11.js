// Task 11: Write a program that take time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements:

var hours = prompt ("Enter time in 24 hours clock format, enter just hour not mints");
var time = parseInt (hours * 100);

if (time >= 0 && time < 1200) {
    document.write("Good Mornings");
} else if (time >= 1200 && time < 1700) {
    document.write("Good afternoon");
} else if (time >= 1700 && time < 2100) {
    document.write("Good evening");
} else if (time >= 2100 && time <= 2400) {
    document.write("Good night");
}