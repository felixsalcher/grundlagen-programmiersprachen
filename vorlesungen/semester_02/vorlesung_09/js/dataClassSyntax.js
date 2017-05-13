class Auto{
    
    constructor(marke, baujahr, ps, hasAllrad){
        let _marke="";
        let _baujahr=0;
        let _ps=0;
        let _hasAllrad=false;
        
        this.setMarke = function(marke) {
            _marke = marke;
        };
        this.getMarke = function() {
            return _marke;
        };    
        this.setBaujahr = function(baujahr) {
            _baujahr = baujahr;
        };
        this.getBaujahr = function() {
            return _baujahr;
        };
        this.setPs = function(ps) {
            _ps = ps;
        };
        this.getPs = function() {
            return _ps;
        };
        this.setHasAllrad = function(hasAllrad) {
            _hasAllrad = hasAllrad;
        };
        this.getHasAllrad = function() {
            return _hasAllrad;
        };
        
        this.setMarke(marke || "");
        this.setBaujahr(baujahr || 0);
        this.setPs(ps || 0);
        this.setHasAllrad(hasAllrad || false);
    }

    getWheelDrive(){
        return this.getHasAllrad() ? "4WD" : "2WD";
    }

    toString(){
    return this.getMarke() + ", Baujahr " + this.getBaujahr() +
        ", " + this.getPs() + " PS, " +
        this.getWheelDrive();
    }
    
}
