document.getElementByld("registro").addEventListener("submit", function(event) {
event.preventDefault();
const nombre = document.getElementByld ("nombre").value;
const email = document.getElementByld ("email").value;
const password = document.getElementByld ("password").value;
console.log("Nombre:", nombre);
console.log("Correo Electronico:", email);
console.log("Contraseña:", password);

})