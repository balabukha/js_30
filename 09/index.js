let submitBtn = document.querySelector("input[type='submit']");
let inputToSubmit = document.querySelector("input[type='text']");
let ulListOfIngredients = document.querySelector(".wrapper-form-ingredientList");
let form = document.querySelector(".wrapper-form");
let inputCheckbox = document.querySelectorAll("input[type='checkbox']");


submitBtn.addEventListener('click', submit);
let ingredientsArray = JSON.parse(localStorage.getItem("data")) || [];

function submit(e){
    e.preventDefault();
    let newItem = {
        'name':inputToSubmit.value,
        'done': false
    };
    ingredientsArray.push(newItem);
    console.log(ingredientsArray);
    tasks(ingredientsArray);
    form.reset();
    // JSON.stringify(ingredientsArray);
    localStorage.setItem("data", JSON.stringify(ingredientsArray));
};

function tasks(items = []){
    ulListOfIngredients.innerHTML = items.map((item, id) => {
        return `
            <li><input type="checkbox" id="a${id}" data-key="${id}" ${item.done ? 'checked' : ''}>
            <label for="a${id}">${item.name}</label></li>
        `
    }).join('');
};

tasks(ingredientsArray);

ulListOfIngredients.addEventListener('click', toggle);

function toggle(e){
    if (e.target.type === "checkbox") {
        console.log(e.target);
        console.log(e.target.dataset.key);
        // e.target.dataset.key
        ingredientsArray[e.target.dataset.key].done = !ingredientsArray[e.target.dataset.key].done
        localStorage.setItem("data", JSON.stringify(ingredientsArray));

    }
}