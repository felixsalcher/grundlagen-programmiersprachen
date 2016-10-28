function test1() {
    "use strict";

    // Variablendeklaration
    let eineZahl = 10;
    let nochEineZahl = 20;
    let schonWiederEineZahl = 50;

    // Addition
    let ergebnis = eineZahl + nochEineZahl + schonWiederEineZahl;
    console.log(ergebnis);

    // Division
    ergebnis = eineZahl / nochEineZahl;
    console.log(ergebnis);
}

function test2() {
    "use strict";
    let zahl1 = "10";
    let zahl2 = 20;
    let ergebnis = zahl1 + zahl2;
    console.log(ergebnis);

    ergebnis = zahl1 * zahl2;
    console.log(ergebnis);

    zahl2 = 150;
    ergebnis = zahl1 * zahl2;
    console.log(ergebnis);
}

function test3() {
    "use strict";
    let zahl = 5;
    console.log(zahl);

    //bad
    zahl = zahl + 5;
    console.log(zahl);

    //good
    zahl += 5;
    console.log(zahl);

    //bad
    zahl = zahl + 1;
    console.log(zahl);

    //good
    zahl++;
    console.log("Letzte Erhöhung: " + zahl);
}

function test4() {
    let user = "Salcher Felix";
    let isAdmin = false;
    console.log(user + ", Admin: " + isAdmin);
}

function test5() {
    let anzahlBecher = 20;
    let menge = 3;
    let istGeradeAnzahl;
    let restmenge = anzahlBecher % menge;
    console.log("Rest: " + restmenge);

    istGeradeAnzahl = anzahlBecher % 2 == 0;
    console.log("Gerade Anzahl: " + istGeradeAnzahl);
}

console.log("...:::... test 1 ...:::...");
test1();

console.log("...:::... test 2 ...:::...");
test2();

console.log("...:::... test 3 ...:::...");
test3();

console.log("...:::... test 4 ...:::...");
test4();

console.log("...:::... test 5 ...:::...");
test5();