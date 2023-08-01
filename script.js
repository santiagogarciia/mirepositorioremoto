function showAlert() {
    alert("¡Sos gay!");
}

const form = document.getElementById('myForm');

addEventListener("submit", function(event) {
  event.preventDefault(); //para evitar que el formulario se envíe de la manera predeterminada, lo que permite realizar la validación antes de enviar los datos.
  validateForm();
})

//Aquí la función “validateEmail()” indica que el mail contenga un “@” y un “.” para ser válido.
function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }

  document.querySelector("button.button-menu-toggle")
  .addEventListener("click", function() {
         document.querySelector(".nav-links").
                    classList.toggle("nav-links-responsive")})