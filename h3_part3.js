//Declare variables
var fTemp = document.getElementById('fTemp').value;
var cTemp = document.getElementById('fTemp').value;
// Validate input values to make sure field isn't empty
function validate() {
    if (isNaN(fTemp || cTemp)){
    document.getElementById('errorMsg').innerHTML = "<emphasis>Please enter numbers only.";
    }
}

// Convert Fahrenheit value to Celsius
function convertToC() {
    var fahrenheit = parseFloat(document.getElementById('fTemp').value);
    
    var celsius = (fahrenheit - 32) * (5 / 9);
    
// Display Celsius temperature with one digit after decimal place
    document.getElementById('cTemp').value = celsius.toFixed(1);
    
    return false;
}

// Convert Celsius value to Fahrenheit
function convertToF() {
    
    var celsius = parseFloat(document.getElementById('cTemp').value);
    
    var fahrenheit = (celsius * (9 / 5)) + 32;
    
 // Display Fahrenheit temperature with one digit after decimal place   
    document.getElementById('fTemp').value = fahrenheit.toFixed(1);
    
    return false;
}
