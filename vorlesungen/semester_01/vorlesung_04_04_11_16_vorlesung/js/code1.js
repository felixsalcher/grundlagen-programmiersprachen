function berechne(){
    "use strict";
    let hinweisFeld = document.getElementById("hinweis");
    let feldZahl1 = document.getElementById("eingabe1");
    let feldZahl2 = document.getElementById("eingabe2");
    let zahl1 = parseInt(feldZahl1.value);
    let zahl2 = parseInt(feldZahl2.value);
    let ergebnis = document.getElementById("ergebnis");

    hinweisFeld.innerHTML = "";
    ergebnis.value = "";

    if(isNaN(zahl1)) {
        hinweisFeld.innerHTML = "Ihre Eingabe in Feld 1 ist ungültig";
        feldZahl1.value = "";
        feldZahl1.focus();
    }
    else if(isNaN(zahl2)) {
        hinweisFeld.innerHTML = "Ihre Eingabe in Feld 2 ist ungültig";
        feldZahl2.value = "";
        feldZahl2.focus();
    }
    else {
        let ergebnisAddition = zahl1 + zahl2;
        ergebnis.value = ergebnisAddition;
    }
}