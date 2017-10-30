let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");


function updating(){
    let now = new Date();
    let secondsNew = now.getSeconds()/60 * 360;
        seconds.style.transform = `rotate(${secondsNew})deg`;
}

setInterval(updating, 1000);
