let a = document.querySelectorAll('a');

let span = document.createElement('span');
span.classList.add('highlight');
document.body.appendChild(span);


a.forEach(a => a.addEventListener('mouseenter', mouseMoving));

function mouseMoving(){
    let coords = this.getBoundingClientRect();
    console.log(coords.left)
}

