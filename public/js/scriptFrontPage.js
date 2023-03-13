const mainDiv = document.querySelector('main');
const body = document.querySelector('body');
const toggle = document.querySelector('.dayNight');
const buttonNav = document.querySelectorAll('a')
const hoverNav = document.querySelectorAll('li')
const images = document.querySelectorAll('img')
const signUp = document.querySelector('.sign')
const signUpForm = document.querySelector('.sign-up')
const signUpFormClose = document.querySelector('.to-close')

// FOR RANDOM BORDER ON EACH POLLS

function randomBorder (a, b, c) {
    const result =  Math.floor(Math.random() * (a - b + c )) + b;
    return result;
}


const articles = document.querySelectorAll("article");
articles.forEach(article => {
    article.style.borderTopLeftRadius = `${randomBorder(255, 155, 1)}px ${randomBorder(50, 10, 1)}px`
    article.style.borderTopRightRadius = `${randomBorder(50, 10, 1)}px ${randomBorder(255, 155, 1)}px`
    article.style.borderBottomLeftRadius = ` ${randomBorder(255, 155, 1)}px ${randomBorder(50, 10, 1)}px`
    article.style.borderBottomRightRadius = `${randomBorder(50, 10, 1)}px ${randomBorder(255, 155, 1)}px`
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
    articles.forEach((article) => {
        article.classList.toggle('dark-article')
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
});

signUp.addEventListener('click', () => {
    signUpForm.classList.toggle('sign-up__pop-up')
})

signUpFormClose.addEventListener('click', () => {
    signUpForm.classList.toggle('sign-up__pop-up')
})
