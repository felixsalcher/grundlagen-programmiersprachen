
$(document).ready(init);

function init(){
    $("#button1").click(task1);
    $("#button2").click(task2);
    $("#button3").click(task3);
    $("#button4").click(task4);
}

function task1(evt){
    //Auslesen eines Attributs
    alert( $("#div2 a:first").attr("href"));
}

function task2(evt){
    //Setzen eines Attributes
    $("#div2 a:first").attr("href", "http://www.mci.edu");
}

function task3(evt){
    //Setzen mehrerer Attribute über ein Objektliteral
    $("#div2 a:first").attr({
        href: "http://www.mci.edu",
        target: "_self"
    });
}

function task4(evt){
    //Setzen eines Attributs für mehrere Elemente
    $("#div2  a").attr("target","_self");
}


