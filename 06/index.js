let inputs = document.querySelectorAll('.task input');

inputs.forEach(input => {
    return input.addEventListener('click', handleClick);
});

let lastCheck;

function handleClick(e){
    let isChecked = false;


    if(e.path['0'].checked && e.shiftKey) {
        inputs.forEach( input => {
            console.log(input);
            if(input === this || input === lastCheck){
                isChecked = !isChecked;
                console.log('1');
            }

            if(isChecked) {
                input.checked = true;
            }
        })
    }

    lastCheck = this;
}