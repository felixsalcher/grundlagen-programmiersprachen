let images = [],
    arrayIndex = 0;

function bilderLaden() {

    for(let i = 1; i < 6; i++) {
        images.push("images/0" + i + ".jpg");
    }

    document.getElementById("image").src = images[arrayIndex];
    document.getElementById("container").className = "visible";
    document.getElementById("loadingButton").disabled = true;
}

function nextImg() {
    arrayIndex++;

    if(arrayIndex == images.length) {
        arrayIndex = 0;
    }

    document.getElementById("image").src = images[arrayIndex];
}

function prevImg() {
    arrayIndex--;

    if(arrayIndex < 0) {
        arrayIndex = images.length - 1;
    }

    document.getElementById("image").src = images[arrayIndex];
}