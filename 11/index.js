const bands = ['The plot in you', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
'A sklit Drive', 'Anywhere But Here', 'An Old dog'];

let sortedBands = bands.sort((a, b) => {
    if( searchFieldBand(a) > searchFieldBand(b) ) {
        return 1
    } else {return -1}
});

function searchFieldBand(bands){
    return bands.replace(/^(a |the |an )/i, '').trim()
}

let target = document.querySelector('ul').innerHTML = sortedBands.map(band => {
    return `<li>${band}</li>`
}).join('');


console.log(sortedBands);