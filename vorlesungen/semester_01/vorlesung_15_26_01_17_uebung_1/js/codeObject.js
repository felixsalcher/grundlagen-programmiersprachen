function Lehrveranstaltung(bezeichnung, referent, note) {
    let _bezeichnung = "";
    let _referent = "";
    let _note = 0;

    this.setBezeichnung = function (bezeichnung) {
        if(bezeichnung) {
            _bezeichnung = bezeichnung;
        }
        else {
            throw new Error("Bezeichnung darf nicht leer sein");
        }
    };

    this.getBezeichnung = function () {
        return _bezeichnung;
    };

    this.setReferent = function (referent) {
        if(referent) {
            _referent = referent;
        }
        else {
            throw new Error("Referent darf nicht leer sein");
        }

    };

    this.getReferent = function () {
        return _referent;
    };

    this.setNote = function (note) {
        if(note && !isNaN(note)) {
            if(note >= 1 && note <= 5) {
                _note = note;
            }
            else {
                throw new Error("Note muss zwischen 1 und 5 liegen!");
            }
        }
        else {
            throw new Error("Note muss eine Zahl sein!");
        }
    };

    this.getNote = function () {
        return _note;
    };

    this.setBezeichnung(bezeichnung);
    this.setReferent(referent);
    this.setNote(note);
}

Lehrveranstaltung.prototype.printDescription = function() {
    return this.getBezeichnung() + ", " + this.getReferent() + ", Note: " + this.getNote();
};