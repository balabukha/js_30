const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
    .then(item => item.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch , 'gi');
        return place.city.match(regex) || place.state.match(regex)
    })
}

let input = document.querySelector('input');
let ul_class = document.querySelector('.ul_class');


input.addEventListener('keyup', displayMatches);
input.addEventListener('change', displayMatches);

function displayMatches(){
    let matchArr = findMatches(this.value, cities);
    let html = matchArr.map(item => {
        let regex = new RegExp(this.value, 'gi');
        const cityName = item.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = item.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `<li>${cityName}, ${stateName}</li>`
    }).join('');
    ul_class.innerHTML = html;
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

