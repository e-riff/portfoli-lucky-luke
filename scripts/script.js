const burger = document.querySelector(".burger");
const sidebar = document.querySelector("sidebar");


//// Flags de l'affichage des menus ////
let isDisplayedOnTop = false;
let isDisplayedOnSide = false;



//// Cette fonction affiche le menu latéral au clic sur le burger ////
burger.addEventListener('click', function () {
    sidebar.classList.toggle("displayingLeft");
    isDisplayedOnSide = !isDisplayedOnSide;
});

////cette fonction fait disparaitre le menu après un clic sur une partie////
sidebar.addEventListener('click', function () {
    if (window.innerWidth < 768) {  //mais seulement sur petit écran (sinon la barre reste affichée)
        sidebar.classList.toggle("displayingLeft");
        isDisplayedOnSide = !isDisplayedOnSide;
    }
});



////cette fonction fait apparaitre le menu du haut après le scroll de la première partie...////
window.onscroll = () => {
    if (window.innerWidth > 768) {  //...mais seulement sur version desktop
        if ((scrollY > 600 && !isDisplayedOnTop) || (scrollY < 600 && isDisplayedOnTop)) {
            sidebar.classList.toggle("displaying");
            isDisplayedOnTop = !isDisplayedOnTop;
        }
    }
};



//// Cette fonction pour le formulaire ////
// const message = document.querySelector("#submitMessage");
const contactForm = document.querySelector(".contactform");
const name = document.querySelector("#name");

contactForm.onsubmit = function (event) {
    event.preventDefault();
    const newLine = document.createElement('p');
    contactForm.appendChild(newLine);
    newLine.innerHTML = `Bonjour ${name.value}, votre message a bien été envoyé ! `;
    newLine.classList.add("reply");

    setTimeout(function () {
        newLine.remove();
    }, 3000);
};