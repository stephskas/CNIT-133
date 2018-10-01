var num1, num2;
function generateNumbers() {
// Generate 2 random numbers
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    document.getElementById("question").innerHTML = num1 + " x " + num2 + " = ";
}
// Multiply the 2 random numbers (this will run when the Check Answer button is clicked){
function checkAnswer() {
	var answer = parseInt(document.forms["game"].elements["response"].value);
	var correctAnswer = num1 * num2;	

	if (correctAnswer == answer) {
		document.getElementById('results').innerHTML = ("Very Good! Do you want to play Again?");
		$("game")[0].reset();		
	} 
	else 
	{	
		document.getElementById("result").innerHTML = ("No. Please try again.");
		$("game")[0].reset();
	}
}


