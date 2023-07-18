// Task 02: Write a program to take input color of road traffic signal from the user & show the message according to this table:

var trafficLight = prompt ("Plz Enter the road traffic signal");

if ( trafficLight == "red") {
    document.write ("Must Stop");
} else if ( trafficLight == "yellow") {
    document.write ("Ready To Move");
} else if ( trafficLight == "green") {
    document.write ("Move Now");
}  else {
    document.write ("Enter the road traffic signal red, green or yellow");
}