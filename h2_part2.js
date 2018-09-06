
function sum() {
    var numbers = document.querySelector("input");
    var total = 0;
    
    for( var i = 0; i < numbers.length; i++) {
        total += parseInt(numbers[i].value);
    }
    document.getElementById("sum").value = total;
    document.write(total);
}
$("#button_submit").on("click", function(){
    sum();
};