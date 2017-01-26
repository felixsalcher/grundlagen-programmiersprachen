//Konstruktorfunktion mit Parametern
//dient als Basis zur Erzeugung weiterer Objekte, wobei bei der Erzeugung gleich Eigenschaftswerte übergeben werden

function Person(nachname, vorname, gewicht){
    this.nachname = nachname || "";
    this.vorname = vorname || "";
    this.gewicht = gewicht || 0;
    this.info=function(){
        return this.nachname + " " + this.vorname + ", " + this.gewicht + " kg.";
    };
}

function test(){
    let personA = new Person("Huber", "Manfred", 75);
    let personB = new Person("Weber", "Walter", 85);
    let personIch = new Person("Salcher", "Felix", 95);
    
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
    personen.push(personIch);
    
    //Ausgabe des Arrayinhalts
    for(let i=0, anz=personen.length; i<anz; i++){
        console.log(personen[i].info());
    }
}

test();









