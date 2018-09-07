// Create variables to store conversion rates for US Dollar, British Pound, Canadian Dollar, Euro, Japanese Yen, and Mexican Peso and initialize
var usDollar = 1;
var pound = 0.77521;
var canadianDollar = 1.344;
var euro = 0.886;
var yen = 1093.85;
var peso = 18.28;

var usConv = document.getElementById("usConv");
var poundConv = document.getElementById("poundConv");
var canadianConv = document.getElementById("canadianConv");
var euroConv = document.getElementById("euroConv");
var yenConv = document.getElementById("yenConv");
var pesoConv = document.getElementById("pesoConv");

/* 
All input fields are readonly except for the 'Enter Amount of U.S. Dollars' input field. Entering or changing a value in this input field calls function usdfunc to convert amounts. Calculate conversion values for each currency and insert value into table in corresponding input fields  
*/

function usdfunc() {
    poundConv.value = parseFloat(usConv.value) * pound;
    canadianConv.value = parseFloat(usConv.value) * canadianDollar;
    euroConv.value = parseFloat(usConv.value) * euro;
    yenConv.value = parseFloat(usConv.value) * yen;
    pesoConv.value = parseFloat(usConv.value) * peso;
}


// Create drop-down panel for instructions
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});