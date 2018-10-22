/* 
Create a webpage that contains a script that will calculate compound interest on a principal of $1000 for interest rates of 5, 6, 7, 8, 9, and 10%, for years 1 through 10. The formula to use is :

P is the principal (the initial amount you borrow or deposit) 

r is the annual rate of interest (percentage)

n is the number of years the amount is deposited

A is the amount of money accumulated after n years, including interest

A = P(1 + r)n 

Output in table format the year followed by the total amount calculated for each of the interest rates of 5% - 10%. (Be sure to include cents.) Your 3rd column should contain the corresponding interest rate. For example, the first 5 table rows should display as:
*/

//Declare variables
var year, intRate;
// Calculate the compound interest on principal of $1000 for interest rates of 5 through 10% for 1-10 years 
for (intRate = 5; intRate <= 10; intRate++) {
    //Create table and table headers and add class for styling 
	document.write('<table id=\'tableStyle\'>');
	document.write('<tr><th>Year</th><th>Amount on Deposit' +
		'</th><th>Interest Rate</th></tr>')

	   for (year = 1; year <= 10; year++) {

            document.write('<tr>');
           // First column display Year, second column display Amount on Deposit rounded to 2 decimals, third column display Interest Rate rounded to 2 decimals
            document.write('<td>' + year + '</td><td>' +
                (Math.pow((1 + (intRate / 100)), year) * 1000).toFixed(2) +
                '</td><td>' + (intRate / 100).toFixed(2) + '</td>');
            document.write('</tr>');
        }
}
document.write('</table>');

//jquery for changing row colors
$(function () {
	$("table tr:nth-child(even)").addClass("rowColor1");
    $("table tr:nth-child(odd)").addClass("rowColor2");
});
    