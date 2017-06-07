var v5={};

v5.Person=function (){
    let _name="";
    
    this.setName = function(name) {
        _name = name;
    };
    this.getName = function() {
        return _name;
    };
};

v5.Person.prototype.info=function(){
    return "Ich heisse " + this.getName();
};


v5.Student=function (){
    
    v5.Person.call(this);
    
    let _matrikelnummer="";
    
    this.setMatrikelnummer = function(matrikelnummer) {
        _matrikelnummer = matrikelnummer;
    };
    this.getMatrikelnummer = function() {
        return _matrikelnummer;
    };
};

v5.Student.prototype=new v5.Person();
v5.Student.prototype.constructor=v5.Student;

v5.Student.prototype.info=function(){
    return v5.Person.prototype.info.call(this) + ", " +
        this.getMatrikelnummer();
};

v5.createEinePersonUndZweiStudenten = function (){
    let p=new v5.Person();
    p.setName("Maier");
    let s1=new v5.Student();
    s1.setName("Greiter");
    s1.setMatrikelnummer("1234");
    let s2=new v5.Student();
    s2.setName("Mirski");
    s2.setMatrikelnummer("5678");
    alert(p.info());
    alert(s1.info());
    alert(s2.info());
};

v5.createEinePersonUndZweiStudenten();







