let mainTime = document.querySelector(".main-time");
let buttons = document.querySelectorAll("[data-time]");
let timer;

let formDate = document.getElementsByName('formData');
let formInput = document.getElementsByName('inputData');

function startFunc(timeInSec){
    let nowOnce = Date.now();
    let end = nowOnce + timeInSec*1000;

    let sumTimeToFinish = Math.floor((end - nowOnce)/1000);
    mainTime.innerHTML = `${Math.floor(sumTimeToFinish/60)}:${sumTimeToFinish%60 <10 ? "0" + sumTimeToFinish%60 : sumTimeToFinish%60}`

    timer = setInterval( ()=>{
            let now = Date.now();
            let endTimeInSec = Math.floor((end - now)/1000 +1);
            mainTime.innerHTML = `${Math.floor(endTimeInSec/60)}:${endTimeInSec%60 <10 ? "0" + endTimeInSec%60 : endTimeInSec%60}`;

                if(now >= end) {
                    clearInterval(timer);
                }
    }, 1000);
};

buttons.forEach((item) => {
    item.addEventListener('click', ()=>{
            clearInterval(timer);
        startFunc(item.dataset.time)
    })
});

formDate[0].addEventListener('submit', (e)=>{
        e.preventDefault();
        let value = formInput[0].value;
        clearInterval(timer);
        startFunc(value*60);
        formDate[0].reset();
});
