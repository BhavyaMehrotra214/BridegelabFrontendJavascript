$(document).ready(function () {

    let subscribed = false;
    $("#subscribe").click(function () {
        subscribed = true;
        showMessage("You have subscribed to notifications!");
    });

    $("#unsubscribe").click(function () {
        subscribed = false;
        showMessage("You have unsubscribed.");
    });

    $("#addTopicBtn").click(function () {
        let newTopic = $("<div class='topic'>New Topic</div>");


        $("#topicList").append(newTopic);
    });
    $("#topicList").on("click", ".topic", function () {
        if (subscribed) {
            $(this).toggleClass("selected");
        } else {
            showMessage("Please subscribe first!");
        }
    });

    $(".topic").eq(1).off("click"); 

    function showMessage(msg) {
        $("#message").text(msg).slideDown(200).delay(1500).slideUp(200);
    }

});
