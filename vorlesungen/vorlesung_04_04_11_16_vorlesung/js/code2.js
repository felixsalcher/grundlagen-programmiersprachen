function berechneKreis(){
    "use strict";

    let kreisInfo="";
    let radius=parseFloat(document.getElementById("eingabeRadius").value);

    if(isNaN(radius) || radius <= 0) {
        alert("ungültiger radius");
        return;
    }

    let durchmesser=radius * 2;
    let umfang = 2 * radius * Math.PI;
    //let flaeche= radius * radius * Math.PI;
    let flaeche = Math.pow(radius, 2) * Math.PI;
    document.getElementById("durchmesser").value=durchmesser;
    document.getElementById("umfang").value=umfang;
    document.getElementById("flaeche").value=flaeche;
    kreisInfo="Ein Kreis mit Radius " + radius + ", Fl&auml;che: " + flaeche +".";
    document.getElementById("ausgabe").innerHTML=kreisInfo;
}