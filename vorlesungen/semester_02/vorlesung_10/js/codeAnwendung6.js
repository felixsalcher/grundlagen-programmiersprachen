

$(document).ready(init2 );

function init(){
    $("#div1>p").each(function(index){
        if(index % 2 === 0){
            this.className="contentFett"; //this bezieht sich auf das entsprechende HTML-Element
        }
    });
}

function init1(){
    $("#div1>p").each(function(index){
        if(index % 2 === 0){
            $(this).addClass("contentFett"); //this wird jqueryfiziert durch $-Methode
        }
    });
}

function init2() {
    $("#div1 > p").each((index, element) => index % 2 == 0 ? $(element).addClass("contentFett") : null);
}

function init3(){
    $("#div1>p").each(function(index, element){
        if(index % 2 === 0){
            element.className="contentFett"; //element bezieht sich auf das entsprechende HTML-Element
        }
    });
}

function init4(){
    $("#div1>p").each(function(index,element){
        if(index % 2 === 0){
            $(element).addClass("contentFett"); //element wird jqueryfiziert durch $-Methode
        }
    });
}


