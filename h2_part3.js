// Create reference to RESULTS button
    var resultsBtn = document.getElementById('button_results');
// Clicking on the RESULTS button inserts the number of positive, negative and zero numbers into the corresponding input fields
resultsBtn.addEventListener('click', calculate);
function calculate() {
// Store the 5 inputed numbers in variables and convert input type to number
    var n1 = parseInt(document.getElementById('num1').value); 
    var n2 = parseInt(document.getElementById('num2').value); 
    var n3 = parseInt(document.getElementById('num3').value); 
    var n4 = parseInt(document.getElementById('num4').value); 
    var n5 = parseInt(document.getElementById('num5').value); 
// Count the number of the negative numbers, the number of positive numbers, and the number of zeros
    var numbers = [n1, n2, n3, n4, n5];
    var zero;
    var positive;
    var negative;

    positive = numbers.filter(v => v > 0).length;
    negative = numbers.filter(v => v < 0).length;
    zero = numbers.filter(v => v == 0).length;
};
    
/*  For (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            zero = numbers[i];
        }
        else if(numbers[i] > 0) {
            positive = numbers[i];
        }
        else {
            negative = numbers[i];

  }
*/  
    
var positiveNumbers = document.getElementById("positiveNumbers").value;
var negativeNumbers = document.getElementById("negativeNumbers").value;
var zeros = document.getElementById("zeros").value; 

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
});


    