// Task 10: Write a program that:

// Store correct password in a JS variable.
// Asks the user to enter his/her password
// Validate the two passwords:

// Check if user has entered password. If not, then give the message “ Please enter your password”
// Check if both passwords are the same. If they are the same, show message “Correct! The password you entered matches the original password”. Show “Incorrectpassword” otherwise.

var password = prompt ("Creat a new password");
var confrim_password = prompt ("Re-enter the password you just created");

if (!confrim_password) {
    document.write("“Please enter your password”");
} else if (confrim_password === password) {
    document.write("“Correct! The password you entered matches the original password”");
} else {
    document.write("“Incorrect password”");
}