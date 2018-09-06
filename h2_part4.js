
document.write( "<table id=\"table4\" style='color:white;text-align:right;border:1px solid #fff;'> <tr style='border:2px solid #333;'> <th style='border:1px dotted grey;'>Number</th> <th style='border:1px dotted grey;'>Square</th> <th style='border:1px dotted grey;'>Cube</th> </tr></section>" ) 
for(var n=1; n<=6; n++) 
{ 
document.write( "<tr style='border:2px solid #333;'><td style='border:1px dotted grey;'>" + n + "</td><td style='border:1px dotted grey;'>" + n*n + "</td><td style='border:1px dotted grey;'>" + n*n*n + "</td></tr>" ) 
} 
document.write( "</table>" ) 