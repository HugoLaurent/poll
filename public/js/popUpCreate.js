const button = document.querySelector('.create-button');


button.addEventListener('click', () => {
    if (!guest) {
        button.style.backgoundColor = 'red';
    }
})