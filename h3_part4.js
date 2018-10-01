
// Generate 2 random numbers
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    document.getElementById("question").innerHTML = num1 + " x " + num2 + " = ";

// Multiply the 2 random numbers (this will run when the Check Answer button is clicked){
    function checkAnswer() {
        var form, response,name,a,b,answer;

        form = document.getElementById("game") ;
        response = form.elements["responseInput"].value;

        if (response == num1 * num2) {
            /*document.getElementById("results").innerHTML= "Very good!";*/
            alert("Very Good! Click ok if you wish to continue.");
            window.location.reload();

            } 
                 else { /*document.getElementById("results").innerHTML="No. Please try again.";*/
                
                response = "";
                document.getElementById("game").reset();
            }
}
