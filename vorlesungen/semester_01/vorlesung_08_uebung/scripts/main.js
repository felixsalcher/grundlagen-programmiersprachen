function quersumme() {
    let input = document.getElementById("value").value,
        ergebnis = 0;

    if(isNaN(parseInt(input))) {
        alert("Bitte eine Ganzzahl eingeben!");
        return;
    }

    while(input > 0) {
        ergebnis += input % 10;
        input = parseInt(input / 10);
    }

    document.getElementById("ausgabe").value = ergebnis;
}

function teiler1() {
    let a = document.getElementById("valueA").value,
        b = document.getElementById("valueB").value,
        c = 0;

    if(isNaN(parseInt(a)) || isNaN(parseInt(b))) {
        alert("Bitte gültige Zahlen eingeben");
        return;
    }

    while(a != b) {
        if(a < b) {
            c = a;
            a = b;
            b = c;
        }

        a = a - b;
    }

    document.getElementById("teiler").value = a;
}

function teiler2() {
    let a = document.getElementById("valueA").value,
        b = document.getElementById("valueB").value,
        rest = 0;

    if(isNaN(parseInt(a)) || isNaN(parseInt(b))) {
        alert("Bitte gültige Zahlen eingeben");
        return;
    }

    while(b != 0) {
        rest = a % b;
        a = b;
        b = rest;
    }

    document.getElementById("teiler").value = a;
}

function primzahl() {
    let teilbar = false,
        ergebnis = "";

    for(let i = 10; i <= 100; i++) {
        teilbar = false;

        for(let j = 2; j < i; j++) {
            if(i % j == 0) {
                teilbar = true;
                break;
            }
        }

        if(!teilbar) {
            ergebnis += i + " ";
        }
    }

    document.getElementById("primzahlAusgabe").innerHTML = ergebnis;
}

function smaller() {
    changeSize(-10);
}

function bigger() {
    changeSize(10);
}

function changeSize(value) {
    for(let i = 1; i<= 5; i++) {
        document.getElementById("img" + i).width += value;
    }
}