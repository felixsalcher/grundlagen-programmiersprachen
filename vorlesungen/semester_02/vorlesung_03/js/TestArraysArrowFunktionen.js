let autos; //globale Array-Variable
        
function createAutos(){
    let auto=null;
    autos=new Array();
    
    //alternative 1
    auto=new Auto();
    auto.setMarke("BMW");
    auto.setBaujahr(2010);
    auto.setPs(150);
    auto.setHasAllrad(true);
    autos.push(auto);
    
    //alternative 2
    auto=new Auto("BMW", 1999, 80, false);
    autos.push(auto);
    
    //alternative 3
    autos.push(new Auto("Mercedes",2011, 125, false));
    
    
    
    
    
    document.getElementById("inhaltArray").innerHTML=autos.join("<br/>");
}

function sortMarkeAufsteigend(){
    autos.sort((element1, element2) => {
            if (element1.getMarke()< element2.getMarke()){
                return -1;
            }else if(element1.getMarke()>element2.getMarke()){
                return 1;            
            }else{
                return 0;
            }
        });
    document.getElementById("ausgabeManipulation").innerHTML=autos.join("<br/>");
}

function sortBaujahrAbsteigend(){
    
    document.getElementById("ausgabeManipulation").innerHTML=autos.join("<br/>");
}

function sortAllrad(){
    
    document.getElementById("ausgabeManipulation").innerHTML=autos.join("<br/>");
}

function filterBMW(){
    let ergebnis;
    
    document.getElementById("ausgabeManipulation").innerHTML=ergebnis.join("<br/>");
}

function filterUnter100Ps(){
    let ergebnis;
    
    document.getElementById("ausgabeManipulation").innerHTML=ergebnis.join("<br/>");
}

function filterOhneAllrad(){
    let ergebnis;
    
    document.getElementById("ausgabeManipulation").innerHTML=ergebnis.join("<br/>");
}

function pruefeAlleBaujahrKleiner2010(){
   let ergebnis;
   
   document.getElementById("ausgabeManipulation").innerHTML=ergebnis;
}        

function pruefeMindestensEinesBaujahrKleiner2010(){
   let ergebnis;
   
   document.getElementById("ausgabeManipulation").innerHTML=ergebnis;
}

function reduceGesamtPs(){
   let ergebnis;
   
   document.getElementById("ausgabeManipulation").innerHTML=ergebnis;
}

function mapPsErhoeht(){
   let ergebnis;
   
   document.getElementById("ausgabeManipulation").innerHTML=ergebnis.join("<br/>");
   document.getElementById("inhaltArray").innerHTML=autos.join("<br/>");
}