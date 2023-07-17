// Task 01:Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”


var city = prompt("Enter city name");

if (city == "karachi") {
    console.log ("Welcome to city of lights");
} else if (city == "multan") {
    console.log ("Welcome to city of saints");
} else if (city == "faisalabad") {
    console.log ("Welcome to city of Manchester of Pakistan");
} else {
    console.log ("Plz enter Karachi or Multan or Faislabad");
}