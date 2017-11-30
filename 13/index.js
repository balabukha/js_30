let a = document.querySelectorAll('a');

let span = document.createElement('span');
span.classList.add('highlight');
document.body.appendChild(span);


a.forEach(a => a.addEventListener('mouseenter', mouseMoving));

function mouseMoving(){
    let coords = this.getBoundingClientRect();
    span.style.width = `${coords.width}px`;
    span.style.height = `${coords.height}px`;
    var y = window.scrollY;
    span.style.transform = `translate(${coords.left+window.scrollX}px, ${coords.top+window.scrollY}px)`;
}

