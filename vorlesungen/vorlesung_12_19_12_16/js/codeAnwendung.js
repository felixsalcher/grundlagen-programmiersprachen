let userDaten=[
    ["user1", "abc"],
    ["user2", "def"],
    ["user3", "ghi"]
];

function checkLogin(benutzer, passwort){
    let validUser = false,
        validLogin = false;

    for(let i = 0; i < userDaten.length; i++) {
        if(benutzer == userDaten[i][0]) {
            validUser = true;
        }
        if(validUser && passwort == userDaten[i][1]) {
            validLogin = true;
            return validLogin; //frühzeitiger Abbruch der Schleife
        }
    }

    if(!validUser) {
        throw new Error("Benutzer nicht gefunden");
    }
    else if(!validLogin) {
        throw new Error("Benutzer gefunden, falsches Passwort!");
    }

    return validLogin;
}

function isPrimzahl(zahl){
    for(let i = 2; i < zahl; i++) {
        if(zahl % i == 0) {
            return false;
        }
    }

    return true;
}

function hideBereichFehler(){
    document.getElementById("ausgabeFehler").style.display="none";
}

function showBereichFehler(textFehler){
    let element=document.getElementById("ausgabeFehler");
    element.style.display="block";
    element.innerHTML=textFehler;
}


function schritt1Weiter(){
    let username, passwort;
    try {
        username = getInputAsString("eingabeBenutzer");
    }
    catch(e) {
        showBereichFehler("Bitte einen gültigen Benutzernamen eingeben");
        return;
    }

    try {
        passwort= getInputAsString("eingabePasswort");
    }
    catch(e) {
        showBereichFehler("Bitte einen gültigen Benutzernamen eingeben");
        return;
    }

    try {
        if(checkLogin(username, passwort)) {
            document.getElementById("bereichLogin").style.display = "none";
            document.getElementById("bereichRechnen").style.display = "block";
            hideBereichFehler();
        }
    }
    catch(e) {
        showBereichFehler(e.message);
        return;
    }

}

function schritt2Weiter(){
    try {
        let zahl = getInputAsInteger("eingabePrimzahl");
        if(zahl < 10 || zahl > 100) {
            throw new Error("Zahl muss zwischen 10 und 100 sein!");
        }
        if(isPrimzahl(zahl)) {
            document.getElementById("bereichRechnen").style.display = "none";
            document.getElementById("bereichFoto").style.display = "block";
            hideBereichFehler();
        }
    }
    catch(e) {
        showBereichFehler(e.message);
        return;
    }
}
