// Generate 2 random numbers
var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);
// Display question   
document.getElementById("question").innerHTML = num1 + " x " + num2 + " =";
// Multiply the 2 random numbers (this will run when the Check Answer button is clicked)
function multiply() {
// Initialize variables
    var game = document.getElementById("game");
    var response = document.getElementById("response");
    var correctAns = num1 * num2;
    var response = document.getElementById("response").innerHTML;
// Provide response if the response is correct
    if (response == correctAns) {
        response = "Very good! Would you like to play again?";
        num1 = "";
        num2 = "";
        }
    else {
        response = "No. Please try again.";
        document.getElementById("game").reset();
        }
}
