let holes = document.querySelectorAll('.hole');
let mole = document.querySelectorAll('.mole');
let button = document.querySelector('button');
let score = document.querySelector('span');
let scoreNumber = 0;
let interval;
let lastHole;

function randomTime(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

function randomHole(holes){
    let items = holes.length;
    let min = 0;
    let max = items - 1
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.abs(Math.round(rand));
    if(lastHole === rand){
        return randomHole(holes)
    }
    lastHole = rand; 
    return rand;
}

function fadeIn(){
    let currentMole= randomHole(holes);
    mole[currentMole].classList.add('up');

    var timerId = setTimeout(()=>{mole[currentMole].classList.remove('up')}, randomTime(500, 1000));
    score.textContent = scoreNumber;
}


button.addEventListener('click', ()=>{
    clearInterval(interval);

    scoreNumber = 0;
    score.textContent = 0;

    interval = setInterval(fadeIn, 900);

    setTimeout(function() {
    clearInterval(interval);}, 10000);

})


    mole.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        if(e.isTrusted){
            scoreNumber++;
            score.textContent = scoreNumber;
            e.target.classList.remove('up');
        }
    })
})