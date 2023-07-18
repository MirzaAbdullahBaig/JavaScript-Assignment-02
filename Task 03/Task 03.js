// Task 03: Run this script, & check whether alert message would be displayed or not. Record the outputs.

var a = 4;

if (++a === 5) {
    alert("given condition for variable a is true");
    document.write("given condition for variable a is true" + "<br/> <br/>");
}


var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
    document.write("given condition for variable b is true" + "<br/> <br/>");
} else {
    alert("given condition for variable b is false");
    document.write("given condition for variable b is false" + "<br/> <br/>");
}


var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
    document.write("condition 1 is true" + "<br/> <br/>");
}
if (c === 13){
    alert("condition 2 is true");
    document.write("condition 2 is true" + "<br/> <br/>");
}
if (++c < 14){
    alert("condition 3 is true");
    document.write("condition 3 is true" + "<br/> <br/>");
}
if(c === 14){
    alert("condition 4 is true");
    document.write("condition 4 is true" + "<br/> <br/>");
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
    document.write("The cost equals" + "<br/> <br/>");
}


if (true){
    alert("True");
    document.write("True" + "<br/> <br/>");
}
if (false){
    alert ("False");
    document.write("False" + "<br/> <br/>");
}


if("car" < "cat"){
    alert("car is smaller than cat");
    document.write("car is smaller than cat" + "<br/> <br/>");
}
