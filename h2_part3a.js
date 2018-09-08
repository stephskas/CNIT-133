
//  Store the 5 inputed numbers in variables
var n1 = document.getElementById("num1").value; 
var n2 = document.getElementById("num2").value; 
var n3 = document.getElementById("num3").value; 
var n4 = document.getElementById("num4").value; 
var n5 = document.getElementById("num5").value; 

n1 = parseInt(n1, 10);
n2 = parseInt(n2, 10);
n3 = parseInt(n3, 10);
n4 = parseInt(n4, 10);
n5 = parseInt(n5, 10);

// Count the number of the negative numbers, the number of positive numbers, and the number of zeros
var numbers = [n1, n2, n3, n4, n5];

/*
for (var i = 0; i < numbers.length; i++) {

    if (numbers[i] === 0) {
        zero = numbers[i];
    }
    else if(numbers[i] > 0) {
        positive = numbers[i];
    }
    else {
        negative = numbers[i];
    }
}
*/
var positive = numbers.filter(v => v > 0).length;
var negative = numbers.filter(v => v < 0).length;
var zero = numbers.filter(v => v == 0).length;

// Create reference to RESULTS button
var resultsBtn = document.getElementById('button_results');

// Clicking on the RESULTS button inserts the number of positive, negative and zero numbers into the corresponding input fields
resultsBtn.addEventListener('click', calculate);
function calculate() {
document.getElementById("positiveNumbers").value = positive;
document.getElementById("negativeNumbers").value = negative;
document.getElementById("zeros").value = zero; 
}

// Using jQuery clicking on 'Click to Fade Results' button fades the results
$(document).ready(function(){
    $("input#button_fadeResults").click(function(){
        $("textarea#positiveNumbers").fadeTo("slow", 0);
        $("textarea#negativeNumbers").fadeTo("slow", 0);
        $("textarea#zeros").fadeTo("slow", 0);
        $("#num1").val("")
        $("#num2").val("")
        $("#num3").val("")
        $("#num4").val("")
        $("#num5").val("")
    })
})


    
