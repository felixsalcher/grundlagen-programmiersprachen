
function berechneFahrenheidt(){
    let celsius=[];
    for(let i=6; i<44; i++){
        celsius[i-6]=36 + (i/10);
    }
    let fahrenheidt = celsius.map(x => (x * 1.8 + 32).toFixed(2));
    
    document.getElementById("ausgabeCelsius").innerHTML = celsius.join("; ");
    document.getElementById("ausgabeFahrenheidt").innerHTML = fahrenheidt.join("; ");
}


function berechneQuersumme(){
    let eingabe = document.getElementById("eingabeZahl").value;
    let numbers = eingabe.split("");
    let ergebnis = numbers.reduce((zw, val) => zw + parseInt(val), 0);
    document.getElementById("ausgabeQuersumme").innerHTML = ergebnis;
}

function pruefeArtikelnummer(){
    let eingabe = document.getElementById("eingabeArtikelnummer").value;

    if(eingabe.length == 4) {
         if(eingabe.substr(0,1) == "A" || eingabe.substr(0,1) == "B") {
             if(eingabe.substr(1,1) >= 5 && eingabe.substr(1,1) <= 8) {
                 if(isNaN(parseInt(eingabe.substr(eingabe.length-1,1)))) {
                     document.getElementById("ausgabePruefung").innerHTML = "Artikelnummer korrekt";
                 }
                 else { throw new Error("Letztes Zeichen darf keine Zahl sein"); }
             }
             else { throw new Error("Zweites Zeichen muss eine Zahl zwischen 5 und 8 sein"); }
         }
         else { throw new Error("Erstes Zeichen muss A oder B sein!"); }
    }
    else { throw new Error("Eingabe muss 4 Zeichen lang sein!"); }

}

function berechneAlter(){
    let tag=parseInt(document.getElementById("eingabeTag").value);
    let monat=parseInt(document.getElementById("eingabeMonat").value)-1;
    let jahr=parseInt(document.getElementById("eingabeJahr").value);
    let today =  new Date();
    let alter = 0;
    console.log(today.getFullYear());
    console.log(today.getMonth());

    if(today.getMonth() > monat) {
        alter = today.getFullYear() - jahr;
    }
    else if(today.getMonth() == monat) {
        if(today.getDay() > tag) {
            alter = today.getFullYear() - jahr;
        }
        else {
            alter = today.getFullYear() - jahr - 1;
        }
    }
    else { alter = today.getFullYear() - jahr - 1; }

    document.getElementById("ausgabeAlter").innerHTML = alter;
    
}

function codiereText(){
    let eingabe = document.getElementById("eingabeText").value;
    let eingabeArray = eingabe.split("");
    let kodiertesArray = eingabeArray.map((char, index) => {
        let charCode = 0;

        //Hilfe um die folgende Codezeile zu verstehen:
        //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
        index % 2 == 0 ? charCode = char.charCodeAt(0) + 5 : charCode = char.charCodeAt(0) + 10;
        charCode > 126 ? charCode = charCode - 95 : charCode;

        return String.fromCharCode(charCode);
    });
    document.getElementById("eingabeText").value = kodiertesArray.join("");
}

function decodiereText(){
    let eingabe = document.getElementById("eingabeText").value;
    let eingabeArray = eingabe.split("");
    let kodiertesArray = eingabeArray.map((char, index) => {
        let charCode = 0;

        index % 2 == 0 ? charCode = char.charCodeAt(0) - 5 : charCode = char.charCodeAt(0) - 10;
        charCode < 32 ? charCode = charCode + 95 : charCode;

        return String.fromCharCode(charCode);
    });
    document.getElementById("eingabeText").value = kodiertesArray.join("");
}