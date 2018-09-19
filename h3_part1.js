alert("Testing");
// Create reference to Show Grade and Reset buttons
var showGradeBtn = document.getElementById('button_results');
var resetBtn = document.getElementById('button_reset');
// Create reference to grade field
var grade = document.getElementById('grade').value;
// Clicking Show Grade button runs calculate function
showGradeBtn.addEventListener('click', calculate);
// Run script 
  	function calculate() {
// Define variables
		var hwAvg = parseFloat(document.getElementById('hwAvg').value),
		var midExam = parseFloat(document.getElementById('midExam').value),
		var finalExam = parseFloat(document.getElementById('finalExam').value),
		var ACR = parseFloat(document.getElementById('ACR').value);
        
// Calculate final average
        var finalAvg = (.5 * hwAvg) + (.2 * midExam) + (.2 * finalExam) + (.1 * ACR);
        
// Calculate grade
		if(isNaN(finalAvg)){
			document.getElementById('grade').value = "Please enter numbers only.";
		}
		
		else if(90 >= finalAvg && finalAvg >= 100){
			document.getElementById('grade').value = "Student will receive an A.";
		}
		else if(80 >= finalAvg && finalAvg >= 89){
			document.getElementById('grade').value = "Student will receive a B.";
		}
        else if(70 >= finalAvg && finalAvg >= 79){
			document.getElementById('grade').value = "Student will receive a C.";
		}
        else if(60 >= finalAvg && finalAvg >= 69){
			document.getElementById('grade').value = "Student will receive a D. Student must retake the course.";
		}
        else if(0 >= finalAvg && finalAvg >= 59){
			document.getElementById('grade').value = "Student will receive an F. Student must retake the course.";
		}       
};
// Clicking on Reset button clears fields
resetBtn.addEventListener('click', clearValues);
function clearValues(){
        hwAvg.value = "";
        midExam.value = "";
        finalExam.value = "";
        ACR.value = "";
        grade.value = "";
};
// Run script on click to show and hide panel with assignment instructions
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});