function appendToDisplay(numOperation){
    document.getElementById("display").value += numOperation;
}


function clearDisplay(){
    document.getElementById("display").value = '';
}


function mathOperation() {
try {
    document.getElementById("display").value = eval(document.getElementById("display").value);
} catch (error) {
    document.getElementById("display").value = 'error';
}
        

    
}