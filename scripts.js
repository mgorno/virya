$(document).ready(function () {
    $("#menu-btn").click(function () {
        $(this).toggleClass("open");
        $("header").toggleClass("open");
    });
});
$(document).ready(function () {
    $("#popup").fadeIn();
    $("#close-popup").click(function () {
        $("#popup").fadeOut();
    });
});