function getHTMLFromLehrveranstaltungen(nachname, vorname, matrikelnummer, semester, lehrveranstaltungen){
    "use strict";
    let result = "<h1>Übersicht Lehrveranstaltungen</h1>";
    result += "<h2>" + nachname + " " + vorname + " (" + matrikelnummer + ")</h2>"; 
    result += "<h2>Lehrveranstaltungen im " + semester + "</h2>";
    for(let i=0, anzahl=lehrveranstaltungen.length; i<anzahl; i++){
        result +="<p>" + lehrveranstaltungen[i].printDescription() + "</p>";
    }
    return result;
}