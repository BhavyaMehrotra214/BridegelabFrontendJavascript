var jq1 = jQuery.noConflict(true);   
var jq2 = jQuery.noConflict(true);   

//  Carousel Slider Rotation
jq1(document).ready(function () {
    let images = [
        "https://via.placeholder.com/300x150/ff6b6b",
        "https://via.placeholder.com/300x150/4ecdc4",
        "https://via.placeholder.com/300x150/ffe66d"
    ];

    let index = 0;

    setInterval(function () {
        index = (index + 1) % images.length;
        jq1("#carImg").attr("src", images[index]);
    }, 2000);
});


// Modal Popup
jq2(document).ready(function () {

    jq2("#openModal").click(function () {
        jq2("#modalBox").fadeIn();
    });

    jq2("#closeModal").click(function () {
        jq2("#modalBox").fadeOut();
    });

});


//  Highlight Active Widget
jq1("#highlightWidget").click(function () {
    jq1(this).toggleClass("activeWidget");
});


jq2("#tooltipWidget").hover(
    function () {
        jq2(this).find(".tooltipBox").fadeIn(200);
    },
    function () {
        jq2(this).find(".tooltipBox").fadeOut(200);
    }
);

