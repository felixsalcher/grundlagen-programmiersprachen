function getElement(id) {
    return document.getElementById(id);
}

function berechneRechteck() {
    let seiteA = getElement("seiteA"),
        seiteB = getElement("seiteB"),
        umfang = getElement("umfang"),
        flaeche = getElement("flaeche");

    umfang.value = seiteA.value * 2 + seiteB.value * 2;
    flaeche.value = seiteA.value * seiteB.value;
}

function berechneKegel() {
    let radius = getElement("radius"),
        hoehe = getElement("hoehe"),
        grundflaeche = getElement("grundflaeche"),
        volumen = getElement("volumen"),
        seitenhoehe = getElement("seitenhoehe"),
        mantelflaeche = getElement("mantelflaeche"),
        oberflaeche = getElement("oberflaeche");

    grundflaeche.value = Math.PI * Math.pow(radius.value, 2);
    volumen.value = (grundflaeche.value / 3) * hoehe.value;
    seitenhoehe.value = Math.sqrt(Math.pow(radius.value, 2) + Math.pow(hoehe.value, 2));
    mantelflaeche.value = Math.PI * radius.value * seitenhoehe.value;
    oberflaeche.value = grundflaeche.value + mantelflaeche.value;
}
