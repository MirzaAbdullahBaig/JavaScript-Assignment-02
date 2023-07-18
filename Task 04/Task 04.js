// Task 04: Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

document.write("Mark Sheet" + "<br/><br/><br/><br/>");

var scienceMarks = prompt("What's your science subtject marks out of 100");
var mathMarks = prompt("What's your math subtject marks out of 100");
var englishMarks = prompt("What's your english subtject marks out of 100");

var totalMarks = 300;
var obtainedMarks = parseInt(scienceMarks) + parseInt(mathMarks) + parseInt(englishMarks);
var percentage = obtainedMarks / totalMarks * 100;

document.write("Total Marks : " + totalMarks + "<br><br>");
document.write("Marks Obtained : " + obtainedMarks + "<br><br>");
document.write("Percentage : " + percentage + "<br><br>");

if (percentage >= 80) {
    document.write("Grade : A-one" + "<br><br>");
    document.write("Remarks : Excellent" + "<br><br>");
} else if (percentage >= 70) {
    document.write("Grade : A" + "<br><br>");
    document.write("Remarks : Good" + "<br><br>");
} else if (percentage >= 60) {
    document.write("Grade : B" + "<br><br>");
    document.write("Remarks : You need to improve" + "<br><br>");
} else {
    document.write("Grade : Fail" + "<br><br>");
    document.write("Remarks : Try again" + "<br><br>");
}