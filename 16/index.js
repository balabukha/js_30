let mainTime = document.getElementsByClassName(".main-time");
let now = Date.now();

function startTimer(timeInSec){
    let start = Date.now();
    let end = start - timeInSec*1000;
    let timerTime = now - end
    // let timer = setInterval(()=>{
    //     console.log(start);
    // }, 1000);
    console.log(start);
    console.log(end);
    console.log(timerTime);

}

startTimer(2);