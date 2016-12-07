function getElement(id) {
    return document.getElementById(id);
}

function isNumber() {
    let number = getElement("input").value,
        img = getElement("imgSmiley");
    if(!isNaN(parseFloat(number))) {
        img.src = "images/true.png";
    }
    else {
        img.src = "images/false.png";
    }
}

function isEven() {
    let number = getElement("input").value,
        img = getElement("imgSmiley");

    if(number % 2 == 0) {
        img.src = "images/true.png";
    }
    else {
        img.src = "images/false.png";
    }
}

function isBetween10And20() {
    let number = getElement("input").value,
        img = getElement("imgSmiley");

    if(number >= 10 && number <= 20) {
        img.src = "images/true.png";
    }
    else {
        img.src = "images/false.png";
    }
}

function isEvenAndGreater50() {
    let number = getElement("input").value,
        img = getElement("imgSmiley");

    if(number % 2 == 0 && number > 50) {
        img.src = "images/true.png";
    }
    else {
        img.src = "images/false.png";
    }
}

function isUnevenAndSmaller50() {
    let number = getElement("input").value,
        img = getElement("imgSmiley");

    if(number % 2 == 1 && number < 50) {
        img.src = "images/true.png";
    }
    else {
        img.src = "images/false.png";
    }

}