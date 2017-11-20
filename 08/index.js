function debounce(func, wait = 20, immediate = true){
    let timeout;
    return function(){
        let context = this;
        let args = arguments;
        let later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args)
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const allImg = document.querySelectorAll('img');
console.log(allImg);

function slide(e) {
    allImg.forEach(img => {

        // image half way
        let slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;

        // the bottom of the image
        const imageBottom = img.offsetTop + img.height;
        const isHalfShown = slideInAt > img.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if(isHalfShown && isNotScrolledPast) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', debounce(slide));


