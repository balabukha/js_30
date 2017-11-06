const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
console.log(endpoint);

const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

console.log( cities);

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch , 'gi')
        return place.city.match(regex) || place.state.match(regex)
    })
}

let input = document.querySelector('input');
let ul_class = document.querySelector('.ul_class');

console.log(input);


input.addEventListener('change', displayMatches);

function displayMatches(){
    this.value;
}

//
// let lis = [].slice.call(document.querySelectorAll("li"));
// console.log(lis);
//
// let n = lis.map((li) => li.innerText.split(" "));
// console.log(n);
//
//
// input.oninput = function (e){
//     console.log(input.value);
//
// };


// let A = 'Andrey';
//
// console.log(ul_class);
// ul_class.innerHTML = `<li>${A}</li>`

