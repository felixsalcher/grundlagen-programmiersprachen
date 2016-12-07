"use strict";

function test1() {
    let test; //undefined
    test = 1; //Number
    test = "Hallo"; //String
    test = true; //Boolean
    test = new Date(); //Objekte
    test = function() {
        console.log('foo');
    }; //Funktion
}

function test2() {
    let ergebnis,
        zahl1 = 5,
        zahl2 = 10;

    ergebnis = zahl1 + zahl2;
    console.log(ergebnis);

    let string1 = "Tutorium",
        string2 = "Grundlagen Programmiersprachen";

    ergebnis = string1 + " " + string2; //Konkatenieren
    console.log(ergebnis);

    let wert1 = 3,
        wert2 = 5,
        wert3 = "7";

    ergebnis = wert1 + wert2 + wert3; //Implizite Konvertierung
    console.log(ergebnis);

    ergebnis = wert1 + wert2 + parseInt(wert3); //Explizite Konvertierung
    console.log(ergebnis);
}

function test3() {
    let zahl = 2;

    zahl = zahl + 2;
    console.log(zahl);

    zahl += 2;
    console.log(zahl);

    zahl++;
    console.log(zahl);

    let isStudent = true;

    console.log("Ich bin ein Student: " + isStudent);

    //Modulo
    let zahl1 = 8,
        zahl2 = 2,
        rest;

    rest = zahl1 % zahl2;
    console.log(rest);

    if(rest == 0) {
        console.log("Gerade Zahl");
    }
    else {
        console.log("Ungerade Zahl");
    }

    console.log(9 === "9");
}

function auslesen() {
    let element = document.getElementById("meinText");
    let text = element.value;
    console.log(element);
    console.log(text);

    let zahl = 3;
    console.log(zahl + parseFloat(text));
}

function ausgeben() {
    let eingabe = document.getElementById("meinText"),
        ausgabe = document.getElementById("ausgabe");

    ausgabe.value = eingabe.value;
    //document.getElementById("ausgabe").value = document.getElementById("meinText").value;
}

function textAnDivAnhaengen() {
    document.getElementById("container").innerHTML += "<p>" + document.getElementById("meinText").value + "</p>";
}

console.log("..:: Funktion: Test2 ::..");
test2();
console.log("..:: Funktion: Test3 ::..");
test3();
console.log("..:: Funktion: Auslesen ::..");
auslesen();