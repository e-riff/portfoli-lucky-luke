const burger = document.querySelector(".burger");
const topMenu = document.querySelector(".topMenu");
const sidebar = document.querySelector("sidebar");



let isDisplayed = false;


burger.addEventListener('click', function () {
    if (!isDisplayed) {
        sidebar.style.display = "initial";
    }
    else {
        sidebar.style.display = "none";
    }
    isDisplayed = !isDisplayed;
});

sidebar.addEventListener('click', function () {
    if (window.innerWidth < 768) {
        if (!isDisplayed) {
            sidebar.style.display = "initial";
        }
        else {
            sidebar.style.display = "none";
        }
        isDisplayed = !isDisplayed;
    }
});
