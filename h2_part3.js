// Create reference to RESULTS button
    var resultsBtn = document.getElementById('button_results');
// Clicking on the RESULTS button inserts the number of positive, negative and zero numbers into the corresponding input fields
resultsBtn.addEventListener('click', calculate);
function calculate() {
// Store the 5 inputed numbers in variables and convert input type to number
    var n1 = parseInt(document.getElementById('n1').value), 
        n2 = parseInt(document.getElementById('n2').value), 
        n3 = parseInt(document.getElementById('n3').value), 
        n4 = parseInt(document.getElementById('n4').value), 
        n5 = parseInt(document.getElementById('n5').value); 
// Count the number of the negative numbers, the number of positive numbers, and the number of zeros
    var numbers = [n1, n2, n3, n4, n5];
    var positiveCount = 0,
        negativeCount = 0,
        zeroCount = 0;
    
    numbers.forEach((number) => {
        if (number === 0) {
            zeroCount++ 
        } else if (number < 0) {
            negativeCount++
        } else if (number > 0) {
            positiveCount++
        }
    })
// Store locations of textareas for calculated values  
    var positiveNumbers = document.getElementById('positiveNumbers');
    var negativeNumbers = document.getElementById('negativeNumbers');
    var zeros = document.getElementById('zeros'); 
// Insert calculated value into corresponding textarea
    positiveNumbers.value = positiveCount;
    negativeNumbers.value = negativeCount;
    zeros.value = zeroCount;
};

/*    
positive = numbers.filter(v => v > 0).length;
    negative = numbers.filter(v => v < 0).length;
    zero = numbers.filter(v => v == 0).length;
};
*/  
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
});


    