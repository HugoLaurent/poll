const mainDiv           = document.querySelector('main');
const body              = document.querySelector('body');

const toggle            = document.querySelector('.dayNight');
const buttonNav         = document.querySelectorAll('a');
const hoverNav          = document.querySelectorAll('li');
const images            = document.querySelectorAll('img');
const articlesButtons     = document.querySelectorAll('.article-button');

const signUp            = document.querySelector('.sign');
const connectUp         = document.querySelector('.connect-button');
const formSignUp        = document.querySelector('.sign-up');
const formConnect       = document.querySelector('.connect');
const signUpFormClose   = document.querySelector('.to-close');
const connectFormClose  = document.querySelector('.to-close-connect');
const forms             = document.querySelectorAll('.form');

const createButton      = document.querySelector('.create-button');
const createForm        = document.querySelector('.create');
const createClose       = document.querySelector('.to-close-create');

const allShareButton    = document.querySelectorAll('.share-button');
const shareButton       = document.querySelector('.coming-soon');

const menuClose         = document.querySelector('.menu-close');
const menuBurger        = document.querySelector('.menu-image');
const insideMenu        = document.querySelector('.small-screen');






// FOR RANDOM BORDER ON EACH POLLS

function randomBorder (a, b, c) {
    const result =  Math.floor(Math.random() * (a - b + c )) + b;
    return result;
}


const articles = document.querySelectorAll("article");
articles.forEach(article => {
    article.style.borderTopLeftRadius       = `${randomBorder(255, 155, 1)}px ${randomBorder(50, 10, 1)}px`
    article.style.borderTopRightRadius      = `${randomBorder(50, 10, 1)}px ${randomBorder(255, 155, 1)}px`
    article.style.borderBottomLeftRadius    = ` ${randomBorder(255, 155, 1)}px ${randomBorder(50, 10, 1)}px`
    article.style.borderBottomRightRadius   = `${randomBorder(50, 10, 1)}px ${randomBorder(255, 155, 1)}px`
});

// FOR EVERY CHECKBOX TO BE CHECKED ONE BY ONE

const checkboxes = document.querySelectorAll('input');

// Ajoutez un écouteur d'événement à chaque case à cocher
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
    // Si la case est cochée, décochez toutes les autres cases
    if (checkbox.checked) {
        checkboxes.forEach((otherCheckbox) => {
        if (otherCheckbox !== checkbox) {
            otherCheckbox.checked = false;
        }
        });
    }
    });
});

// DAY OR NIGHT 

toggle.addEventListener('click', () => {
    body.classList.toggle('dark-body')
    insideMenu.classList.toggle('dark-article')
    articles.forEach((article) => {
        article.classList.toggle('dark-article')
    })
    articlesButtons.forEach((button) => {
        button.classList.toggle('dark-a')
    })
    buttonNav.forEach((button) => {
        button.classList.toggle('dark-a')
    })
    hoverNav.forEach((hover) => {
        hover.classList.toggle('dark-hover')
    })
    images.forEach((image) => {
        image.classList.toggle('dark-img')
    })

    forms.forEach((form) => {
        form.classList.toggle('dark-section')
    })
    
});

function popUp(a, b) {
    a.addEventListener('click', () => {
        b.classList.toggle('form__pop-up')
    })
};

// OPEN AND CLOSE SIGN UP PAGE
popUp(signUp, formSignUp)
popUp(signUpFormClose, formSignUp)

// OPEN AND CLOSE CONNECT PAGE
popUp(connectUp, formConnect)
popUp(connectFormClose, formConnect)

// OPEN AND CLOSE CREATE PAGE
popUp(createButton, createForm)
popUp(createClose, createForm)

// signUp.addEventListener('click', () => {
//     formSignUp.classList.toggle('form__pop-up')
// })

// signUpFormClose.addEventListener('click', () => {
//     formSignUp.classList.toggle('form__pop-up')
// })

// connectUp.addEventListener('click', () => {
//     formConnect.classList.toggle('form__pop-up')
// })

// connectFormClose.addEventListener('click', () => {
//     formConnect.classList.toggle('form__pop-up')
// })

// createButton.addEventListener('click', () => {
//     createForm.classList.toggle('form__pop-up')
// })

// createClose.addEventListener('click', () => {
//     createForm.classList.toggle('form__pop-up')
// })

menuBurger.addEventListener('click', () => {
    insideMenu.style.display = 'block'
})

menuClose.addEventListener('click', () => {
    insideMenu.style.display = 'none'
})

