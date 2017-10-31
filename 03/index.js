let inputs = document.querySelectorAll('.wrapper input');
console.log(inputs);

inputs.forEach(input=> input.addEventListener('change', handleChange));
inputs.forEach(input=> input.addEventListener('mousemove', handleChange));


function handleChange(){
    console.log(this.value)
}