
var game = document.getElementById("game");    
// Generate numbers
function generateNumbers() {
// Generate 2 random numbers
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
// Display question   
document.getElementById("question").innerHTML = num1 + " x " + num2 + " = ";
}
// Multiply the 2 random numbers (this will run when the Check Answer button is clicked)
function multiply() {
    var correctAns = num1 * num2;
// Provide response if the response is correct
    var response = document.getElementById("response").value;
    if (response == correctAns) {
        document.getElementById("result").innerHTML = "Very good! Would you like to play again?";
        }
// Provide response if the response is not correct
    else {
        result = "No. Please try again.";
        response = "";
        }
}
