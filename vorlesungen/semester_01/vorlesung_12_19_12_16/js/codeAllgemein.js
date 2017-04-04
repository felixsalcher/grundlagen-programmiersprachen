function getInputAsInteger(id){
    "use strict";
    let inputElement=null;
    let inputAsInteger=0;
    inputElement=document.getElementById(id);
    if(!inputElement){
        throw new Error("Element mit id " + id + " nicht gefunden!");
    }
    inputAsInteger=parseInt(inputElement.value);
    if(isNaN(inputAsInteger)){
        throw new Error("Keine gültige Zahl!");    
    }
    return inputAsInteger;
}

function getInputAsString(id){
    "use strict";
    let inputElement=null;
    let inputAsString="";
    inputElement=document.getElementById(id);
    if(!inputElement){
        throw new Error("Element mit id " + id + " nicht gefunden!");
    }
    inputAsString=inputElement.value;
    if(!inputAsString){
        throw new Error("Leere Zeichenkette!");    
    }
    return inputAsString;
}



