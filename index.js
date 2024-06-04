let input = document.querySelector("input");
let display = document.querySelector("span");
let button = document.querySelector("button");

button.addEventListener("click", () => addUp());

function addUp() {
    let array = input.value.split(',').map(Number); 
    let sum = array.reduce((total, num) => total + num, 0); 
    display.textContent = sum; 
}

