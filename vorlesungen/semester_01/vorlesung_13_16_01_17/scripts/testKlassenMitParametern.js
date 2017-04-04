//Class-Syntax (ECMA 6)
//dient als Basis zur Erzeugung weiterer Objekte, wobei bei der Erzeugung gleich Eigenschaftswerte übergeben werden

class Person{
    constructor(nachname, vorname, gewicht){
        this.nachname=nachname || "";
        this.vorname=vorname || "";
        this.gewicht=gewicht || 0;
    }
    
    info(){
        return this.nachname + " " + this.vorname + ", " + this.gewicht + " kg.";
    }
}

function test(){
    let personA=new Person("Huber", "Manfred", 75);
    
    let personB=new Person("Weber", "Walter", 85);
    
    console.log(personA.info());
    console.log(personB.info());
    personA.gewicht=100;
    console.log(personA.info());
    //console.log(personA.__proto__); //sollte nicht mehr verwendet werden
    console.log(Object.getPrototypeOf(personA));
    console.log(personA.constructor);
    console.log(personA instanceof Object);
    console.log(personA instanceof Person);
    
    
    //Erstellen eines Arrays mit 2 neuen Personenobjekten
    
    let personen=[
        new Person("Kohl","Hans",75),
        new Person("Weiler","Winfried",85)
    ];
    
    //Hinzufügen von PersonA und PersonB zum Array (Methode push)
    personen.push(personA);
    personen.push(personB);
    
    //Ausgabe des Arrayinhalts
    for(let i=0, anz=personen.length; i<anz; i++){
        console.log(personen[i].info());
    }    
}

test();








