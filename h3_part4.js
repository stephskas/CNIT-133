
// Multiply the 2 random numbers (this will run when the Check Answer button is clicked)
function multiply() {
// Initialize variables
    var game = document.getElementById("game");    
    var correctAns = num1 * num2;
    var response = document.getElementById("response").value;
// Generate 2 random numbers
    var results = document.getElementById("results").innerHTML;
// Generate 2 random numbers
var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);
// Display question   
document.getElementById("question").innerHTML = num1 + " x " + num2 + " =";
// Provide response if the response is correct
    if (response == correctAns) {
        results = "Very good! Would you like to play again?";
        }
// Provide response if the response is not correct
    else {
        results = "No. Please try again.";
        response = "";
        }
}
