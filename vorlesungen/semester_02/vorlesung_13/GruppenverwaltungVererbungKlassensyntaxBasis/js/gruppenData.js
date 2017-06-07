var gmi=gmi || {};

//Gruppenverwaltung
gmi.Gruppenverwaltung=class{
    
    constructor(){
        let _gruppen=new Array();
    
        this.getGruppen=function(){
            return _gruppen;
        };
    }
    
    addGruppe(gruppe){
    let gs=this.getGruppen();
    gs[gs.length]=gruppe;
    }
    
    getGruppeById(id){
        let gs=this.getGruppen();
        let g=null;
        for(let i=0, anz=gs.length; i<anz; i++){
            if (gs[i].getId()==id){
                g=gs[i];
                break;
            }
        }
        return g;
    }
    
};

//Gruppe
gmi.Gruppe=class{
    
    constructor(id, bezeichnung){
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
        }
        
        addPerson(person){
            this.getPersonen().push(person);
        }
    
};

//Person
gmi.Person = class {
    constructor(nachname, vorname) {
        let _nachname = "";
        let _vorname = "";

        this.setNachname = function(nachname) {
            _nachname = nachname;
        };

        this.getNachname = function () {
            return _nachname;
        };

        this.setVorname = function(nachname) {
            _vorname = vorname;
        };

        this.getVorname = function () {
            return _vorname;
        };

        this.setNachname(nachname);
        this.setVorname(vorname);
    }

    typ() {
        return "Person";
    }

    name() {
        return this.getNachname() + " " + this.getVorname();
    }

    info() {
        return this.typ() + ": " + this.name();
    }
};

gmi.Student = class extends gmi.Person {
    constructor(nachname, vorname, matrikelnummer) {
        super(nachname, vorname);

        let _matrikelnummer = "";

        this.setMatrikelnummer = function(matrikelnummer) {
            _matrikelnummer = matrikelnummer;
        };

        this.getMatrikelnummer = function() {
            return _matrikelnummer;
        };

        this.setMatrikelnummer(matrikelnummer || "");
    }

    typ() {
        return "Student";
    }

    info() {
        return super.info() + ", " + this.getMatrikelnummer();
    }
};

gmi.Referent = class extends gmi.Person {
    constructor(nachname, vorname, personalnummer) {
        super(nachname, vorname);

        let _personalnummer = "";

        this.setPersonalnummer = function(personalnummer) {
            _personalnummer = personalnummer;
        };

        this.getPersonalnummer = function() {
            return _personalnummer;
        };

        this.setPersonalnummer(personalnummer || "");
    }

    typ() {
        return "Referent";
    }

    info() {
        return super.info() + ", " + this.getPersonalnummer();
    }
};