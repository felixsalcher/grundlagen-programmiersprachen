function getElement(id) {
    return document.getElementById(id);
}

function smaller() {
    let image = getElement("image");
    image.width  -= 10;
}

function bigger() {
    let image = getElement("image");
    image.width += 10;
}
