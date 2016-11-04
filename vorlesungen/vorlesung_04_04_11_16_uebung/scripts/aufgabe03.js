function getElement(id) {
    return document.getElementById(id);
}

function findElement() {
    let searchID = getElement("search").value;

    if(searchID != "") {
        let element = getElement(searchID);
        if(element) {
            alert(element.innerHTML);
        }
    }
}
