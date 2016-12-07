function berechneQuersumme(){
    "use strict";
    let a = parseInt(document.getElementById("eingabeZahl").value);

    if(isNaN(a)) {
        alert("Bitte geben Sie eine gültige Zahl ein!");
        return;
    } else if(!isPositiveNumber(a)) {
        alert("Bitten geben Sie eine positive Zahl ein!");
        return;
    }

    document.getElementById("ergebnisQuersumme").value = calcQuersumme(a);
}