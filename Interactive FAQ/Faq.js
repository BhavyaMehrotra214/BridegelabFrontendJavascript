$(document).ready(function () {

    $(".question").click(function () {
        $(this).next(".answer").slideToggle(300);
    });

    $(".question").hover(
        function () { $(this).addClass("hovered"); },
        function () { $(this).removeClass("hovered"); }
    );

    $(".question").dblclick(function () {
        $(".answer").slideUp(300);
    });

    $("input").focus(function () {
        $(this).closest(".faq-item").find(".question").addClass("focus-highlight");
    });

    $("input").blur(function () {
        $(this).closest(".faq-item").find(".question").removeClass("focus-highlight");
    });

});
