var v2={};

v2.Person=function (){
    this.name="";
};

v2.Person.prototype.info=function(){
    return "Ich heisse " + this.name;
};


v2.Student=function (){
    this.matrikelnummer="";
};

v2.Student.prototype=new v2.Person();
v2.Student.prototype.constructor=v2.Student;

v2.Student.prototype.info=function(){
    return v2.Person.prototype.info.call(this) + ", " +
        this.matrikelnummer;
};

v2.createEinePersonUndZweiStudenten = function (){
    let p=new v2.Person();
    p.name="Maier";
    let s1=new v2.Student();
    s1.name="Greiter";
    s1.matrikelnummer="1234";
    let s2=new v2.Student();
    s2.name="Mirski";
    s2.matrikelnummer="5678";
    alert(p.info());
    alert(s1.info());
    alert(s2.info());
};

v2.createEinePersonUndZweiStudenten();







