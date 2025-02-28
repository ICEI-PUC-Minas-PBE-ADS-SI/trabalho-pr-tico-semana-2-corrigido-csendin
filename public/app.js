document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const menuBurger = document.querySelector(".menu-burger");
    const links = document.querySelectorAll(".menu-burger a");

    burger.addEventListener("change", () => {
        menuBurger.classList.toggle("flex", burger.checked);
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            menuBurger.classList.remove("flex");
            burger.checked = false;
        });
    });
});
