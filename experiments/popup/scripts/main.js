var modalDismissed = false;

$(document).ready(function () {
    $("#cancel").on("click", function () {
        modalDismissed = true;
        $("#modal").removeClass("show").addClass("hide");
        $("#modal-container").removeClass("show").addClass("hide");
        $("body").css("overflow", "scroll");
    });
});

$(window).scroll(function () {
    if($(window).scrollTop() >= $(document).height() - $(window).scrollTop() && !modalDismissed) {
        $("#modal-container").css("top", $(window).scrollTop());
        $("#modal").removeClass("hide").addClass("show");
        $("#modal-container").removeClass("hide").addClass("show");
        $("body").css("overflow", "hidden");
    }
});