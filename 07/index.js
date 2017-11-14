
document.addEventListener('keydown', clicking);
let arr = [];
let magicWord = 'yahoo';

function clicking(e){
    arr.push(e.key);
    let newArr = arr.slice(-magicWord.length)
    if (newArr.join('').includes(magicWord)) {
        cornify_add();
    }


};