$(document).ready(function() { //Makes sure this only runs after the html has loaded.
    $("#header").load("../../elements/header/header.html", function() { //Loading in the header html and giving it the header id
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
            console.log("DropDown virker");
        });

        document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            console.log("DropDown removed");
        }));
    });
    $("#footer").load("../../elements/footer/footer.html");
});