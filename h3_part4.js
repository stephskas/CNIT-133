
// Generate 2 random numbers
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    document.getElementById("question").innerHTML = num1 + " x " + num2 + " = ";

// Multiply the 2 random numbers (this will run when the Check Answer button is clicked){
    function checkAnswer() {
        var x,y,name,a,b,answer;

        x=document.getElementById("aForm") ;
        y=x.elements["name"].value;

        if (y==num1*num2) {
            //document.getElementById("results").innerHTML="Very good!";
            alert("Very Good! Click ok if you wish to continue.");
            window.location.reload();

            } 
                 else { //document.getElementById("results").innerHTML="No. Please try again.";
                alert("No. Please try again. Click ok if you wish to continue.")
                document.getElementById("game").reset();
            }
}
