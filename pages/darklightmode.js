$(".change").on("click", function () {
    if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $(".change").html("<img src='moon.png' alt='OFF' style='width: 20px;'>");
    } else {
        $("body").addClass("dark");
        $(".change").html("<img src='sun.png' alt='ON' style='width: 20px;'>");
    }
});
