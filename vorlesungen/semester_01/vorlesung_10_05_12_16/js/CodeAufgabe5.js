function kleiner(){
    "use strict";
    let bild=null;
    let curWidth=0;
    let curHeight=0;
    let newWidth=0;
    let newHeight=0;
    for(let i=1;i<=5;i++){
        bild=document.getElementById("bild" + i);
        curWidth=parseInt(bild.width);
        curHeight=parseInt(bild.height);
        newWidth=curWidth-10;
        newHeight=curHeight-10;
        if(newWidth>=0 && newHeight>=0){
            bild.width=newWidth;
            bild.height=newHeight;
        }
    }
}

function groesser(){
    "use strict";
    let bild=null;
    let curWidth=0;
    let curHeight=0;
    let newWidth=0;
    let newHeight=0;
    for(let i=1;i<=5;i++){
        bild=document.getElementById("bild" + i);
        curWidth=parseInt(bild.width);
        curHeight=parseInt(bild.height);
        newWidth=curWidth+10;
        newHeight=curHeight+10;
        bild.width=newWidth;
        bild.height=newHeight;
    }
}