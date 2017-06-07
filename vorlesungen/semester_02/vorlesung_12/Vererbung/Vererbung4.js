var v4={};

v4.Person=function (){
    let _name="";
    
    this.setName = function(name) {
        _name = name;
    };
    this.getName = function() {
        return _name;
    };
};

v4.Person.prototype.info=function(){
    return "Ich heisse " + this.getName();
};


v4.Student=function (){
    let _matrikelnummer="";
    
    this.setMatrikelnummer = function(matrikelnummer) {
        _matrikelnummer = matrikelnummer;
    };
    this.getMatrikelnummer = function() {
        return _matrikelnummer;
    };
};

v4.Student.prototype=new v4.Person();
v4.Student.prototype.constructor=v4.Student;

v4.Student.prototype.info=function(){
    return v4.Person.prototype.info.call(this) + ", " +
        this.getMatrikelnummer();
};

v4.createEinePersonUndZweiStudenten = function (){
    let p=new v4.Person();
    p.setName("Maier");
    let s1=new v4.Student();
    s1.setName("Greiter");
    s1.setMatrikelnummer("1234");
    let s2=new v4.Student();
    s2.setName("Mirski");
    s2.setMatrikelnummer("5678");
    alert(p.info());
    alert(s1.info());
    alert(s2.info());
};

v4.createEinePersonUndZweiStudenten();







