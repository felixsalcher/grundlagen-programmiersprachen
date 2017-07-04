document.addEventListener("DOMContentLoaded", init);

var verwaltung = new klausur3.Pflanzenverwaltung();

function init() {
    createFlowers();
    createOptions();

    verwaltung.getPflanzeById(1);

    document.getElementById("save").addEventListener("click", saveBlume, false);
}

function createFlowers() {
    let blume = new klausur3.Blume(1, "Sonnenblume", "gelb");
    verwaltung.addPflanze(blume);
    blume = new klausur3.Blume(2, "Gänseblümchen", "weiß");
    verwaltung.addPflanze(blume);
    blume = new klausur3.Blume(3, "Rose", "rot");
    verwaltung.addPflanze(blume);
}

function createOptions() {
    let flowers = verwaltung.getPflanzen();
    let select = document.getElementById("selectPflanzen");

    flowers.forEach(flower => {
        select.appendChild(createOption(flower.getId(), flower.getBezeichnung()));
    });
}

function createOption(id, bezeichnung) {
    let option = document.createElement("option");

    option.appendChild(document.createTextNode(bezeichnung));
    option.setAttribute("value", id);

    return option;
}

function saveBlume() {
    let select = document.getElementById("selectPflanzen"),
        id = document.getElementById("inputId").value,
        bezeichnung = document.getElementById("inputBezeichnung").value,
        farbe = document.getElementById("inputFarbe").value,
        flower = "";

    if((id || bezeichnung || farbe) !== "") {
        if(!verwaltung.getPflanzeById(id)) {
            flower = new klausur3.Blume(id, bezeichnung, farbe);
            verwaltung.addPflanze(flower);

            select.appendChild(createOption(id, bezeichnung));

        }
        else {
            alert("Pflanze mit dieser ID existiert bereits!");
            return false;
        }

    }
    else {
        return false;
    }
}