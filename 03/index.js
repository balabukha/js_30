let inputs = document.querySelectorAll('.wrapper input');
console.log(inputs);

inputs.forEach(input=> input.addEventListener('change', handleChange));
inputs.forEach(input=> input.addEventListener('mousedown', handleChange));


function handleChange(){
    console.log(this.dataset.sizing);

    console.log(this.value);

    let sizing = this.dataset.sizing || '';
    document.body.style.setProperty(`--${this.name}`, `${this.value}${sizing}`);
}