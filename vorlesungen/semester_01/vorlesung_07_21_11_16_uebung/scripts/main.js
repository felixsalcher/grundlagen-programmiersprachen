function setAusgabe(ausgabe) {
    document.getElementById("ausgabe").innerHTML = ausgabe;
}

function getElement(id) {
    return document.getElementById(id);
}

function schleife1() {
    let ausgabe = "";

    //mit break; kann die Schleife abgebrochen werden
    //mit continue; kann die aktuelle Schleifeniteration abgebrochen und die nächste begonnen werden.
    for(let i = 1; i <= 20; i++) {
        ausgabe += i + " ";
    }
    setAusgabe(ausgabe);
}

function schleife2() {
    let ausgabe = "";
    for(let i = 10; i <= 200; i += 10) {
        ausgabe += i + " ";
    }
    setAusgabe(ausgabe);
}

function schleife3() {
    let ausgabe = "";
    for(let i = 1; i <= 20; i++) {
        ausgabe += i*10 + " ";
    }
    setAusgabe(ausgabe);
}

function schleife1a() {
    let ausgabe = "",
        i = 1;

    while(i <= 20) {
        ausgabe += i + " ";
        i++;
    }
    setAusgabe(ausgabe);
}

function schleife2a() {
    let ausgabe = "",
        i = 10;

    do {
        ausgabe += i + " ";
        i += 10;
    } while(i <= 200);

    setAusgabe(ausgabe);
}

function schleife3a() {
    let ausgabe = "",
        i = 1;

    while(i <= 20) {
        ausgabe += i*10 + " ";
        i++;
    }

    setAusgabe(ausgabe);
}

function createLoop() {
    let startwert = parseInt(getElement("start").value),
        endwert = parseInt(getElement("end").value),
        increment = parseInt(getElement("increment").value),
        ausgabe = "";

    for(let i = startwert; i <= endwert; i += increment) {
        ausgabe += i + " ";
    }
    document.getElementById("ausgabe2").innerHTML = ausgabe;
}

function createTriangle() {
    let rows = parseInt(getElement("amount").value),
        ausgabe = "";

    for(let i = 1; i <= rows; i++) {

        for(let j = 1; j <= i; j++) {
            ausgabe += "* ";
        }
        ausgabe += "<br>";
    }

    document.getElementById("ausgabe3").innerHTML = ausgabe;
}

function createChessBoard() {
    let rows = parseInt(getElement("amount").value),
        ausgabe = "";

    for(let i = 0; i < rows; i++) {

        for(let j = 0; j < rows; j++) {

            ausgabe += ((i+j) % 2 == 0) ? "&nbsp;*&nbsp;" : "&nbsp;&nbsp;&nbsp;";
        }
        ausgabe += "<br>";
    }

    document.getElementById("ausgabe3").innerHTML = ausgabe;
}

function createTree() {
    let rows = parseInt(getElement("amount").value),
        ausgabe = "";

    for(let i = 1; i <= rows; i++) {
        //Linke Leerzeichen
        for(let j = 1; j <= rows - i; j++) {
            ausgabe += "&nbsp;";
        }
        //Sterne
        for(let j = 1; j <= 2*i - 1; j++) {
            ausgabe += "*";
        }
        ausgabe += "<br>";
    }
    document.getElementById("ausgabe3").innerHTML = ausgabe;
}

function fibonacci() {
    let ausgabe = "",
        vorherigeZahl = 0,
        aktuelleZahl = 1,
        ergebnis = 0;

    for(var i = 0; i<10; i++) {
        ergebnis = vorherigeZahl + aktuelleZahl;
        vorherigeZahl = aktuelleZahl;
        aktuelleZahl = ergebnis;
        ausgabe += ergebnis + " ";
    }
    document.getElementById("ausgabe4").innerHTML = ausgabe;
}

// **** Menüaufgabe ****

var menues = [],
    bestellung = [];
menues.push(["Schnitzel", 15.20, "A, B, C"]);
menues.push(["Kaischerschmarren", 13.50, "A"]);
menues.push(["Wurstnudeln", 9.20, "G, H"]);

function info() {
    let mNR = parseInt(getElement("menu_nr").value),
        ausgabe = getElement("ausgabe5");

    ausgabe.innerHTML = "<p>Name: " + menues[mNR - 1][0] + "</p><p>Preis: " + menues[mNR - 1][1] + "</p><p>Allergene: " + menues[mNR - 1][2] + "</p>";
}

function add() {
    let mNR = parseInt(getElement("menu_nr").value),
        mAnz = parseInt(getElement("menu_amount").value),
        ausgabe = getElement("ausgabe5");

    if(mNR != "" && mAnz != "") {
        bestellung.push([mNR - 1, mAnz]);
        ausgabe.innerHTML = "<p>Bestellung über " + mAnz + " " + menues[mNR - 1][0] + " erfolgreich hinzugefügt!";
    }
    console.log(bestellung);
}

function show() {
    let ausgabe = getElement("ausgabe5"),
        ergebnis = "",
        product = [],
        gesamtpreis = 0;

    for(let i = 0; i < bestellung.length; i++) {
        product = menues[bestellung[i][0]];
        ergebnis += "<p>" + bestellung[i][1] + " " + product[0] + " á " + product[1] + "</p>";
        gesamtpreis += product[1] * bestellung[i][1];
        console.log(ergebnis);
        console.log(gesamtpreis);
    }
    ergebnis += "<p>Gesamtpreis: " + gesamtpreis + "</p>";
    ausgabe.innerHTML = ergebnis;
}

// **** Menüaufgabe ****