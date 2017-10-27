// let key = document.querySelectorAll(`.key[data-key="${e.keyCode}"`);
// console.log(key);

window.addEventListener('keydown', playing);


function playing(e){
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    let sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(key);
    console.log(sound);
    if (!sound) return;
    sound.currentTime=0;
    sound.play();
}