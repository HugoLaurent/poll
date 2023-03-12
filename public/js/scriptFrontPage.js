const mainDiv = document.querySelector('main');

const pollType = 
`
<div class="poll">
    <h2>Titre du poll</h2>
    <p classname="author">Author</p>
</div>
<p>A question about the poll</p>
<section class="polls">
    <div class="wrapper-all-progress">
        <div class="progressbar-wrapper">
            <input type="checkbox" name="first_choice" id="first">
            <div title="first_choice" class="progressbar first_choice">
            </div>
        </div>
        <span>70%</span>
    </div>
    <div class="wrapper-all-progress">
        <div class="progressbar-wrapper">
            <input type="checkbox" name="second_choice" id="second">
            <div title="second_choice" class="progressbar second_choice">
            </div>
        </div>
        <span>30%</span>
    </div>
</section>
`

function addAPoll () {
    const newPoll = document.createElement('article')
    mainDiv.appendChild(newPoll).innerHTML = pollType
}

function randomBorder (a, b, c) {
    const result =  Math.floor(Math.random() * (a - b + c )) + b;
    return result;
}

document.addEventListener('DOMContentLoaded', () => {
    const articles = document.querySelectorAll("article");
    articles.forEach(article => {
        article.style.borderTopLeftRadius = `${randomBorder(255, 155, 1)}px ${randomBorder(50, 10, 1)}px`
        article.style.borderTopRightRadius = `${randomBorder(50, 10, 1)}px ${randomBorder(255, 155, 1)}px`
        article.style.borderBottomLeftRadius = ` ${randomBorder(255, 155, 1)}px ${randomBorder(50, 10, 1)}px`
        article.style.borderBottomRightRadius = `${randomBorder(50, 10, 1)}px ${randomBorder(255, 155, 1)}px`
    });
})

addAPoll()
addAPoll()
addAPoll()
addAPoll()

