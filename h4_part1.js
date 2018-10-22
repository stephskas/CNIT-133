// PART 1a
var sum = 0;
var product = 1;             

// Calculate the sum and product of every third integer from 5 to 20 inclusive 
for(x = 5; x<=20; x +=3){        
    sum += x;
    product *= x;

// Display sum and product results 
document.getElementById("part1a").innerHTML = "<strong>PART1a:</strong><br> " + "5 + 8 + 11 + 14 + 17 + 20 = " + sum + "<br>" + "5 * 8 * 11 * 14 * 17 * 20 = " + product;   
};

// PART 1b
var sum2 = 0;
var product2 = 1;
x = 3;

// Calculate the sum and product of every fourth integer from 3 to 31 inclusive 
while (x <= 31) {
    sum2 += x;
    product2 *= x;
    x = x + 4;
// Display sum and product results                
document.getElementById("part1b").innerHTML = "<strong>PART1b:</strong><br> " + "3 + 7 + 11 + 15 + 19 + 23 + 27 + 31 = " + sum2 + '<br>' + "3 * 7 * 11 * 15 * 19 * 23 * 27 * 31 = " + product2;
        
              };
    