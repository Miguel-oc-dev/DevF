// Obtenemos la cuenta seleccionada del almacenamiento local
var cuentaSeleccionada = JSON.parse(localStorage.getItem("cuentaSeleccionada"));

if (!cuentaSeleccionada) {
  // Si no hay cuenta seleccionada, redirigimos al login
  window.location.href = "login.html";
}

var cuentaNombre = document.getElementById("cuentaNombre");
var consultarSaldoBtn = document.getElementById("consultarSaldoBtn");
var ingresarMontoBtn = document.getElementById("ingresarMontoBtn");
var retirarMontoBtn = document.getElementById("retirarMontoBtn");
var operacionResultado = document.getElementById("operacionResultado");
var transaccionSection = document.getElementById("transaccionSection");
var montoInput = document.getElementById("montoInput");
var confirmarTransaccionBtn = document.getElementById("confirmarTransaccionBtn");

// Mostrar nombre de la cuenta
cuentaNombre.innerText = cuentaSeleccionada.nombre;

// Consultar saldo
consultarSaldoBtn.addEventListener("click", function() {
  operacionResultado.innerText = `Tu saldo actual es de $${cuentaSeleccionada.saldo}.`;
  transaccionSection.style.display = "none";
});

// Ingresar monto
ingresarMontoBtn.addEventListener("click", function() {
  transaccionSection.style.display = "block";
  confirmarTransaccionBtn.onclick = function() {
    var monto = parseFloat(montoInput.value);
    if (!isNaN(monto) && monto > 0) {
      if (cuentaSeleccionada.saldo + monto <= 990) {
        cuentaSeleccionada.saldo += monto;
        operacionResultado.innerText = `Has ingresado $${monto}. Tu nuevo saldo es de $${cuentaSeleccionada.saldo}.`;
        localStorage.setItem("cuentaSeleccionada", JSON.stringify(cuentaSeleccionada));
      } else {
        operacionResultado.innerText = "Error: No puedes tener más de $990 en tu cuenta.";
      }
    } else {
      operacionResultado.innerText = "Por favor ingresa un monto válido.";
    }
    transaccionSection.style.display = "none";
  };
});

// Retirar monto
retirarMontoBtn.addEventListener("click", function() {
  transaccionSection.style.display = "block";
  confirmarTransaccionBtn.onclick = function() {
    var monto = parseFloat(montoInput.value);
    if (!isNaN(monto) && monto > 0) {
      if (cuentaSeleccionada.saldo - monto >= 10) {
        cuentaSeleccionada.saldo -= monto;
        operacionResultado.innerText = `Has retirado $${monto}. Tu nuevo saldo es de $${cuentaSeleccionada.saldo}.`;
        localStorage.setItem("cuentaSeleccionada", JSON.stringify(cuentaSeleccionada));
      } else {
        operacionResultado.innerText = "Error: No puedes tener menos de $10 en tu cuenta.";
      }
    } else {
      operacionResultado.innerText = "Por favor ingresa un monto válido.";
    }
    transaccionSection.style.display = "none";
  };
});
