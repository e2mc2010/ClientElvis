function js() {
    let num = document.getElementById("number").value;
    if (num %2 === 0) {
        document.getElementById("result").innerHTML = num + "is Even";
    } else {
        document.getElementById("result").innerHTML = num + "is Odd";

    }

}