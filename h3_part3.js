
function convertToC() {
    var fahrenheit = parseFloat(document.getElementById('fTemp').value);
    
    var celsius = (fTempVal - 32) * (5 / 9);
    
    document.getElementById('cTemp').value = celsius.toFixed(1);
    
    return false;
}

function convertToF() {
    
    var celsius = parseFloat(document.getElementById('cTemp').value);
    
    var fahrenheit = (cTempVal * (9 / 5)) + 32;
    
    document.getElementById('fTemp').value = fahrenheit.toFixed(1);
    
    return false;
}
