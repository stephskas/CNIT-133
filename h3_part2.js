
//Display the Sales Representative Name on submit
function addRep() {
        var repName = document.getElementById("repName").value;
        document.getElementById("displayRep").innerHTML = repName;
        }
        
function calc(){
//Create reference for values entered into Number of Items Sold fields for Items 1 - 4
        var item1v = document.getElementById("item1").value;
        var item2v = document.getElementById("item2").value;
        var item3v = document.getElementById("item3").value;
        var item4v = document.getElementById("item4").value;
    
//Provide messaging if any values entered Number of Items Sold fields for Items 1 - 4 is not a number
        if (isNaN(item1v || item2v || item3v || item4v)){
            document.getElementById('errorMsg').innerHTML = "<emphasis>Please enter numbers only.";
            }
    
//Provide messaging if any values entered Number of Items Sold fields for Items 1 - 4 is less than zero
        else if ((item1v < 0 || item2v < 0 || item3v < 0 || item4v < 0) ){
            document.getElementById('errorMsg').innerHTML = " Please enter positive numbers only.";
            }
//Write the Number of Items Sold values into the calc table in the quantity sold cells
        else {        
        document.getElementById("qty1").innerHTML = Math.floor(item1v);
            document.getElementById("qty2").innerHTML = Math.floor(item2v);
            document.getElementById("qty3").innerHTML = Math.floor(item3v);
            document.getElementById("qty4").innerHTML = Math.floor(item4v);
                
//Store values for items 1-4 and calculate sales total per item (price per item * number of the item sold) 
            var item1Total = parseInt(239.99 * item1v).toFixed(2);
            var item2Total= parseInt(129.75 * item2v).toFixed(2);
            var item3Total = parseInt(99.95 * item3v).toFixed(2);
            var item4Total = parseInt(350.89 * item4v).toFixed(2); 

//Calculate total amount sold and return a floating point number (if value cannot be converted to a number return NaN), if the total is a valid number round total to 2 decimal places, + operator returns the numeric representation of the object
            var total = +item1Total + +item2Total + +item3Total + +item4Total;
            total = parseInt(total);
            total = Math.round(total * 100)/100;
                 
//Write the item sales totals into the calc table totals cells
            document.getElementById("sales1").innerHTML = item1Total;
            document.getElementById("sales2").innerHTML = item2Total;
            document.getElementById("sales3").innerHTML = item3Total;
            document.getElementById("sales4").innerHTML = item4Total;
                 
//Write the total into calc table cell for Total Amount Sold 
            document.getElementById("amtSold").innerHTML = total.toFixed(2);

//Calculate total weekly earnings amount ($200 per week, plus 9% of gross sales for that week) and return a floating point number and round total to 2 decimal places
            var wkTotal = parseFloat((total * .09)+ 200);
            wkTotal = Math.round(wkTotal * 100)/100;

//Write the total weekly earnings into the calc table cell for Total Weekly Earnings
            document.getElementById('wkTotal').innerHTML = wkTotal.toFixed(2);
            }
         }

        