var v3={};

v3.Person=function (){
    this.name="";
};

v3.Person.prototype.info=function(){
    return "Ich heisse " + this.name;
};


v3.Student=function (){
    this.matrikelnummer="";
};

v3.Student.prototype=new v3.Person();
v3.Student.prototype.constructor=v3.Student;

v3.Student.prototype.info=function(){
    return v3.Person.prototype.info.call(this) + ", " +
        this.matrikelnummer;
};

v3.createEinePersonUndZweiStudenten = function (){    
    let p=new v3.Person();
    p.name="Maier";
    let s1=new v3.Student();
    s1.name="Greiter";
    s1.matrikelnummer="1234";
    let s2=new v3.Student();
    s2.name="Mirski";
    s2.matrikelnummer="5678";
    v3.ausgabeInfo(p);
    v3.ausgabeInfo(s1);
    v3.ausgabeInfo(s2);
};

v3.ausgabeInfo=function(o){
    alert(o.info());
};




v3.createEinePersonUndZweiStudenten();













