function addParagraph() {
    "use strict";

    let input = document.getElementById("eingabe").value,
        output = document.getElementById("ausgabe");

    output.innerHTML = output.innerHTML + "<p>" + input + "</p>";
}