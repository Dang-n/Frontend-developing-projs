let numbers = document.getElementsByClassName('number');
let submit = document.getElementById('submit-button');

let ratingPage = document.getElementById('rating-page');
let thankYouPage = document.getElementById('thank-you-page');

let val;

function changeColor(e) {
    var target = e.target;
    val = target.innerHTML;
    for (let i = 0; i < 5; i++) {
        numbers.item(i).style.background = null;
        numbers.item(i).style.color = null;
    }

    target.style.background = 'hsl(25, 97%, 53%)';
    target.style.color = 'white';


    submit.addEventListener('click', switchScreen);
}

function switchScreen(e) {

    let p_val = document.getElementById('val');
    p_val.innerHTML = " " + val + " ";
    

    ratingPage.style.display = 'null';
    thankYouPage.style.display = 'flex';
    thankYouPage.style.zindex = '100';
}





for (let i = 0; i < 5; i++) {
    numbers.item(i).addEventListener('click', changeColor);
}

