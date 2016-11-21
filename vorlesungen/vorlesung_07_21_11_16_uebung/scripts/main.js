function setAusgabe(ausgabe) {
    document.getElementById("ausgabe").innerHTML = ausgabe;
}

function getElement(id) {
    return document.getElementById(id);
}

function schleife1() {
    let ausgabe = "";
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

            ausgabe += ((i+j) % 2 == 0) ? " * " : "&nbsp;&nbsp;&nbsp;";
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
            ausgabe += "B";
        }
        //Sterne
        for(let j = 1; j <= 2*i - 1; j++) {
            ausgabe += "A";
        }
        //Rechte Leerzeichen
        for(let j = 1; j <= rows - i; j++) {
            ausgabe += "B";
        }
        ausgabe += "<br>";
    }
    document.getElementById("ausgabe3").innerHTML = ausgabe;
}