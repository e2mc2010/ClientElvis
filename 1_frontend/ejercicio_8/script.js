
let limitNumbers = document.getElementById("limit").value;
let numbers = [];

function even() {
    for (let i = 0; i <= limitNumbers; i++) {
        if (i % 2 == 0)
            numbers.push(i);
      
    }
    console.log(numbers);
 
document.getElementById("results").innerHTML = numbers.join(", ");        
}

function odd() {
    for (let i = 1; i <= limitNumbers; i++) {
        if (i % 2 == 1)

            numbers.push(i);
    }
    console.log(numbers);

    document.getElementById("results").innerHTML = numbers.join(", ");   
}
 

