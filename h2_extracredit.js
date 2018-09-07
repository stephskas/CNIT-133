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
// Entering value into input field calls function to convert amounts
document.getElementById("usConv").onchange = function() {usdfunc()};
*/
// Calculate conversion values for each currency        
function usdfunc() {
    poundConv.value = parseFloat(usConv.value) * pound;
    canadianConv.value = parseFloat(usConv.value) * canadianDollar;
    euroConv.value = parseFloat(usConv.value) * euro;
    yenConv.value = parseFloat(usConv.value) * yen;
    pesoConv.value = parseFloat(usConv.value) * peso;
}

    /*
    conversionTable_06062017 = 
    document.write( "<table id=\"table4\" style='color:white;text-align:right;border:1px solid #fff;'> <tr style='border:2px solid #333;'> <th style='border:1px dotted grey;' colspan='3'>Monetary Exchange Rate</th></tr><tr><th style='border:1px dotted grey;'>Currency</th><th style='border:1px dotted grey;'>Rate</th><th style='border:1px dotted grey;'>Value</th></tr>" ) 

    document.write( "<tr style='border:2px solid #333;'><td style='border:1px dotted grey;'>" + "British Pound" + "</td><td style='border:1px dotted grey;'>" + "0.77517" + "</td><td style='border:1px dotted grey;'>" + poundConv + "</td></tr>" ) 
    
    document.write( "<tr style='border:2px solid #333;'><td style='border:1px dotted grey;'>" + "Canadian Dollar" + "</td><td style='border:1px dotted grey;'>" + "1.344" + "</td><td style='border:1px dotted grey;'>" + canadianConv + "</td></tr>" )     
    document.write( "<tr style='border:2px solid #333;'><td style='border:1px dotted grey;'>" + "Euro" + "</td><td style='border:1px dotted grey;'>" + "0.77517" + "</td><td style='border:1px dotted grey;'>" + euroConv + "</td></tr>" ) 
    
    document.write( "<tr style='border:2px solid #333;'><td style='border:1px dotted grey;'>" + "Japanese Yen" + "</td><td style='border:1px dotted grey;'>" + "0.77517" + "</td><td style='border:1px dotted grey;'>" + yenConv + "</td></tr>" )     

    document.write( "<tr style='border:2px solid #333;'><td style='border:1px dotted grey;'>" + "Mexican Peso" + "</td><td style='border:1px dotted grey;'>" + "0.77517" + "</td><td style='border:1px dotted grey;'>" + pesoConv + "<br>" + ""</td></tr>" ) 
    
    document.write( "<tr style='border:2px solid #333;'><td style='border:1px dotted grey;' colspan='2'>" + "Enter Amount of U.S. Dollar" + "</td><td style='border:1px dotted grey;'>" + "<input type='number' id='dollar1' value='0'></td></tr>" ) 
    
    document.write( "</table>" )    
}
*/