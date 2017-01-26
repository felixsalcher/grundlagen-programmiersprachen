class Person {
    constructor(vorname, nachname, geburtsdatum) {
        let _vorname = "";
        let _nachname = "";
        let _geburtsdatum = "";

        this.setVorname = function(vorname) {
            _vorname = vorname;
        };

        this.getVorname = function () {
            return _vorname;
        };

        this.setNachname = function(nachname) {
            _nachname = nachname;
        };

        this.getNachname = function () {
            return _nachname;
        };

        this.setGeburtsdatum = function(geburtsdatum) {
            _geburtsdatum = geburtsdatum;
        };

        this.getGeburtsdatum = function() {
            return _geburtsdatum;
        };

        this.setVorname(vorname);
        this.setNachname(nachname);
        this.setGeburtsdatum(geburtsdatum);
    }

    info() {
        return this.getVorname() + " " + this.getNachname();
    }
}

class Student extends Person {
    constructor(vorname, nachname, geburtsdatum, matrikelnummer) {
        super(vorname, nachname, geburtsdatum);
        let _matrikelnummer = "";

        this.setMatrikelnummer = function (matrikelnummer) {
            _matrikelnummer = matrikelnummer;
        };

        this.getMatrikelnummer = function () {
            return _matrikelnummer;
        };

        this.setMatrikelnummer(matrikelnummer);
    }

    info() {
        return super.info() + " " + this.getMatrikelnummer();
    }
}

class Dozent extends Person {
    constructor(vorname, nachname, geburtsdatum, lehrernummer) {
        super(vorname, nachname, geburtsdatum);
        let _lehrernummer = "";

        this.setLehrernummer = function (lehrernummer) {
            _lehrernummer = lehrernummer;
        };

        this.getLehrernummer = function () {
            return _lehrernummer;
        };

        this.setLehrernummer(lehrernummer);
    }

    info() {
        return super.info() + " " + this.getLehrernummer();
    }
}

let felix = new Student("Felix", "Salcher", "01.07.1996", "12345");
console.log(felix.getVorname());
console.log(felix.getNachname());
console.log(felix.getGeburtsdatum());
console.log(felix.getMatrikelnummer());
console.log(felix.info());


let dilger = new Dozent("Thomas", "Dilger", "01.01.1800", "67890");
console.log(dilger.getVorname());
console.log(dilger.getNachname());
console.log(dilger.getGeburtsdatum());
console.log(dilger.getLehrernummer());
console.log(dilger.info());