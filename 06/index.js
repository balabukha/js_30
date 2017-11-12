let inputs = document.querySelectorAll('.task input');

inputs.forEach(input => {
    return input.addEventListener('click', handleClick);
});

let lastCheck;

function handleClick(e){
    let isChecked = false;


    if(e.path['0'].checked && e.shiftKey) {

    } else {
    }

    lastCheck = this;
}