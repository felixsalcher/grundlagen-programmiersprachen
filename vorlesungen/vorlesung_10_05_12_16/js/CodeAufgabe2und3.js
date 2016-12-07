function ggT(method) {
    "use strict";
    let z1 = parseInt(document.getElementById("eingabeZahl1").value),
        z2 = parseInt(document.getElementById("eingabeZahl2").value);

    if(isNaN(z1) || isNaN(z2)){
        alert("Bitte geben Sie für alle Werte eine gültige Zahl ein!");
        return;
    }else if(!isPositiveNumber(z1) || !isPositiveNumber(z2)){
        alert("Bitten geben Sie für alle Werte eine positive Zahl ein!");
        return;
    }
    let ergebnis = 0;
    return method(z1, z2);
}

function ggT1(){
    document.getElementById("ergebnisGGT").value = ggT(calcGGT1);
}

function ggT2(){
    document.getElementById("ergebnisGGT").value = ggT(calcGGT2);
}