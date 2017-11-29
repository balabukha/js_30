const videos = [...document.querySelectorAll('li')];
const sec = videos.map(item => item.dataset.time)
    .map(item => {
        const [min, sec] = item.split(':').map(item => +item);
        const A = [min*60, sec].map(item => console.log(item));
        return A;
            // .map(item => console.log(item))
            // .map(item=>item.reduce((total, newSec) => total+newSec))
            ;
    });
let sum = sec.reduce((total, newSec) => total+newSec);
console.log(sec);
console.log(sum);