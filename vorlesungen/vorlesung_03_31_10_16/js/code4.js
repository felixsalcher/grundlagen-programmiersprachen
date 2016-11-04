function getPicture(id) {
    return document.getElementById(id);
}
function changeStyle(id, property) {
    let picture = getPicture(id);
    picture.style.width = property;
}

function changeClass(id, classString) {
    let picture = getPicture(id);
    picture.className = classString;
}

function test() {
    let eineZahl = "8",
        zweiteZahl = 5,
        ergebnis = parseInt(eineZahl) + zweiteZahl;

    console.log(ergebnis);
}

test();