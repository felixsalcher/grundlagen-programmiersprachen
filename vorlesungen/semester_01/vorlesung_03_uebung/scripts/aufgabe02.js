function getImages() {
    return [document.getElementById("image1"), document.getElementById("image2")];
}

function margin20() {
    let images = getImages(),
        value = "20px";

    if(images[0].style.margin == value) {
        value = "0";
    }

    images[0].style.margin = value;
    images[1].style.margin = value;
}

function borderRed() {
    let images = getImages(),
        value = "none";

    if(images[0].style.border == value || images[0].style.border == "") {
        value = "5px solid #f00";
    }
    console.log(images[0].style.border);
    images[0].style.border = value;
    images[1].style.border = value;
}

function barrelRoll() {
    let images = getImages();

    images[0].className = images[1].className = "animate barrel_roll";

    setTimeout(function(){
        images[0].className = images[1].className = "";
    }, 1000);
}

//this is the shit that happens on a boring train ride home
function redButton() {
    let images = getImages();

    images[0].className = "stupid_zoom";
    images[1].className = "stupid_animation";

    setTimeout(function () {
        alert("You should not have done that. What was once seen, can not be unseen!");
        images[0].className = images[1].className = "";
    }, 11000);
}