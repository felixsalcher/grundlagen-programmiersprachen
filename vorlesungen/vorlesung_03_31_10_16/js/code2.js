function berechneKreis() {
    "use strict";

    let radius = parseFloat(document.getElementById("eingabeRadius").value),
        durchmesser = radius * 2,
        umfang = 2 * Math.PI * radius,
        flaeche = Math.PI * Math.pow(radius, 2),
        kreisInfo = "Ein Kreis mit Radius: " + radius + ", Fläche: " + flaeche.toFixed(2);

    document.getElementById("durchmesser").value = durchmesser.toFixed(2);
    document.getElementById("umfang").value = umfang.toFixed(2);
    document.getElementById("flaeche").value = flaeche.toFixed(2);
    document.getElementById("ausgabe").innerHTML = kreisInfo;
}