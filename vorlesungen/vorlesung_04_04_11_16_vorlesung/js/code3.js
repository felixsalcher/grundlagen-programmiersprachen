function absatzHinzufuegen(){
    "use strict";
    let einText=document.getElementById("eingabe").value;
    let einDiv=document.getElementById("ausgabe");

    if(!einText) {
        einText = "Leerer Absatz wie gewünscht.";
    }

    let neuerText=einDiv.innerHTML + "<p>" + einText + "</p>";
    einDiv.innerHTML=neuerText;
}