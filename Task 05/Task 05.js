// Task 05: Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.

// If user guesses the same number, show “Bingo! Correct answer”.

// If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

var number = 6;
var guss_number = prompt ("Guess the secret number 1-10");

if (guss_number == number) {
    document.write("“Bingo! Correct answer”");
} else if (guss_number == number+1) {
    document.write("“Close enough to the correct answer”");
} else {
    document.write("“Wrong Answer! Try again”");
}