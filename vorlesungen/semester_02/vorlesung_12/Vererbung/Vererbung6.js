var v6={};

v6.Person=function (name){
    let _name = "";
    
    this.setName = function(name) {
        _name = name;
    };
    this.getName = function() {
        return _name;
    };
    
    this.setName(name || "");
};

v6.Person.prototype.info=function(){
    return "Ich heisse " + this.getName();
};


v6.Student=function (name, matrikelnummer){
    
    v6.Person.call(this,name);
    
    let _matrikelnummer = "";
    
    this.setMatrikelnummer = function(matrikelnummer) {
        _matrikelnummer = matrikelnummer;
    };
    this.getMatrikelnummer = function() {
        return _matrikelnummer;
    };
    
    this.setMatrikelnummer(matrikelnummer || "");
};

v6.Student.prototype=new v6.Person();
v6.Student.prototype.constructor=v6.Student;

v6.Student.prototype.info=function(){
    return v6.Person.prototype.info.call(this) + ", " +
        this.getMatrikelnummer();
};

v6.createEinePersonUndZweiStudenten = function (){
    let p=new v6.Person("Maier");
    let s1=new v6.Student("Greiter","1234");
    let s2=new v6.Student("Mirski","5678");
    alert(p.info());
    alert(s1.info());
    alert(s2.info());
};

v6.createEinePersonUndZweiStudenten();







