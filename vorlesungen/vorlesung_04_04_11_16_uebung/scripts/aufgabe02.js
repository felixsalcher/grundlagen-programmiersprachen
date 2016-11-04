function getElement(id) {
    return document.getElementById(id);
}
function validate() {
    let username = getElement("username"),
        password = getElement("password"),
        passwordControl = getElement("password_control"),
        validator = getElement("validator");

    if(username.value == "") {
        validator.innerHTML = "Username darf nicht leer sein";
        username.focus();
    }
    else if(!isNaN(parseInt(username.value))) {
        validator.innerHTML = "Username darf keine Zahl sein";
        username.focus();
    }
    else if(password.value == "") {
        validator.innerHTML = "Passwort darf nicht leer sein";
        password.focus();
    }
    else if(passwordControl.value == "") {
        validator.innerHTML = "Passwort bestätigen darf nicht leer sein";
        passwordControl.focus();
    }
    else if(password.value != passwordControl.value) {
        validator.innerHTML = "Passwort und Passwort bestätigen stimmen nicht überein";
        passwordControl.value = "";
        passwordControl.focus();
    }
    else {
        alert("Alles passt! Registrierung abgeschlossen")
    }
}