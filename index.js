

let score = 0;
var scoreDisplay = document.getElementById('score');
var holes = Array.from(document.getElementsByClassName('hole'))
const gameArea = document.getElementById('whack-a-mole')

console.log(scoreDisplay);
console.log("line 7", score);

function getRandom(){
    return Math.floor(Math.random()*(9));
};


setInterval(function(){
let randomHoleIndex = Math.floor(getRandom(0, holes.length))
holes[randomHoleIndex].classList.toggle('mole')
}, 1000);

gameArea.addEventListener('click', function(click){
if (click.target.matches('.mole')){
    score++
    scoreDisplay.innerHTML = score
    click.target.classList.toggle('mole')
}
});