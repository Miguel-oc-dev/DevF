let plusBtn = document.querySelector("#plus-button");
let minusBtn = document.querySelector("#minus-button");
let div = document.querySelector(".square");

let toggleBtn = document.querySelectorAll(".square");
let img = document.querySelector("#image");

let login = document.querySelector("#login");

console.log(div);

const registerUsers = [
    {
        username: "thedestroyer",
        password: "123"
    },
    {
        username: "si",
        password: "pedro"
    }
]

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

const verifyLogin = (username, password) => {
    for(let i = 0; i < registerUsers.length; i++){
        if(username.value === registerUsers[i].username && password.value === registerUsers[i].password){
            return `Bienvenido ${username.value}`;
        }
    }
    return "El usuario o contraseña son incorrectos..."
}

const formHandler = (event) => {
    event.preventDefault();
    console.log(event.target);
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");
    let messageDiv = document.querySelector("#login-message");
    messageDiv.innerHTML = `<h1>${verifyLogin(username.value, password.value)}</h1>`
}

plusBtn.addEventListener("click",() => btnAdding());
minusBtn.addEventListener("click",() => btnSubstracting());

toggleBtn.addEventListener("click", () => toggleImage());

document.querySelector("#cat-image").addEventListener("mouseover", () => {
    console.log("El cursor esta encima"); 
    document.querySelector("#cat-image").style.transform = "scale(1.1)"
})

document.querySelector("#cat-image").addEventListener("mouseout", () => {
    console.log("El cursor salio"); 
    document.querySelector("#cat-image").style.transform = "scale(1.0)"
})

login.addEventListener("submit", (event) => formHandler(event));