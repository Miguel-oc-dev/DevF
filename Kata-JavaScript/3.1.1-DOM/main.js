let plusBtn = document.querySelector("#plus-button");
let minusBtn = document.querySelector("#minus-button");
let div = document.querySelector(".square");

console.log(btn);
console.log(div);

const btnHandler = function() {
    let text = prompt("Dame una frase...");
    let title = document.querySelector("#main-title");
    title.innerHTML = text;
}

let counter = 0;

const btnAdding = () => {
    counter ++;
    console.log(counter);
    
}

const btnSubstracting = () => {
    counter --;
    console.log(counter);
    
}

const toggleImage = () => {
    if(img.style.display === "block"){
        img.style.display = "none";
        toggleBtn.innerHTML = "Mostrar imagen";
    } else {
        img.style.display = "block";
        toggleBtn.innerHTML = "Ocultar imagen";
    }
}

plusBtn.addEventListener("click",() => btnAdding());
minusBtn.addEventListener("click",() => btnSubstracting());

toggleBtn.addEventListener("click", () => toggleImage());