let nav = document.querySelector('nav');
let topOfNav = nav.offsetTop;
let main = document.querySelector('main');
let computedStyle = getComputedStyle(main);
window.addEventListener('scroll', scrolling);
let currentMarginTopMain = +computedStyle.marginTop.replace('px','');

function scrolling(){
    if (window.scrollY >= topOfNav) {

        document.body.classList.add('fixedNav'); // fix to top
        main.style.marginTop = currentMarginTopMain + nav.offsetHeight + 'px';

} else {
    document.body.classList.remove('fixedNav');
    main.style.marginTop = currentMarginTopMain + 'px';
}

if(window.pageYOffset === 400) {
    // topOfNav.classList.remove('fixedNav');
    // main.style.marginTop = currentMarginTopMain + topOfNav.offsetHeight + 'px';
}
}