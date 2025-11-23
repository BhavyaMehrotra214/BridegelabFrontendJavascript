$(document).ready(function () {

    // --- 1. Click manager → highlight direct reports ---
    $(".manager").click(function () {
        $(".employee").removeClass("highlight"); // remove previous
        $(this).children(".employee").addClass("highlight");
    });

    // --- 2. Hover employee → show contact info using .next() ---
    $(".employee").hover(
        function () {
            $(this).find(".contact-info").slideDown(200);
        },
        function () {
            $(this).find(".contact-info").slideUp(200);
        }
    );

    // --- 3. Click department → change background of all its members ---
    $(".dept-title").click(function () {
        $(".department *").removeClass("highlight");
        $(this).parent().children().addClass("highlight");
    });

    // --- 4. Select random employee → highlight siblings ---
    let employees = $(".employee");
    let randomIndex = Math.floor(Math.random() * employees.length);

    let randomEmployee = employees.eq(randomIndex);

    randomEmployee.siblings().addClass("highlight");

    $(".dept-title").dblclick(function () {
        let dept = $(this).parent();

        if (dept.hasClass("collapsed")) {
            dept.removeClass("collapsed");
            dept.find("*").show();
        } else {
            dept.addClass("collapsed");
        }
    });

});
