

        function myfinalScore() {
// Declare variables
            var hwAvg, midtermScore, finalScore, acr, num1, finalAvg;
            hwAvg = document.getElementById("hwAverageInput").value;
            midtermScore = document.getElementById("midtermScoreInput").value;
            finalScore = document.getElementById("finalScoreInput").value;
            acr = document.getElementById("acrInput").value;
// Calculate Final Average
            finalAvg = (.5 * hwAvg) + (.2 * midtermScore) + (.2 * finalScore) + (.1 * acr);
            num1 = Math.round(finalAvg);
// If the Final Average is below zero or greater than 100 display error message 
            if (hwAvg > 100 || hwAvg < 0 || midtermScore < 0 || midtermScore > 100 || finalScore < 0 || finalScore > 100 || acr < 0 || acr > 100)  {
                document.getElementById("grade").innerHTML = "Please check that your entered values are between 0-100.";
            }
// If the Final Average is not a number display error message 
            else if (isNaN(hwAvg) || isNaN(midtermScore) || isNaN(finalScore) || isNaN(acr)) {
                document.getElementById("grade").innerHTML = "Please submit numbers only";
            }
// If the Final Average is blank display error message 
            else if (hwAvg === "" || midtermScore === "" || finalScore === "" || acr === "" ) {
                document.getElementById("grade").innerHTML = "Please enter all requested values";
            }
// Determine and display final grade
            else if(finalAvg >= 90 && finalAvg<= 100){
                 document.getElementById("grade").innerHTML = "Your score is: " + num1 + ". Your grade is: 'A'. Congratulations!";
            }
            else if(finalAvg >= 80 && finalAvg <= 89){
                 document.getElementById("grade").innerHTML = "Your final average is: " + num1 + ". Your grade is: 'B'";
                
            }
            else if(finalAvg >= 70 && finalAvg <= 79){
                 document.getElementById("grade").innerHTML = "Your final average is: " + num1 + ". Your grade is: 'C'";
                
            }
            else if(finalAvg >= 60 && finalAvg <= 69){
                 document.getElementById("myFinalGrade").innerHTML = "Your final average is: " + num1 + ". Your grade is: 'D'. You must retake the course!";
                
            }
            else if(finalAvg >= 0 && finalAvg <= 59){
                 document.getElementById("grade").innerHTML = "Your final average is: "  + num1 + ". Your grade is: 'F'. You must retake the course!";
            }
        }


        
