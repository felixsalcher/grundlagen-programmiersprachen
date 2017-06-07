var gmi=gmi || {};

//Gruppenverwaltung

gmi.Gruppenverwaltung=function(){
    let _gruppen=new Array();
    
    this.getGruppen=function(){
        return _gruppen;
    };
};

gmi.Gruppenverwaltung.prototype.addGruppe=function(gruppe){
    let gs=this.getGruppen();
    gs[gs.length]=gruppe;
};

gmi.Gruppenverwaltung.prototype.getGruppeById=function(id){
    let gs=this.getGruppen();
    let g=null;
    for(i=0, anz=gs.length; i<anz; i++){
        if (gs[i].getId()==id){
            g=gs[i];
            break;
        }
    }
    return g;
};

//Gruppe

gmi.Gruppe=function(id, bezeichnung){
    let _id= 0;
    let _bezeichnung= "";
    let _personen=new Array();
    
    this.setId = function(id) {
        _id = id;
    };
    this.getId = function() {
        return _id;
    };
    this.setBezeichnung = function(bezeichnung) {
        _bezeichnung = bezeichnung;
    };
    this.getBezeichnung = function() {
        return _bezeichnung;
    };    
    this.getPersonen = function() {
        return _personen;
    };
    
    this.setId(id || 0);
    this.setBezeichnung(bezeichnung || "");
};

gmi.Gruppe.prototype.addPerson=function(person){
    this.getPersonen().push(person);
};

gmi.Person = function(nachname, vorname) {
    let _nachname = "";
    let _vorname = "";
    
    this.setNachname = function(nachname) {
        _nachname = nachname;
    };
    
    this.getNachname = function() {
        return _nachname;
    };

    this.setVorname = function(vorname) {
        _vorname = vorname;
    };

    this.getNachname = function() {
        return _vorname;
    };
    
    this.setNachname(nachname || "");
    this.setVorname(vorname || "");
};

gmi.Person.prototype.name = function() {
    return this.getNachname() + " " + this.getVorname();
};

gmi.Person.prototype.info = function () {
    return "Person: " + this.name();
};

gmi.Student = function (nachname, vorname, matrikelnummer) {
    gmi.Person.call(this, nachname, vorname);

    let _matrikelnummer = "";

    this.setMatrikelnummer = function(matrikelnummer) {
        _matrikelnummer = matrikelnummer;
    };

    this.getMatrikelnummer = function () {
        return _matrikelnummer;
    };

    this.setMatrikelnummer(matrikelnummer || "");
};

gmi.Student.prototype = new gmi.Person();
gmi.Student.prototype.constructor = gmi.Student;

gmi.Student.prototype.info = function() {
    return gmi.Person.prototype.info.call(this) + ", " + this.getMatrikelnummer();
};