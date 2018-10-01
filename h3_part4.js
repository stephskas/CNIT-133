
var game = document.getElementById("game");    

// Generate 2 random numbers
var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);
var correctAns = num1 * num2;

function generateNumbers() {
// Display question   
document.getElementById("question").innerHTML = num1 + " x " + num2 + " = ";
}
function multiply() {

// Provide response if the response is correct
    var response = document.getElementById("response").value;
    if (response == correctAns) {
        alert('test');
    }
       /* document.getElementById("result").innerHTML = "Very good! Would you like to play again?";
        }
// Provide response if the response is not correct
    else {
        result = "No. Please try again.";
        response = "";
        }
} */
