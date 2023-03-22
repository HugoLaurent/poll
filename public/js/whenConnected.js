// POP UP PAGE
function popUp(a, b) {
    a.addEventListener('click', () => {
        b.classList.toggle('form-container_show')
    })
};

// OPEN AND CLOSE CREATE PAGE
popUp(document.querySelector('.footer-create-button'), document.querySelector('.create-container'));
popUp(document.querySelector('.create-close') ,document.querySelector('.create-container'));