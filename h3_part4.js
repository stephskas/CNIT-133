
var game = document.getElementById("game");    

// Generate 2 random numbers
var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);

function generateNumbers() {
// Display question   
document.getElementById("question").innerHTML = num1 + " x " + num2 + " = ";
}

function checkAnswer() {
// Provide response if the response is correct
    var response = document.getElementById("response").value;
    // Multiply the 2 random numbers (this will run when the Check Answer button is clicked)
    var correctAns = this.num1 * this.num2;
    
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
