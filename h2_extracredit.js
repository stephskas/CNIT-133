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
Change the input field background color when a visitor clicks or tabs into it. Select the input field, use the focus( ) event, use $(this) to
address the input field inside the anonymous function, and use the .css( ) function to change the background color of the text field.
*/
$('#usConv').focus(function() {
		$(this).css({
            'background-color' : '#222',
            'color' : '#fff'
            })
	});     // end focus
/* 
All input fields are readonly except for the 'Enter Amount of U.S. Dollars' input field. Entering or changing a value in this input field calls function usdfunc to convert amounts. Calculate conversion values for each currency and insert value into table in corresponding input fields  
*/
function usdfunc() {
    poundConv.value = (usConv.value * pound).toFixed(2);
    canadianConv.value = (usConv.value * canadianDollar).toFixed(2);
    euroConv.value = (usConv.value * euro).toFixed(2);
    yenConv.value = (usConv.value * yen).toFixed(2);
    pesoConv.value = (usConv.value * peso).toFixed(2);
}

// Create script to round to two decimal places to elements using class 'two_decimal'
function currency(n){n=parseFloat(n);return isNaN(n)?false:n.toFixed(2);}

// Create drop-down panel for instructions
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});