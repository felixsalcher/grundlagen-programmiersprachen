

$(document).ready(init);

function init(){
    $("#button1").click(task1);
    $("#button2").on("click",task2);
    $("#button3").on("click", {nachname: "Greiter", vorname: "Michael"},task3);
    $("#button4").click(task4);
    $("#div1 p").click(task4);
    $("#div1").on("click", "p.contentFett",task4a);
}

function task1(evt){
    alert($(this).attr("value"));
    //alert(evt.target.value);
}

function task2(evt){
    alert($(this).attr("value"));
}

function task3(evt){
    alert("Hallo " + evt.data.nachname + " " + evt.data.vorname);
}

function task4(evt){
    alert($(this).text());
}

function task4a(evt){
    alert("Behandelt auf div-Ebene: " + $(this).text());
}


