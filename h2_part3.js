//  Store the 5 inputed numbers in variables
var n1 = parseInt(document.getElementById("n1").value); 
var n2 = parseInt(document.getElementById("n2").value); 
var n3 = parseInt(document.getElementById("n3").value); 
var n4 = parseInt(document.getElementById("n4").value); 
var n5 = parseInt(document.getElementById("n5").value); 
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
        $("#n1").val("")
        $("#n2").val("")
        $("#n3").val("")
        $("#n4").val("")
        $("#n5").val("")
    })
})


    