function calcSum() {
    "use strict";
    let input1 = document.getElementById("eingabe1"),
        input2 = document.getElementById("eingabe2"),
        result = document.getElementById("ergebnis");

    result.value = parseFloat(input1.value) + parseFloat(input2.value);
}