var vKlassensyntax={};

vKlassensyntax.Person=class{
    constructor(name){
        let _name = "";
        
        this.setName = function(name) {
            _name = name;
        };
        this.getName = function() {
            return _name;
        };
        
        this.setName(name || "");
    }
    
    info(){
        return "Ich heisse " + this.getName();
    }
};


vKlassensyntax.Student=class extends vKlassensyntax.Person{
    
    constructor(name, matrikelnummer){    
        
        super(name);
        
        let _matrikelnummer = "";
        this.setMatrikelnummer = function(matrikelnummer) {
            _matrikelnummer = matrikelnummer;
        };
        this.getMatrikelnummer = function() {
            return _matrikelnummer;
        };
        this.setMatrikelnummer(matrikelnummer || "");
    }
    info(){
        return super.info() + ", " +
            this.getMatrikelnummer();
    }
};


vKlassensyntax.createEinePersonUndZweiStudenten = function (){
    let p=new vKlassensyntax.Person("Maier");
    let s1=new vKlassensyntax.Student("Greiter","1234");
    let s2=new vKlassensyntax.Student("Mirski","5678");
    alert(p.info());
    alert(s1.info());
    alert(s2.info());
};

vKlassensyntax.createEinePersonUndZweiStudenten();







