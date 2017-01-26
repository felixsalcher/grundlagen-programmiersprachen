function Kreis(){
    let _radius=0;
    let _farbe="rot";
    
    this.setRadius=function(radius){
        _radius=radius;
    };
    
    this.getRadius=function(){
        return _radius;
    };
    
    this.setFarbe=function(farbe){
        _farbe=farbe;
    };
    
    this.getFarbe=function(){
        return _farbe;
    };
    
    this.umfang=function(){
        return 2*Math.PI*_radius;
    };
    
    this.flaeche=function(){
        return Math.pow(_radius)*Math.PI;
    };
    
    this.durchmesser=function(){
        return 2*_radius;
    };
    
    this.radiusErhoehen=function(wert){
        _radius+=wert;
    };
    
    this.beschreibung=function(){
        return "Ein Kreis mit Radius " + _radius + " und Farbe " + _farbe;        
    };
}


function test(){
    let kreisA=new Kreis();
    kreisA.setRadius(100);
    kreisA.setFarbe("rot");
    
    let kreisB=new Kreis();
    kreisB.setRadius(50);
    kreisB.setFarbe("blau");
    
    console.log(kreisA.beschreibung());
    console.log(kreisB.beschreibung());
    
    console.log(Object.getPrototypeOf(kreisA));
    console.log(kreisA.constructor);
    console.log(kreisA instanceof Object);
    console.log(kreisA instanceof Kreis);
    
    //Erzeugen eines leeren Arrays und Hinzufügen von Kreis A und B
    let kreise=new Array();
    kreise.push(kreisA);
    kreise.push(kreisB);
    
    //Ausgabe des Arrayinhalts
    for(let i=0, anz=kreise.length; i<anz; i++){
        console.log(kreise[i].beschreibung());
    }    
}

test();