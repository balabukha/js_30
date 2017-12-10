let li = document.querySelectorAll('nav > ul > li');
console.log(li);

li.forEach(item => item.addEventListener('mouseenter', mouseenterEvent));
li.forEach(item => item.addEventListener('mouseleave', mouseleaveEvent));


function mouseenterEvent(e){
    console.log(this);
};


function mouseleaveEvent(e){
    console.log(this);
};