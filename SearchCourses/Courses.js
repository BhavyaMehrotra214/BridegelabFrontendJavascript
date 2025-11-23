$(document).ready(function () {

    // Function to update visible course count
    function updateCount() {
        let total = $(".course:visible").length;
        $("#count").text("Matched Courses: " + total);
    }

    // KEYUP → Real-time search
    $("#searchInput").keyup(function () {
        let text = $(this).val().toLowerCase();

        $(".course").each(function () {

            let courseName = $(this).text().toLowerCase();

            // Match found → show + highlight
            if (courseName.includes(text) && text !== "") {
                $(this).show().addClass("highlight");
            }
            // If search box empty → reset
            else if (text === "") {
                $(this).show().removeClass("highlight");
            }
            // No match → hide
            else {
                $(this).hide().removeClass("highlight");
            }
        });

        updateCount();
    });

    $("#clearBtn").click(function () {
        $("#searchInput").val("");          
        $(".course").show().removeClass("highlight");  // Reset all courses
        updateCount();                       // Refresh count
    });

    updateCount();
});
