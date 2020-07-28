let scoreVal = 0
const scoreDiv = document.getElementById('score');

const increase = document.querySelector("#increase");
const reset = document.querySelector("#neutral");
const decrease = document.querySelector("#decrease");

const colourHanlder = () => {
    if(scoreVal >= 1)
        scoreDiv.style.color = "#34ee34";
    else if(scoreVal <= -1)
        scoreDiv.style.color = "#fa2020";
    else
        scoreDiv.style.color = "grey";
}

const increaser = () => {

    scoreVal += 1;
    scoreDiv.innerHTML = scoreVal;
    colourHanlder();

}

const neutraliser = () => {

    scoreVal = 0;
    scoreDiv.innerHTML = scoreVal;
    colourHanlder();
}

const decreaser = () => {

    scoreVal -= 1;
    scoreDiv.innerHTML = scoreVal;
    colourHanlder();
}

increase.onclick = increaser;
neutral.onclick = neutraliser;
decrease.onclick = decreaser;