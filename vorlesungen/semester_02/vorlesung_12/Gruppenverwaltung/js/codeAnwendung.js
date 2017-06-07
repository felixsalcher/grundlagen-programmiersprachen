let gruppenverwaltung=null;

document.addEventListener("DOMContentLoaded",init,false);

function init(){
    document.getElementById("btnAnzeigenGruppe").addEventListener("click",anzeigenGruppe);
    document.getElementById("btnAlleAnzeigen").addEventListener("click",alleAnzeigen);
    createGruppen();
}

function createGruppen(){
    gruppenverwaltung=new gmi.Gruppenverwaltung();
    let _gruppe=null;
    let _person=null;
    //Gruppe A
    _gruppe=new gmi.Gruppe(1, "Gruppe A");
    _person=new gmi.Referent("Greiter", "Michael","0012");
    _gruppe.addPerson(_person);
    _person=new gmi.Student("Huber","Walter","0034");
    _gruppe.addPerson(_person);
    _person=new gmi.Student("Maier","Herbert","2222");
    _gruppe.addPerson(_person);
    gruppenverwaltung.addGruppe(_gruppe);
    
    //Gruppe B
    _gruppe=new gmi.Gruppe(2, "Gruppe B");
    _person=new gmi.Referent("Mirski", "Peter","0013");
    _gruppe.addPerson(_person);
    _person=new gmi.Student("Kohl","Hans","0039");
    _gruppe.addPerson(_person);
    _person=new gmi.Student("Maier","Maria","0021");
    _gruppe.addPerson(_person);
    gruppenverwaltung.addGruppe(_gruppe);
    
}

function anzeigenGruppe(){
            let div=document.getElementById("anzeige");
            let id=parseInt(document.getElementById("gruppeId").value);
            let gruppe=gruppenverwaltung.getGruppeById(id);
            let para=null;
            let header=null;
            div.innerHTML="";
            if(gruppe===null){
                para=document.createElement("p");
                para.appendChild(document.createTextNode("Keine Gruppe gefunden!"));
                div.appendChild(para);
            }
            else{
                header=document.createElement("h1");
                header.appendChild(document.createTextNode(gruppe.getBezeichnung()));
                div.appendChild(header);
                gruppe.getPersonen().forEach(person => {
                    para=document.createElement("p");
                    para.appendChild(document.createTextNode(person.info()));
                    div.appendChild(para);
                });
            }
        }
        
function alleAnzeigen(){
    let div=document.getElementById("anzeige");
    let para=null;
    let header=null;
    div.innerHTML="";
    header=document.createElement("h1");
    header.appendChild(document.createTextNode("Ausgabe alle Gruppen"));
    div.appendChild(header);
    gruppenverwaltung.getGruppen().forEach(gruppe=>{
        header=document.createElement("h2");
        header.appendChild(document.createTextNode(gruppe.getBezeichnung()));
        div.appendChild(header);
        gruppe.getPersonen().forEach(person => {
            para=document.createElement("p");
            para.appendChild(document.createTextNode(person.info()));
            div.appendChild(para);
        });
    });            
}