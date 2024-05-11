
function even() {

    let limitNumbers = document.getElementById("limit").value;
    let numbers = [];


    for (let i = 0; i <= limitNumbers; i++) {
        if (i % 2 == 0)
            numbers.push(i);

    }

    document.getElementById("results").innerHTML = numbers.join(", ");
}

function odd() {
    let limitNumbers = document.getElementById("limit").value;
    let numbers = [];

    for (let i = 1; i <= limitNumbers; i++) {
        if (i % 2 == 1)

            numbers.push(i);
    }

    document.getElementById("results").innerHTML = numbers.join(", ");
}


