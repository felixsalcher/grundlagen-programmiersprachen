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