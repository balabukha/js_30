let key = document.querySelectorAll('.key');
console.log(key);

key.forEach(item => item.addEventListener('transitionend', stopPlaying));



window.addEventListener('keydown', playing);


function playing(e){
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    let sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(key);
    console.log(sound);
    if (!sound) return;
    sound.currentTime=0;
    sound.play();
    key.classList.add("playing");

};


function stopPlaying(e){

    if (e.propertyName !== 'transform') return;
    // console.log('e', e);
    console.log('this', this);
    this.classList.remove("playing");
}
