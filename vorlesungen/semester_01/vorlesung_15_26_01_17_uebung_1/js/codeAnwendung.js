function lvsAnzeigen(){
    "use strict";
    try {
        let lvs = [];

        lvs.push(
            new Lehrveranstaltung("Programmieren", "Greiter Michael", 1),
            new Lehrveranstaltung("Mathematik", "Hörhager Markus", 2),
            new Lehrveranstaltung("Einführung HTML", "Hasenjäger Kristian", 3)
        );
    }
    catch(e) {
        console.log(e.message);
    }

    let htmlText=getHTMLFromLehrveranstaltungen("Mustermann", "Max", "0049160021","Wintersemester 16/17", lvs);
    document.getElementById("ausgabe").innerHTML=htmlText;
}