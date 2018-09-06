//  Store the 3 inputed numbers in variables
var n1 = parseInt(document.getElementById("n1").value); 
var n2 = parseInt(document.getElementById("n2").value); 
var n3 = parseInt(document.getElementById("n3").value);
parseInt(n1);
parseInt(n2);
parseInt(n3);
var numbers = [n1, n2, n3];
// Convert inputed string into numbers and calculate sum of the 3 numbers

var sum = parseInt(n1 + n2 + n3);
// Calculate average of the 3 numbers
var average = parseInt(sum/numbers.length);
// Calculate average of the 3 numbers
var product = parseInt(n1 * n2 * n3);
// Calculate smallest number
var smallest = parseInt(Math.min(...numbers));
// Calculate largest number
var largest = parseInt(Math.max(...numbers));

// Create reference to SUBMIT and RESET buttons
var submitBtn = document.getElementById('button_submit');
var resetBtn = document.getElementById('button_reset');

// Clicking on the SUBMIT button inserts sum, average, product, smalles number, and largest number into the corresponding input fields
submitBtn.addEventListener('click', calculate);

function calculate() {
document.getElementById("sumResult").value = sum;
document.getElementById("averageResult").value = average;
document.getElementById("productResult").value = product;
document.getElementById("smallestResult").value = smallest; 
document.getElementById("largestResult").value = largest;  
}

// Clicking on the RESET button runs the reset function and clears all values
// Using jQuery clicking on RESET Button runs the reset function and clears all values
$(document).ready(function(){
    $("input#button_reset").click(function(){
        $("#numbers")[0].reset();
        $("#sumResult").val("")
        $("#averageResult").val("")
        $("#productResult").val("")
        $("#smallestResult").val("")
        $("#largestResult").val("")
    })
})

/*
document.getElementById('button_reset').addEventListener('click', reset);
function reset() {
document.getElementById("sumResult").value = "";
document.getElementById("averageResult").value = "";
document.getElementById("productResult").value = "";
document.getElementById("smallestResult").value = ""; 
document.getElementById("largestResult").value = ""; 
document.getElementById("n1").value = "";
document.getElementById("n2").value = "";
document.getElementById("n3").value = "";
}*/
