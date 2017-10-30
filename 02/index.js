let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");


function updating(){
    let now = new Date();
        seconds.style.transform = `rotate(${now.getSeconds()/60 * 360+90}deg)`;
        minutes.style.transform = `rotate(${now.getMinutes()/60 * 360+90}deg)`;
        hours.style.transform = `rotate(${now.getHours()/12 * 360+90}deg)`;
}

setInterval(updating, 1000);
