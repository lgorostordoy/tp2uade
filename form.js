function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var formMessage = document.getElementById("formMessage");
    var formError = document.getElementById("formError");

    // Validar que los campos no estén vacíos
    if (name === "" || email === "") {
        formError.style.display = "block";
        formError.textContent = "Por favor, completa todos los campos correctamente.";
        formMessage.style.display = "none";
        return false;
    }

    // Validar formato del correo electrónico
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        formError.textContent = "Por favor ingresa un correo electrónico válido.";
        formError.style.display = "block";
        formMessage.style.display = "none";
        return false;
    }

    // Si todo está bien
    formMessage.style.display = "block";
    formError.style.display = "none";
    document.getElementById("subscriptionForm").reset();  // Limpiar el formulario
    return false; 
}
