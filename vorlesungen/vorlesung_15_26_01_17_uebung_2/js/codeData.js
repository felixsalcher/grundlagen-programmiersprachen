function Lehrveranstaltung(bezeichnung, referent, note){
    let _bezeichnung="";
    let _referent="";
    let _note="";
    
    this.setBezeichnung = function(bezeichnung) {
        if(!bezeichnung){
            throw new Error("Bezeichnung darf nicht leer sein!");
        }
        _bezeichnung = bezeichnung;
    };
    this.getBezeichnung = function() {
        return _bezeichnung;
    };
    
    this.setReferent = function(referent) {
        if(!referent){
            throw new Error("Referent darf nicht leer sein!");
        }
        _referent = referent;
    };
    this.getReferent = function() {
        return _referent;
    };
    
    this.setNote = function(note) {
        if(!note || isNaN(note)){
            throw new Error("Ungültige Note!");
        }
        if(note<1 || note > 5){
            throw new Error("Note muss zwischen 1 und 5 liegen!");
        }
        _note = note;
    };
    this.getNote = function() {
        return _note;
    };
    
    this.setBezeichnung(bezeichnung);
    this.setReferent(referent);
    this.setNote(note);
}

Lehrveranstaltung.prototype.beschreibung=function(){
    return this.getBezeichnung() + ", " + this.getReferent() + ", Note " + this.getNote();
};
