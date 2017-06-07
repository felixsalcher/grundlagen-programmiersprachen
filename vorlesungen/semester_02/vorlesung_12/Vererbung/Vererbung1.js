var v1={};

v1.Person=function(){
    this.name="";
};

v1.Person.prototype.infoPerson=function(){
    return "Ich heisse " + this.name;
};


v1.Student=function(){
    this.matrikelnummer = "";
};

v1.Student.prototype=new v1.Person();
v1.Student.prototype.constructor=v1.Student; //unnötig

v1.Student.prototype.infoStudent=function(){
    return this.infoPerson() + ", " +
        this.matrikelnummer;
};


v1.createStudent=function (){
    let s = new v1.Student();
    s.name = "Greiter";
    s.matrikelnummer = "1234";

    alert(s.infoPerson());
    alert(s.infoStudent());
    alert(s instanceof v1.Student); // ==> true
    alert(s instanceof v1.Person); // ==> true
    alert(s instanceof Object); // ==> true
};

v1.createEinePersonUndZweiStudenten=function (){
    let p = new v1.Person();
    p.name = "Maier";

    let s1 = new v1.Student();
    s1.name = "Greiter";
    s1.matrikelnummer = "1234";

    let s2 = new v1.Student();
    s2.name = "Mirski";
    s2.matrikelnummer = "5678";

    alert(p.infoPerson());
    alert(s1.infoStudent());
    alert(s2.infoStudent());
};

v1.createStudent();
v1.createEinePersonUndZweiStudenten();







