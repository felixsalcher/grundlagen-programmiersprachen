
function ausgabeErgebnis(ergebnis){
    document.getElementById("ausgabe").innerHTML=ergebnis;
}

function aufgabe1(){
    //Übergabe des Datums an die Ausgabe-Methode unter Anwendung folgender Funktionen:
    //toDateString(), toLocaleString()
    let d=new Date();
    ausgabeErgebnis(d.toDateString());
}

function aufgabe2(){
    //Ausgabe des Datums und (durch br-Tag getrennt) jeweils eines Datumsteils an die Ausgabe-Methode unter Anwendung folgender Funktionen:
    //getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds()
    let d=new Date();
    ausgabeErgebnis(d. toLocaleString() + "<br/>" + d.getFullYear());
}

function aufgabe3(){
    //Erstellen Sie ein Array mit den deutschen Wochentagen (beginnend bei Sonntag)
    //Geben Sie die Bezeichnung des aktuellen Wochentag aus
    
}

function aufgabe4(){
    //Analog zu Excel können Sie ein Datum durch Angabe von Jahr, Monat, Tag, Stunde, ..... erzeugen
    //Spielen Sie mit den Argumenten und versuchen Sie immer im vorhinein zu erraten, welches Datum ausgegeben wird
    //String-Methode indexOf
    let d=new Date(2017, 17, 48);
    ausgabeErgebnis(d.toLocaleString());
}

function aufgabe5(){
    //Erhöhen Sie das Datum um 5 Monate
    //Methoden: setMonth(), getMonth()
    let d=new Date();
    
    //Ihr Code
    
    ausgabeErgebnis(d.toLocaleString);
}

function aufgabe6(){
    //Einlesen der Benutzereingaben und Erzeugung eines Datums
    //Ausgabe des Datums
    let d=null;
    
    //Ihr Code
    
    ausgabeErgebnis(d);
}


