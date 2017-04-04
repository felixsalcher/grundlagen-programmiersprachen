function getHTMLFromLehrveranstaltungen(nachname, vorname, matrikelnummer, semester, lehrveranstaltungen){
    "use strict";
    let notensumme=0;
    let result = "<h1>Übersicht Lehrveranstaltungen</h1>";
    result += "<h2>" + nachname + " " + vorname + " (" + matrikelnummer + ")</h2>"; 
    result += "<h2>Lehrveranstaltungen im " + semester + "</h2>";
    for(let i=0, anzahl=lehrveranstaltungen.length; i<anzahl; i++){
        result +="<p>" + lehrveranstaltungen[i].beschreibung() + "</p>";
        notensumme+=lehrveranstaltungen[i].getNote();
    }
    result +="<p>Notendurchschnitt: " + notensumme / lehrveranstaltungen.length + "</p>";
    return result;
}