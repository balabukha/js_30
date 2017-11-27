let hero = document.querySelector('h1');
let wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('mousemove', moving);

function moving(e){
    const hundred = 100; //100px

    let {offsetWidth: fullX, offsetHeight: fullY} = wrapper;
    let {offsetX: moveX, offsetY: moveY} = e;
    // console.log(moveX, moveY);
    // console.log(this, e.target, e.target.offsetLeft, e.target.offsetTop);
    console.log(fullX, fullY);

    if (this !== e.target) {
        moveX = moveX + e.target.offsetLeft;
        moveY = moveY + e.target.offsetTop;
    }

    const x = Math.round((moveX/fullX * hundred) - (hundred / 2));
    const y = Math.round((moveY/fullY * hundred) - (hundred / 2));

    hero.style.textShadow = `
    ${x}px ${y}px 0 rgba(0,0,0,0.35)
    `;
    // console.log(moveX, moveY);

}

