$(document).ready(function(){
    $('#button_results').click(function(){
        var hwAvg = $('#hwAvg').val();
        var midExam = $('#midExam').val();
        var finalExam = $('#finalExam').val();
        var ACR = $('#ACR').val();
        var finalAvg = (.5 * $hwAvg) + (.2 * $midExam) + (.2 * $finalExam) + (.1 * $ACR);
        var displayGrade = $('#grade').text(finalAvg);
    });
});



// Run script on click to show and hide panel with assignment instructions
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});