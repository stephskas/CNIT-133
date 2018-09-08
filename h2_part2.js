// Create reference to SUBMIT and RESET buttons
    var submitBtn = document.getElementById('button_submit');
    var resetBtn = document.getElementById('button_reset');
// Clicking on the SUBMIT Button inserts sum, average, product, smallest number, and largest number into the corresponding input fields
submitBtn.addEventListener('click', calculate);
function calculate() {
// Store the 3 inputed numbers in variables and convert input type to number
    var n1 = parseInt(document.getElementById('n1').value); 
    var n2 = parseInt(document.getElementById('n2').value); 
    var n3 = parseInt(document.getElementById('n3').value); 
// Convert inputed string into numbers
    var numbers = [n1, n2, n3];
// Calculate sum of the 3 numbers
    var sum = n1 + n2 + n3;
// Calculate average of the 3 numbers
    var average = parseInt(sum/numbers.length);
// Calculate product of the 3 numbers
    var product = parseInt(n1 * n2 * n3);
// Calculate the smallest number
    var smallest = Math.min(...numbers);
// Calculate the largest number
    var largest = Math.max(...numbers);
// Create and initialize variables for results
    var sumResult = document.getElementById('sumResult');
    var averageResult = document.getElementById('averageResult');
    var productResult = document.getElementById('productResult');
    var smallestResult = document.getElementById('smallestResult');
    var largestResult = document.getElementById('largestResult');
// Insert calculated value into corresponding textarea
    sumResult.value = sum;
    averageResult.value = average;
    productResult.value = product;
    smallestResult.value = smallest; 
    largestResult.value = largest;   
};
// Clicking on the RESET Button runs the reset function 
resetBtn.addEventListener('click', clearResults);
function clearResults(){
        n1.value = "";
        n2.value = "";
        n3.value = "";
        sumResult.value = "";
        averageResult.value = "";
        productResult.value = "";
        smallestResult.value = ""; 
        largestResult.value = ""; 
    
};
