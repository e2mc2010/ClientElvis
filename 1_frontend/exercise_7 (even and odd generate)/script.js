function generateNumbers() {
    let type = document.getElementById("type").value.trim().toLowerCase();
    let numbers = [];

    if (type === "even") {
        for (let i = 0; i <= 80; i++) {
            if (i % 2 == 0)
                numbers.push(i);
        }
    } else if (type === "odd") {
        for (let i = 1; i <= 80; i++) {
            if (i % 2 == 1)

                numbers.push(i);
        }
    } else {
        document.getElementById("result").innerHTML = "Please enter 'even' or 'odd'.";
        return;
    }

    document.getElementById("result").innerHTML = numbers.join(", ");

}