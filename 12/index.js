const videos = [...document.querySelectorAll('li')];
const sec = videos.map(item => item.dataset.time)
    .map(item => {
        const [min, sec] = item.split(':').map(item => +item);
        return (min*60 + sec);
    });


let sum = sec.reduce((total, newSec) => total+newSec);
const hours = Math.floor(sum/3600);
const mins = Math.floor((sum - hours * 3600)/60);
const secs = (sum - hours * 3600 - mins * 60);

let time = `Total time is: ${hours}:${mins}:${secs}`;

let sumTime = document.querySelector('#sumTime').innerHTML= time;
