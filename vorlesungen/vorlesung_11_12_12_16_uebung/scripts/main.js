function getIntFromInput(id) {
    let element = document.getElementById(id),
        result = 0;
    console.dir(element);
    console.log(element instanceof HTMLInputElement);
    if(element) {
        result = parseInt(element.value);
    } else {
        throw new Error("Element was not found in the current document");
    }

    if(isNaN(result)) {
        throw new Error("Value is not a number");
    }
    return result;
}

function getFloatFromInput(id) {
    let element = document.getElementById(id),
        result = 0;

    if(element) {
        result = parseFloat(element.value);
    } else {
        throw new Error("Element was not found in the current document");
    }

    if(isNaN(result)) {
        throw new Error("Value is not a number");
    }
    return result;
}

function checkArrayForNumbers(array) {
    for(let i = 0; i < array.length; i++) {
        if(isNaN(parseInt(array[i]))) {
            throw new Error("Arrayelement an der Stelle " + i + " ist keine Zahl!");
        }
    }
    return true;
}

function aufgabe1() {
    try {
        alert(getIntFromInput("input_number"));
    } catch(e) {
        alert(e.stack);
    }
}

function aufgabe2() {
    try {
        alert(getFloatFromInput("input_number"));
    } catch(e) {
        alert(e.stack);
    }
}

function aufgabe3() {
    try {
        checkArrayForNumbers([1, 2, "8", "4"]);
        alert("Es passt alles");
    } catch(e) {
        alert(e.stack);
    }

}