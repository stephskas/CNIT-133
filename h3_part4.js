
num1=Math.floor(Math.random() * 10 + 0);
num2=Math.floor(Math.random() * 10 + 0);
    
document.getElementById("question").innerHTML = num1 + " x " + num2 + " =";

function multiplyIt() {
    var x, y, name, a, b, answer;
    x = document.getElementById("aForm");
    y = x.elements["name"].value;

    if (y==num1*num2) {
//document.getElementById("results").innerHTML="Very good!";

        alert("Very good! Click ok if you wish to continue.");
        window.location.reload();
    } 
    else {
//document.getElementById("results").innerHTML="No. Please try again.";
        alert("No. Please try again. Click ok if you wish to continue.");
        
        document.getElementById("aForm").reset();
        }
}
