$(document).ready(function () {
    $("#addPost").click(function () {
        $("#postList").append(`
            <div class="post">
                New Blog Post Added!
            </div>
        `);
    });

    $("#prependPost").click(function () {
        $("#postList").prepend(`
            <div class="post">
                 Featured Post: Special Announcement!
            </div>
        `);
    });


    $("#removeLast").click(function () {
        $("#postList .post:last").remove();
    });


    $(".post").each(function () {
        $(this).before(`<span class="tag">#Blog</span>`);
        $(this).after(`<span class="tag">#ReadMore</span>`);
    });


    $("#applyHighlight").click(function () {
        let keyword = $("#keyword").val().toLowerCase();

        $(".post").removeClass("highlight"); 

        $(".post").each(function () {
            let text = $(this).text().toLowerCase();

            if (text.includes(keyword) && keyword !== "") {
                $(this).addClass("highlight");
            }
        });
    });

});
