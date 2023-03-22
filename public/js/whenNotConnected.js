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