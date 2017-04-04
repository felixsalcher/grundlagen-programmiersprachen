//Konstruktorfunktion mit Parametern
//dient als Basis zur Erzeugung weiterer Objekte, wobei bei der Erzeugung gleich Eigenschaftswerte übergeben werden

function Person(nachname, vorname, gewicht){
    let _nachname="";
    let _vorname="";
    let _gewicht=0;
    
    this.setNachname=function(nachname){
        if(!nachname){
            throw new Error("Nachname darf nicht leer sein!");
        }
        _nachname=nachname;
    };
    
    this.getNachname=function(){
        return _nachname;
    };
    
    this.setVorname=function(vorname){
        if(!vorname){
            throw new Error("Vorname darf nicht leer sein!");
        }
        _vorname=vorname;
    };
    
    this.getVorname=function(){
        return _vorname;
    };
    
    this.setGewicht=function(gewicht){
        if(!gewicht || gewicht<0){
            throw new Error("Gewicht darf nicht leer oder negativ sein!");
        }
        _gewicht=gewicht;
    };
    
    this.getGewicht=function(){
        return _gewicht;
    };
    
    this.setNachname(nachname);
    this.setVorname(vorname);
    this.setGewicht(gewicht);
}

Person.prototype.info = function(){
    return this.getNachname() + " " + this.getVorname() + ", " + this.getGewicht() + " kg.";
};

try{
    let personSoNicht=new Person("","Werner", 100);
}catch(e){
    console.log(e.message);
}

let personA=new Person("Huber", "Manfred", 75);

let personB=new Person("Weber", "Walter", 85);

console.log(personA.info());
console.log(personB.info());
try{
    personA.setGewicht(-100);
}catch(e){
    console.log(e.message);
}
console.log(personA.info());
//console.log(personA.__proto__); //sollte nicht mehr verwendet werden
console.log(Object.getPrototypeOf(personA));
console.log(personA.constructor);
console.log(personA instanceof Object);
console.log(personA instanceof Person);









