function bildKleinStyle(){
    "use strict";
    let einBild=document.getElementById("bild1");
    einBild.style.width="300px";
}

function bildGrossStyle(){
    "use strict";
    let einBild=document.getElementById("bild1");
    einBild.style.width="500px";
}

function bildKleinKlasse(){
    "use strict";
    let einBild=document.getElementById("bild2");
    einBild.className="klein"; //siehe myStyle.css
}

function bildGrossKlasse(){
    "use strict";
    let einBild=document.getElementById("bild2");
    einBild.className="gross"; //siehe myStyle.css
}

function wechselKlasse() {
    "use strict";

    let einBild=document.getElementById("bild2");

    if(einBild.className == "gross") {
        einBild.className = "klein";
    } else {
        einBild.className = "gross";
    }
}