let panels = document.querySelectorAll('.panel');

panels.forEach(item => item.addEventListener('click', handleToggleClassOpen));
panels.forEach(item => item.addEventListener('transitionend', handleToggleClassOpenActive));

function handleToggleClassOpen(){
    this.classList.toggle('open');
};

function handleToggleClassOpenActive(e){
    if (e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }

};

