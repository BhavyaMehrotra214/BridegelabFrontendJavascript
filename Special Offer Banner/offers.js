$(document).ready(function () {

    $("#hideBtn").click(function () {
        $(".banner").hide(300);
    });

    $("#showBtn").click(function () {
        $(".banner").show(300);
    });

    $("#slideBtn").click(function () {
        $(".banner").slideToggle(400);
    });


    $("#fadeBtn").click(function () {
        $(".banner").fadeToggle(400);
    });

    let index = 0;
    const banners = $(".banner");

    setInterval(function () {

        banners.fadeOut(500);


        $(banners[index]).fadeIn(500);


        index = (index + 1) % banners.length;

    }, 5000);

});
