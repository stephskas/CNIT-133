//  Store the 3 inputed numbers in variables
var n1 = parseInt(document.getElementById('n1').value); 
var n2 = parseInt(document.getElementById('n2').value); 
var n3 = parseInt(document.getElementById('n3').value); 

// Calculate sum of the 3 numbers
var sum = n1 + n2 + n3;
// Calculate average of the 3 numbers
var average = parseInt(sum/numbers.length);
// Calculate average of the 3 numbers
var product = parseInt(n1 * n2 * n3);
// Calculate smallest and largest numbers
// Convert inputed string into numbers and calculate smallest numbers
var numbers = [n1, n2, n3];
var smallest = Math.min(...numbers);
// Calculate largest numbers
var largest = Math.max(...numbers);

// Create reference to SUBMIT and RESET buttons
var submitBtn = document.getElementById('button_submit');
var resetBtn = document.getElementById('button_reset');

// Create and initialize variables for results
var sumResult = document.getElementById('sumResult');
var averageResult = document.getElementById('averageResult');
var productResult = document.getElementById('productResult');
var smallestResult = document.getElementById('smallestResult');
var largestResult = document.getElementById('largestResult');

// Clicking on the SUBMIT Button inserts sum, average, product, smallest number, and largest number into the corresponding input fields
submitBtn.addEventListener('click', calculate);
function calculate() {
sumResult.value = sum;
averageResult.value = average;
productResult.value = product;
smallestResult.value = smallest; 
largestResult.value = largest;   
}

// Clicking on the RESET Button runs the reset function 
resetBtn.addEventListener('click', clearResults);
function clearResults()
{
sumResult.value = "";
averageResult.value = "";
productResult.value = "";
smallestResult.value = ""; 
largestResult.value = "";   
}
}
/*document.getElementById('button_reset').addEventListener('click', reset);
function reset() {
document.getElementById("sumResult").value = "";
document.getElementById("averageResult").value = "";
document.getElementById("productResult").value = "";
document.getElementById("smallestResult").value = ""; 
document.getElementById("largestResult").value = "";  
}
*/
