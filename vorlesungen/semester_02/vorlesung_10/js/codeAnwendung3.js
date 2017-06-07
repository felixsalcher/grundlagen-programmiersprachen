
$(document).ready(init);

function init(){
    $("#button1").click(task1);
    $("#button2").click(task2);
    $("#button3").click(task3);
    $("#button4").click(task4);
}

function task1(evt){
    $("#divNav input").wrap("<div></div>");
}

function task2(evt){
    $("#divNav input").wrapAll("<div>");
}

function task3(evt){
    $("#div1 p").wrapInner("<a href='#'>");
}



function task4(evt){
    $("#div1  p").unwrap();
}


