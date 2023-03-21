// FOR RANDOM BORDER ON EACH POLLS
const articles = document.querySelectorAll(".poll-container");

function randomizeBorder (a, b, c)  {
    const result =  Math.floor(Math.random() * (a - b + c )) + b;
    return result;
};

articles.forEach(article => {
    article.style.borderTopLeftRadius       = `${randomizeBorder(255, 155, 1)}px ${randomizeBorder(50, 10, 1)}px`
    article.style.borderTopRightRadius      = `${randomizeBorder(50, 10, 1)}px ${randomizeBorder(255, 155, 1)}px`
    article.style.borderBottomLeftRadius    = `${randomizeBorder(255, 155, 1)}px ${randomizeBorder(50, 10, 1)}px`
    article.style.borderBottomRightRadius   = `${randomizeBorder(50, 10, 1)}px ${randomizeBorder(255, 155, 1)}px`
});

// FOR EVERY CHECKBOX TO BE CHECKED ONE BY ONE
const checkboxes = document.querySelectorAll('input');

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            checkboxes.forEach((otherCheckbox) => {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
            });
        }
        });
    });

// DARK THEME
const switchDarkMode  = document.querySelector('.dark-theme-switch');

function toDarkMode (a, b) {
    document.querySelectorAll(a).forEach((element) => {
        element.classList.toggle(b);
});
};

switchDarkMode.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark-body');
    const navbarLi = document.querySelectorAll('.navbar-button')
    navbarLi.forEach(element => {
        // Ajouter un gestionnaire d'événements pour le survol
        element.addEventListener('mouseover', () => {
            element.style.boxShadow = "0 0 0 4px white";
        });
        element.addEventListener('mouseout', () => {
            element.style.boxShadow = "";
        });
    });
    toDarkMode('a', 'dark-a');
    toDarkMode('article', 'dark-article');
    toDarkMode('.article-button', 'dark-button');
    toDarkMode('.share-button', 'dark-img');
    toDarkMode('.form-container','dark-article')
});

// POP UP PAGE
function popUp(a, b) {
    a.addEventListener('click', () => {
        b.classList.toggle('form-container_show')
    })
};
// OPEN AND CLOSE SIGN UP PAGE
popUp(document.querySelector('.navbar-sign'), document.querySelector('.signup-container'));
popUp(document.querySelector('.signup-close') ,document.querySelector('.signup-container'));
// OPEN AND CLOSE CONNECT PAGE
popUp(document.querySelector('.navbar-connect'), document.querySelector('.connect-container'));
popUp(document.querySelector('.connect-close') ,document.querySelector('.connect-container'));
// OPEN AND CLOSE CREATE PAGE
popUp(document.querySelector('.footer-create-button'), document.querySelector('.create-container'));
popUp(document.querySelector('.create-close') ,document.querySelector('.create-container'));
