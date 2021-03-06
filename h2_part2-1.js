//  Store the 3 inputed numbers in variables
var n1 = parseInt(document.getElementById('n1').value); 
var n2 = parseInt(document.getElementById('n2').value); 
var n3 = parseInt(document.getElementById('n3').value); 
// Convert inputed string into numbers and calculate sum of the 3 numbers
var sum = n1 + n2 + n3;
// Calculate average of the 3 numbers
var numbers = [n1, n2, n3];
var average = parseInt(sum/numbers.length);
// Calculate average of the 3 numbers
var product = parseInt(n1 * n2 * n3);
// Calculate smallest and largest numbers
var largest = numbers[0];
var smallest = numbers[0];
for (var i = 1; i < numbers.length; i++) {

    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    else if(numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
// Create reference to SUBMIT and RESET buttons
var submitBtn = document.getElementById('button_submit');
var resetBtn = document.getElementById('button_reset');

// Clicking on the SUBMIT Button inserts sum, average, product, smalles number, and largest number into the corresponding input fields
submitBtn.addEventListener('click', calculate);
function calculate() {
document.getElementById("sumResult").value = sum;
document.getElementById("averageResult").value = average;
document.getElementById("productResult").value = product;
document.getElementById("smallestResult").value = smallest; 
document.getElementById("largestResult").value = largest;   
}

// Clicking on the RESET Button runs the reset function 
document.getElementById('button_reset').addEventListener('click', reset);
function reset() {
document.getElementById("sumResult").value = "";
document.getElementById("averageResult").value = "";
document.getElementById("productResult").value = "";
document.getElementById("smallestResult").value = ""; 
document.getElementById("largestResult").value = "";  
}
