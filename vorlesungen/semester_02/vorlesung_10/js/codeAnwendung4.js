
$(document).ready(init);

function init(){
    let _div=$("<div>");
    //alert(_div);
    $("<input>")
        .attr({id: "input1", type: "button", value: "Klick mich"})
        .css({"width": "200px", "height": "100px"})
        .addClass("buttonMitFarbe")
        .click(task2)
        .appendTo(_div);
    _div.appendTo("body");
}



function task1(evt){
    $("<div>").append(
        $("<p>")
            .addClass("contentFett")
            .text("Ein Absatz")
        )
    .appendTo("body");
 }

 function task2(e) {
     $("<div>").append(
         $("<a>")
             .attr({
             href: "http://www.mci.edu",
             target: "_self"
         }).append(
             $("<img>").attr({
                 src: "https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg"
             })
         )
     ).appendTo("body");
}