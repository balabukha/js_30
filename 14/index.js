let topNav = document.querySelector('nav');
let main = document.querySelector('main');
let computedStyle = getComputedStyle(main);
window.addEventListener('scroll', scrolling);
let currentMarginTopMain = +computedStyle.marginTop.replace('px','');

function scrolling(){
    console.log(topNav.offsetTop, window.pageYOffset,topNav.offsetHeight, +computedStyle.marginTop.replace('px',''));
    if (window.pageYOffset >= topNav.offsetTop) {
    topNav.classList.add('fixedNav');
    main.style.marginTop = currentMarginTopMain + topNav.offsetHeight + 'px';

};

if(window.pageYOffset <= 400) {
    topNav.classList.remove('fixedNav');
    main.style.marginTop = currentMarginTopMain - topNav.offsetHeight + 'px';
}
}