var Hausverwaltung = new salcher.Hausverwaltung();

function init() {
    var Haus = new salcher.Haus(1, "Technikerstraße 7", 6020, "Innsbruck");
    Haus.addMietobjekt(new salcher.Wohnung(1, 80, 10, 3));
    Haus.addMietobjekt(new salcher.Wohnung(2, 120, 15, 4));
    Haus.addMietobjekt(new salcher.Garconniere(3, 40, 10));
    Haus.addMietobjekt(new salcher.Garconniere(4, 25, 8));

    Hausverwaltung.addHome(Haus);

    Haus = new salcher.Haus(2, "Technikerstraße 12", 6020, "Innsbruck");
    Haus.addMietobjekt(new salcher.Wohnung(1, 90, 12, 3));
    Haus.addMietobjekt(new salcher.Wohnung(2, 150, 20, 5));
    Haus.addMietobjekt(new salcher.Garconniere(3, 28, 5));
    Haus.addMietobjekt(new salcher.Garconniere(4, 35, 8));

    Hausverwaltung.addHome(Haus);

    //Event Handlers
    //TODO: How to pass ID to showById via Event Handler
    document.getElementById("show_all").addEventListener('click', showAll, false);
    document.getElementById("search").addEventListener('click', showById, false);

}

function clearOutput() {
    document.getElementById("ausgabe").innerHTML = "";
}

function homeOutput(home) {
    let homeElement = document.createElement("h3");
    homeElement.appendChild(document.createTextNode(home.getAdresse().toString()));

    return homeElement;
}

function objectOutput(object) {
    let objectElement = document.createElement("li");
    objectElement.appendChild(document.createTextNode(object.beschreibung()));

    return objectElement;
}

function objectListOutput(objectList) {
    let objectListElement = document.createElement("ul");

    objectList.forEach(object => {
        objectListElement.appendChild(objectOutput(object));
    });

    return objectListElement;
}

function showElements(homeElement, objectListElement) {
    let ausgabe = document.getElementById("ausgabe");

    ausgabe.appendChild(homeElement);
    ausgabe.appendChild(objectListElement);
}

function showAll() {
    let homes = Hausverwaltung.getHomes();
    let homeElement = null;
    let objectListElement = null;

    clearOutput();
    homes.forEach(home => {
        homeElement = homeOutput(home);
        objectListElement = objectListOutput(home.getMietobjekte());

        showElements(homeElement, objectListElement);
    });
}

function showById() {
    let id = parseInt(document.getElementById("id_home").value);
    let home = Hausverwaltung.getHomeById(id);
    let homeElement = homeOutput(home);
    let objectListElement = objectListOutput(home.getMietobjekte());

    clearOutput();
    showElements(homeElement, objectListElement);
}

init();