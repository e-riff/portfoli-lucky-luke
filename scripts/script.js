const burger = document.querySelector(".burger");
const sidebar = document.querySelector("sidebar");



let isDisplayed = false;

//// Cette fonction affiche le menu latéral au clic sur le burger ////
burger.addEventListener('click', function () {
    if (!isDisplayed) {
        sidebar.style.display = "initial";
    }
    else {
        sidebar.style.display = "none";
    }
    isDisplayed = !isDisplayed;
});

////cette fonction fait disparaitre le menu après un clic sur une partie///
sidebar.addEventListener('click', function () {
    if (window.innerWidth < 768) {  //mais seulement sur petit écran (sinon la barre reste affichée)
        if (!isDisplayed) {
            sidebar.style.display = "initial";
        }
        else {
            sidebar.style.display = "none";
        }
        isDisplayed = !isDisplayed;
    }
});

let flag = false;

window.onscroll = () => {
    if (scrollY > 600 && flag == false) {
        sidebar.classList.toggle("hidden");
        //sidebar.style.display = "inline.flex"
        flag = true;
    }
    else if (scrollY < 600 && flag == true) {
        // sidebar.style.display = "none"
        sidebar.classList.toggle("hidden");
        flag = !flag;
    }
};


/*
///Dealing with scroll bar///

if (windows.scrollY <= 200) {
    sidebar.style.display = "none";
}
else {
    nav.className = sidebar.style.display = "initial";
}*/
