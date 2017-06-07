
$(document).ready(init);

function init(){
    $("#button1").click(task1);
    $("#button2").click(task2);
    $("#button3").click(task3);
    $("#button4").click(task4);
}

function task1(e){
    //Setzen einer CSS-Eigenschaft
    $("#div1").css("background-color", "blue");
}

function task2(e){
    //Setzen mehrererCSS-Eigenschaften über ein Objektliteral
    $("#div3").css({
        "background-color":"green",
        "color":"blue",
        "font-weight":"bold"
    });
}

function task3(e){
    //Auslesen mehrerer CSS-Eigenschaften
    let eigenschaften = $("#div3").css(["background-color","color"]); //objekt mit entsprechenden öffentlichen eigenschaften
    alert(eigenschaften["background-color"]); //zugriff auf objekteigenschaft mit eckigen Klammern (da Sonderzeichen in Eigenschaftsbezeichnung)
    alert(eigenschaften.color); //zugriff auf objekteigenschaft mit punkt-operator
    eigenschaften.color="red"; //veränderung einer objekteigenschaft
    $("#div3").css(eigenschaften); //zuweissen des ganzen objektes über den .css-Aufruf
}

function task4(e){
    //Setzen der CSS-Eigenschaft aller Absätze im div1
    $("#div1  p").css("font-weight","bold");
}


