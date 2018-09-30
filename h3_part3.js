// Convert Fahrenheit value to Celsius
function convertToC() {
    var fahrenheit = document.getElementById("fTemp").value;
    
    var celsius = (fahrenheit - 32) * (5 / 9);
// Validate celsius and provide messaging if celsius is not a number    
    if (isNaN(celsius)) {
        document.getElementById("errorMsgC").innerHTML = "Please enter numbers only.";
    } else {
// Display Celsius temperature with one digit after decimal place
    document.getElementById("cTemp").value = celsius.toFixed(1);
    }
}
// Convert Celsius value to Fahrenheit
function convertToF() {
    
    var celsius = document.getElementById('cTemp').value;
    
    var fahrenheit = (celsius * (9 / 5)) + 32;
    
// Validate celsius and provide messaging if celsius is not a number    
    if (isNaN(fahrenheit)) {
        document.getElementById("errorMsgF").innerHTML = "Please enter numbers only.";
    } else {
 // Display Fahrenheit temperature with one digit after decimal place   
    document.getElementById("fTemp").value = fahrenheit.toFixed(1);
    }
}