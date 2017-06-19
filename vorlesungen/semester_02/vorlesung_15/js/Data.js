klausur1={};

klausur1.Pflanze=function(bezeichnung){
    let _bezeichnung="";
        
    this.setBezeichnung = function(bezeichnung) {
        _bezeichnung = bezeichnung;
    };
    this.getBezeichnung = function() {
        return _bezeichnung;
    };  
    
    this.setBezeichnung(bezeichnung || "");
};

klausur1.Sonnenblume = class extends klausur1.Pflanze {
    constructor(bezeichnung, anzahlBlaetter) {
        super(bezeichnung);

        let _anzahlBlaetter = "";

        this.setAnzahl = function (anzahl) {
            _anzahlBlaetter = anzahl;
        };

        this.getAnzahl = function (anzahl) {
            return _anzahlBlaetter;
        };

        this.setAnzahl(anzahlBlaetter || "");
    }

    info() {
        return this.getBezeichnung() + " mit " + this.getAnzahl() + " Blättern.";
    }
};


