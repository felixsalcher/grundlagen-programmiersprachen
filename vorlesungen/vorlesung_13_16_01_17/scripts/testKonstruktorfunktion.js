//Konstruktorfunktion
//dient als Basis zur Erzeugung weiterer Objekte

function Person(){
    this.nachname="";
    this.vorname="";
    this.gewicht=0;
    this.info=function(){
        return this.nachname + " " + this.vorname + ", " + this.gewicht + " kg.";
    };
}

function test(){
    let personA=new Person();
    personA.nachname = "Huber";
    personA.vorname = "Manred";
    personA.gewicht = 75;
    
    let personB=new Person();
    personB.nachname = "Weber";
    personB.vorname = "Walter";
    personB.gewicht = 85;

    let personIch = new Person();
    personIch.nachname = "Salcher";
    personIch.vorname = "Felix";
    personIch.gewicht = "95";

    console.log(personA.info());
    console.log(personB.info());
    personA.gewicht=100;
    console.log(personA.info());
    //console.log(personA.__proto__); //sollte nicht mehr verwendet werden
    console.log(Object.getPrototypeOf(personA));
    console.log(personA.constructor);
    console.log(personA instanceof Object);
    console.log(personA instanceof Person);
    
    //Erzeugen eines leeren Arrays und Hinzufügen von Person A und B
    let personen=new Array();
    personen.push(personA);
    personen.push(personB);
    personen.push(personIch);

    //Ausgabe des Arrayinhalts
    for(let i=0, anz=personen.length; i<anz; i++){
        console.log(personen[i].info());
    }    
}

test();








