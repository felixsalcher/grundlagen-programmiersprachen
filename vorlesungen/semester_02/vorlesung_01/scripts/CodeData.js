class Ort{
    constructor() {
        let _ort = "";
        let  _bezeichnung = "";
        let _pfadBild = "";
        let _breite = 0;
        let _laenge = 0;

        this.setOrt = function(ort) {
            _ort = ort;
        };

        this.getOrt = function() {
            return _ort;
        };

        this.setBezeichnung = function(bezeichnung) {
            _bezeichnung = bezeichnung;
        };

        this.getBezeichnung = function() {
            return _bezeichnung;
        };

        this.setPfadBild = function(pfadBild) {
            _pfadBild = pfadBild;
        };

        this.getPfadBild = function() {
            return _pfadBild;
        };

        this.setBreite = function(breite) {
            _breite = breite;
        };

        this.getBreite = function(breite) {
            return _breite;
        };

        this.setLaenge = function(laenge) {
            _laenge = laenge;
        };

        this.getLaenge = function() {
            return _laenge;
        };
    }
    bezeichnung() {
        return this.getOrt() + ": " + this.getBezeichnung();
    }
}