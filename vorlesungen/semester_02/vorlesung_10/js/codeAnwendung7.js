

$(document).ready(init);

function init(){
    $("#divKalender").datepicker({
        dateFormat: "dd.mm.yy",
        monthNames: ["Jänner","Feber","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],
        dayNames: ["Sonntag", "Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],
        dayNamesMin: ["So","Mo","Di","Mi","Do","Fr","Sa"],
        onSelect: function(dateText, inst) {
            $("#anzeigeDatum").text(dateText);   
        }
    });
}

