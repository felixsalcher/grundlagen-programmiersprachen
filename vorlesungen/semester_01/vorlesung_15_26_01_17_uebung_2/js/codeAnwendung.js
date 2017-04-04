let lvs = [];

function lvHinzufuegen(){
    "use strict";
    try {
        document.getElementById("ausgabe").innerHTML = "";
        let inputBezeichnung = document.getElementById("eingabeBezeichnung");
        let inputReferent = document.getElementById("eingabeReferent");
        let inputNote = document.getElementById("eingabeNote");

        let lv = new Lehrveranstaltung(inputBezeichnung.value, inputReferent.value, parseInt(inputNote.value));
        lvs.push(lv);

        inputBezeichnung.value = inputReferent.value = inputNote.value = "";

        inputBezeichnung.focus();
        lvsAnzeigen();
    }
    catch(e) {
        document.getElementById("ausgabe").innerHTML = e.message;
    }
}


function lvsAnzeigen(){
    "use strict";
    let htmlText=getHTMLFromLehrveranstaltungen("Mustermann", "Max", "0049160021","Wintersemester 16/17", lvs);
    document.getElementById("ausgabe").innerHTML=htmlText;
}