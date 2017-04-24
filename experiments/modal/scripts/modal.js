$(document).ready(function () {
    var $modal = $("#modal"),
        modalDismissed = false;

    function showModal($modal) {
        if(!modalDismissed) {
            $modal.addClass("md-show");
        }
    }

    function hideModal($modal, event) {
        modalDismissed = true;
        event.stopPropagation();
        $modal.removeClass("md-show");
    }

    $("#modalTrigger").on("click", function () {
        showModal($modal);
    });

    $(".md-close").on("click", function (e) {
        hideModal($modal, e);
    });

    $(".md-overlay").on("click", function(e) {
        hideModal($modal, e);
    });

    $(window).on("scroll", function () {
        if($(window).scrollTop() >= $(document).height() - $(window).scrollTop() && !modalDismissed) {
            window.setTimeout(function() {
                showModal($modal);
            }, 3000);
        }
    });
});