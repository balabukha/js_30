let input = document.querySelector('input');

let lis = [].slice.call(document.querySelectorAll("li"));
console.log(lis);

let n = lis.map((li) => li.innerText.split(" "));
console.log(n);


input.oninput = function (e){
    console.log(input.value);

};


// let A = 'Andrey';
//
// let ul_class = document.querySelector('.ul_class');
// console.log(ul_class);
// ul_class.innerHTML = `<li>${A}</li>`

