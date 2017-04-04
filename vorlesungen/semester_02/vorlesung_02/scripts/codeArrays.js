let myArray=["Feldkirch","Innsbruck", "Salzburg","Linz", "St. Pölten", "Wien", "Graz", "Klagenfurt"];
let eingabe = document.getElementById("eingabe");
function ausgabeArray(){
    document.getElementById("ausgabe").innerHTML=myArray.join(", ");
}

function aufgabe1(){
    //Code der Aufgabe
    myArray.push(eingabe.value);
    ausgabeArray();
}

function aufgabe2(){
    //Code der Aufgabe
    myArray.unshift(eingabe.value);
    ausgabeArray();
}

function aufgabe3(){
    //Code der Aufgabe
    myArray.pop();
    ausgabeArray();
}

function aufgabe4(){
    //Code der Aufgabe
    myArray.shift();
    ausgabeArray();
}

function aufgabe5(){
    //Code der Aufgabe
    myArray.splice(2, 0, eingabe.value);
    ausgabeArray();
}

function aufgabe6(){
    //Code der Aufgabe
    if(myArray.length >= 3) {
        myArray.splice(1,3);
        ausgabeArray();
    }
    else {
        alert("Elemente nicht gefunden");
    }
}

function aufgabe7(){
    //Code der Aufgabe
    myArray.sort();
    ausgabeArray();
}

function aufgabe8(){
    //Code der Aufgabe
    myArray.sort();
    myArray.reverse();
    ausgabeArray();
}

function aufgabe9(){
    //Code der Aufgabe
    alert(myArray.indexOf(eingabe.value));
    alert(myArray.indexOf(eingabe.value, 1));
    alert(myArray.lastIndexOf(eingabe.value));
    alert(myArray.lastIndexOf(eingabe.value, myArray.length - 2));
}