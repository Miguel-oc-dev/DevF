// Arreglo con la información de los usuarios
var cuentas = [
    { nombre: "Mali", saldo: 200, password: "1234"},
    { nombre: "Gera", saldo: 290, password: "5678"},
    { nombre: "Maui", saldo: 67, password: "91011"}
];

var loginBtn = document.getElementById("loginBtn");
var usernameInput = document.getElementById("usernameInput");
var passwordInput = document.getElementById("passwordInput");
var loginErr = document.getElementById("loginErr");

loginBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var usuario = usernameInput.value.trim();
    var password = passwordInput.value.trim();

    var cuentaSeleccionada = cuentas.find(cuenta => cuenta.nombre.toLowerCase() === usuario.toLowerCase());

    if (cuentaSeleccionada) {
        if (password === cuentaSeleccionada.password) {
            localStorage.setItem("cuentaSeleccionada", JSON.stringify(cuentaSeleccionada));
            window.location.href = "index.html";
        } else {
            loginErr.innerText = "Contraseña incorrecta. Inténtalo de nuevo.";
        }
    } else {
        loginErr.innerText = "Usuario no encontrado. Inténtalo de nuevo.";
    }
});