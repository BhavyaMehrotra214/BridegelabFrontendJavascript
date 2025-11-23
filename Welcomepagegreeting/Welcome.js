$(document).ready(function () {

    function setGreeting() {
        const hour = new Date().getHours();
        let message = "";

        if (hour < 12) message = "Good Morning!";
        else if (hour < 18) message = "Good Afternoon!";
        else message = "Good Evening!";

        $("#greeting").text(message);
    }

    setGreeting(); 

    $("#changeGreetingBtn").click(function () {
        $("#greeting").text("Believe in yourself. You can do great things!");
    });

    $("#toggleMsgBtn").click(function () {
        $("#welcomeMsg").toggle(400);  
    });

    $("#greeting").click(function () {
        alert("You clicked the greeting!");
    });

});