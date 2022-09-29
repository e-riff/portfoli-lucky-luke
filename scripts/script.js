const burger = document.querySelector(".burger");
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
    if (!isDisplayed) {
        sidebar.style.display = "initial";
    }
    else {
        sidebar.style.display = "none";
    }
    isDisplayed = !isDisplayed;
});
