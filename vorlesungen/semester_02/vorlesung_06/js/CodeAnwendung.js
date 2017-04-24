function ausgabe(content){
    document.getElementById("ausgabe").innerHTML=content;
} 

function aufgabe1(){
    ausgabe("Anzahl der Links: " + document.links.length);
}

function aufgabe2(){
    ausgabe("Anzahl der Bilder: " + document.images.length);
}

function aufgabe3(){
    ausgabe("Anzahl der Divs: " + document.getElementsByTagName("div").length);
}

function aufgabe4(){
    ausgabe("Anzahl der Absätze: " + document.getElementsByTagName("p").length);
}

function aufgabe5(){
    Array.prototype.forEach.call(document.links, link => {
       link.style.fontSize = "1.5em";
    });
}

function aufgabe6(){
    Array.prototype.forEach.call(document.getElementsByTagName("p"), p => {
        p.style.textAlign = "right";
    });
}

function aufgabe7(){
    ausgabe("Anzahl der Elemente mit der Klasse .hervorgehoben: " + document.getElementsByClassName("hervorgehoben").length);
}

function aufgabe8(){
    Array.prototype.forEach.call(document.images, el => {
        el.className == "bildGross" ? el.className = "bildKlein" : el.className = "bildGross";
    });
}

function aufgabe9(){
    Array.prototype.forEach.call(document.querySelectorAll("div > input"), el => {
        el.style.fontWeight = "bold";
    });
}

function aufgabe10(){
    document.querySelector("div > input").style.fontStyle = "italic";
}

function aufgabe11(){
    document.querySelector("div > input:nth-of-type(3)").style.fontStyle = "italic";
}

function aufgabe12(){
    ausgabe("Child Nodes für Ort1: " + document.getElementById("ort1").childNodes.length);
}

function aufgabe13(){
    document.getElementById("ort1").nextElementSibling.className = "hervorgehoben";
}

function aufgabe14(){
    document.getElementById("ort1").parentElement.className = "hervorgehoben";
}

function aufgabe15(){
    document.getElementById("ort1").parentElement.lastElementChild.previousElementSibling.className = "hervorgehoben";
}