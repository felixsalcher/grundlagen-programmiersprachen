let autos; //globale Array-Variable

document.addEventListener("DOMContentLoaded",init);

function init(){
    createAutos();
    createBasisDom();
    writeDataToDom();
}
        
function createAutos(){
    autos = [];
    autos.push(new Auto("BMW",2011, 200, true));
    autos.push(new Auto("Mercedes",2005, 125, false));
    autos.push(new Auto("Toyota",2009, 98, true));
    autos.push(new Auto("Kia",2014, 70, false));
    autos.push(new Auto("Opel",2015, 130, false));
    autos.push(new Auto("Citroen",1999, 40, false));
}

function createListitem(linktext, linkfunction) {
    let listitem = document.createElement("li");
    let link = document.createElement("a");
    link.href = "#";
    link.appendChild(document.createTextNode(linktext));
    link.addEventListener("click", linkfunction, false);
    listitem.appendChild(link);

    return listitem;
}

function createBasisDom(){
    let body = document.querySelector("body");
    let divMain = document.createElement("div");
    let divNav = document.createElement("div");
    let divListe = document.createElement("div");
    let divAbsaetze = document.createElement("div");
    let list = document.createElement("ul");

    list.appendChild(createListitem("Marke aufsteigend", sortByMarkeAsc));
    list.appendChild(createListitem("Marke absteigend", sortByMarkeDesc));
    list.appendChild(createListitem("Baujahr aufsteigend", sortByBaujahrAsc));
    list.appendChild(createListitem("Baujahr absteigend", sortByBaujahrDesc));

    divNav.appendChild(list);
    divNav.id = "divNav";

    divListe.id = "divListe";
    divAbsaetze.id = "divAbsaetze";

    divMain.appendChild(divNav);
    divMain.appendChild(divListe);
    divMain.appendChild(divAbsaetze);
    divMain.id = "main";

    body.appendChild(divMain);
}

function writeDataToDom(){
    let divListe = document.getElementById("divListe");
    let divAbsaetze = document.getElementById("divAbsaetze");
    let selectElement = document.createElement("select");
    let option = null;
    let paragraph = null;
    selectElement.size = 5;

    for(let i = 0; i < autos.length; i++) {
        option = document.createElement("option");
        option.appendChild(document.createTextNode(autos[i]));
        selectElement.appendChild(option);
    }
    divListe.appendChild(selectElement);

    autos.forEach(auto => {
        paragraph = document.createElement("p");
        paragraph.appendChild(document.createTextNode(auto));
        divAbsaetze.appendChild(paragraph);
    });

}

function removeDataFromDom(){
    let div=document.getElementById("divListe");
    div.innerHTML=null;
    div=document.getElementById("divAbsaetze");
    div.innerHTML=null;
}

function sortByMarkeAsc(e){
    autos.sort((a, b) => {
        if(a.getMarke() < b.getMarke()) {
            return -1;
        }
        if(a.getMarke() > b.getMarke()) {
            return 1;
        }
        return 0;
    });
    removeDataFromDom();
    writeDataToDom();
    e.stopPropagation();
}

function sortByMarkeDesc(e){
    autos.sort((a, b) => {
        if(a.getMarke() < b.getMarke()) {
            return 1;
        }
        if(a.getMarke() > b.getMarke()) {
            return -1;
        }
        return 0;
    });
    removeDataFromDom();
    writeDataToDom();
    e.stopPropagation();
}

function sortByBaujahrAsc(e){
    autos.sort((a, b) => a.getBaujahr() - b.getBaujahr());
    removeDataFromDom();
    writeDataToDom();
    e.stopPropagation();
}

function sortByBaujahrDesc(e){
    autos.sort((a, b) => b.getBaujahr() - a.getBaujahr());
    removeDataFromDom();
    writeDataToDom();
    e.stopPropagation();
}

