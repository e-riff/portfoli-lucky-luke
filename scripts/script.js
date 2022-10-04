const burger = document.querySelector(".burger");
const sidebar = document.querySelector("sidebar");
const sidebarOnScreen = document.querySelector(".displaying");


//// Flags de l'affichage des menus ////
const isDisplayed = {
    barOnTop: false,
    barOnSide: false,
    about: false,
    pathway: false,
    skills: false,
};


//// Cette fonction affiche le menu latéral au clic sur le burger ////
burger.addEventListener('click', function () {
    sidebar.classList.toggle("displayingLeft");
    isDisplayed.barOnSide = !isDisplayed.barOnSide;
});

////cette fonction fait disparaitre le menu après un clic sur une partie////
sidebar.addEventListener('click', function () {
    if (window.innerWidth < 768) {  //mais seulement sur petit écran (sinon la barre reste affichée)
        sidebar.classList.toggle("displayingLeft");
        isDisplayed.barOnSide = !isDisplayed.barOnSide;
    }
});




function update() {
    if (window.innerWidth > 768) {
        //Verification de l'emplacement de la section about
        const about = document.querySelector('#About');
        const posAbout = about.getBoundingClientRect();

        //Verification de l'emplacement de la section pathway
        const pathway = document.querySelector('#pathway');
        const posPathway = pathway.getBoundingClientRect();

        //Verification de l'emplacement de la section skills
        const skills = document.querySelector('#skills');
        const posSkills = skills.getBoundingClientRect();

        //J'affiche le menu si j'arrive à la section about, avec une couleur associée
        if (posAbout.top < 100 && !isDisplayed.barOnTop || posAbout.top > 100 && isDisplayed.barOnTop) {
            sidebar.classList.toggle("displaying");
            sidebar.style.backgroundColor = "var(--secondary-color)";
            isDisplayed.barOnTop = !isDisplayed.barOnTop;
            isDisplayed.about = !isDisplayed.about;
        }

        else if (posAbout.bottom > 100 && isDisplayed.pathway && !isDisplayed.about) {
            sidebar.style.backgroundColor = "var(--secondary-color)";
            isDisplayed.about = true;
            isDisplayed.pathway = false;
        }

        else if ((posPathway.top < 100 && isDisplayed.about || posPathway.bottom > 100 && isDisplayed.skills) && !isDisplayed.pathway) {
            if (isDisplayed.skills) {
                isDisplayed.skills = false;
            }
            else if (isDisplayed.about) {
                isDisplayed.about = false;
            }
            ;
            isDisplayed.pathway = true;
            sidebar.style.backgroundColor = "green";
        }
        else if (posSkills.top < 100 && isDisplayed.pathway && !isDisplayed.skills) {
            isDisplayed.pathway = false;
            isDisplayed.skills = true;
            sidebar.style.backgroundColor = "#c35450";
        }
    }
}

document.addEventListener('scroll', update);
update();



//// Cette fonction pour le formulaire ////
const contactForm = document.querySelector(".contactform");
const name = document.querySelector("#name");

contactForm.onsubmit = function (event) {
    event.preventDefault();
    const newLine = document.createElement('p');
    contactForm.appendChild(newLine);
    newLine.innerHTML = `Bonjour ${name.value}, votre message a bien été envoyé! `;
    newLine.classList.add("reply");

    setTimeout(function () {
        newLine.remove();
    }, 3000);
};