let numbers = [];

function even(params) {
    for (let i = 0; i <= 80; i++) {
        if (i % 2 == 0)
            numbers.push(i);
      
    }
    console.log(numbers);
         
}

function odd(params) {
    for (let i = 1; i <= 80; i++) {
        if (i % 2 == 1)

            numbers.push(i);
    }
    console.log(numbers);
    
}

 odd();

// document.getElementById("result").innerHTML = numbers.join(", "); 

