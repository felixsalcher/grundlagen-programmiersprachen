function ggT1(){
    "use strict";
    let z1=0,
        z2=0;

    z1 = parseInt(document.getElementById("eingabeZahl1").value);

    if(isNaN(z1)){
        alert("Bitte geben Sie eine gültige Zahl1 ein!");
        return;
    }else if(!isPositiveNumber(z1)){
        alert("Bitten geben Sie eine positive Zahl1 ein!");
        return;
    }

    z2 = parseInt(document.getElementById("eingabeZahl2").value);

    if(isNaN(z2)){
        alert("Bitte geben Sie eine gültige Zahl2 ein!");
        return;
    }else if(!isPositiveNumber(z2)){
        alert("Bitten geben Sie eine positive Zahl2 ein!");
        return;
    }

    document.getElementById("ergebnisGGT").value= calcGGT1(z1, z2);
}

function ggT2(){    
    "use strict";
    let z1=0,
        z2=0;

    z1=parseInt(document.getElementById("eingabeZahl1").value);

    if(isNaN(z1)){
        alert("Bitte geben Sie eine gültige Zahl1 ein!");
        return;
    }else if(!isPositiveNumber(z1)){
        alert("Bitten geben Sie eine positive Zahl1 ein!");
        return;
    }
    z2=parseInt(document.getElementById("eingabeZahl2").value);

    if(isNaN(z2)){
        alert("Bitte geben Sie eine gültige Zahl2 ein!");
        return;
    }else if(!isPositiveNumber(z2)){
        alert("Bitten geben Sie eine positive Zahl2 ein!");
        return;
    }

    document.getElementById("ergebnisGGT").value = calcGGT2(z1, z2);
}