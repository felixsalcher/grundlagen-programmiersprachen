
//Objektliterale
//Erzeugung von 2 Objekten mit Eigenschaften (inkl. Werten) und einer Methode

function test(){
    let personA={
        nachname: "Huber",
        vorname: "Manfred",
        gewicht: 75,
        info: function(){
            return this.nachname + " " + this.vorname + ", " + this.gewicht + " kg.";
        }
    };
    
    let personB={
        nachname: "Weber",
        vorname: "Walter",
        gewicht: 85,
        info: function(){
            return this.nachname + " " + this.vorname + ", " + this.gewicht + " kg.";
        }
    };

    let personIch = {
        nachname: "Salcher",
        vorname: "Felix",
        gewicht: 95,
        info: function() {
            return this.nachname + " " + this.vorname + ", " + this.gewicht + " kg.";
        }
    };

    let personNachbar = {};
    personNachbar.nachname = "Kohl";
    personNachbar.vorname = "Walter";
    personNachbar.gewicht = 65;
    personNachbar.info = personA.info;

    console.log(personA.info());
    console.log(personB.info());
    personA.gewicht=100;
    console.log(personA.info());
    //console.log(personA.__proto__); //sollte nicht mehr verwendet werden
    console.log(Object.getPrototypeOf(personA));
    
    
    //Erstellen eines Arrays mit 2 neuen Personenobjekten
    
    let personen=[
        {
            nachname: "Kohl",
            vorname: "Hans",
            gewicht: 75,
            info: function(){
                return this.nachname + " " + this.vorname + ", " + this.gewicht + " kg.";
            }
        },
        {
            nachname: "Weiler",
            vorname: "Winfried",
            gewicht: 85,
            info: function(){
                return this.nachname + " " + this.vorname + ", " + this.gewicht + " kg.";
            }
        }
    ];
    
    //Hinzufügen von PersonA und PersonB zum Array (Methode push)
    personen.push(personA);
    personen.push(personB);
    personen.push(personIch);
    personen.push(personNachbar);

    //Ausgabe des Arrayinhalts
    for(let i=0, anz=personen.length; i<anz; i++){
        console.log(personen[i].info());
    }    
}

test();







