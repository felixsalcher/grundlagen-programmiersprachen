function createPrimzahlen(){
    "use strict";
    let teilbar=false;
    let primzahlen="";
    for(let i=10;i<=1000;i++){
        if(isPrimzahl(i)){
            primzahlen+=i + " ";
        }
    }
    let ausgabe=document.getElementById("ausgabe");
    ausgabe.innerHTML = primzahlen;
}