
// Generate 2 random numbers
var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);
document.getElementById("question").innerHTML = num1 + " x " + num2 + " = ";
var correctAns = num1 * num2;
// Multiply the 2 random numbers (this will run when the Check Answer button is clicked){
function multiply() {
    var form, responseInput, response, correctAns, result;
// Store form input value in variable 
  form = document.getElementById("game");
  response = form.elements["responseInput"].value;
    
  if (response == num1 * num2) {
      alert('yes');
      document.getElementById("result").innerHTML = "Very good! Would you like to play again?";
        }
// Provide response if the response is not correct
    else {
        result = "No. Please try again.";
        response = "";
        }
} */
