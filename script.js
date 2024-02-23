function subscribe() {
    // Obtener el valor del correo electrónico
    var emailInput = document.getElementById("email");
    var email = emailInput.value;
    var confirmedEmailSpan = document.getElementById("confirmed-email");
    confirmedEmailSpan.textContent = email;
    // Expresión regular para validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Verificar si el correo electrónico cumple con el formato esperado
    if (emailRegex.test(email)) {
        // El correo electrónico es válido
        // Ocultar el div con la clase "izquierda"
        document.querySelector(".izquierda").style.display = "none";
        // Ocultar las imágenes
        document.querySelector(".img-mobile").style.display = "none";
        document.querySelector(".img-desktop").style.display = "none";
        // Mostrar el div con la clase "parte2"
        document.querySelector(".parte2").style.display = "block";
        // Mostrar el mensaje de éxito
        document.querySelector(".success-message").classList.remove("hidden");
        // Resetear el color de fondo del input
        emailInput.style.backgroundColor = ""; // volverá a su color original
    } else {
        // El correo electrónico no es válido
        alert("Por favor, introduce un correo electrónico válido.");
        // Cambiar el color de fondo del input a un rojo claro
        emailInput.style.backgroundColor = "#FFE8E6";
        emailInput.style.borderWidth = "1px";
        emailInput.style.borderColor = "#FFD8D5";
    }
}

function dismissMessage() {
    // Ocultar el mensaje de éxito
    document.querySelector(".success-message").classList.add("hidden");
    // Obtener el ancho de la ventana del navegador
    var windowWidth = window.innerWidth;
    // Obtener referencias a las imágenes
    var imgMobile = document.querySelector(".img-mobile");
    var imgDesktop = document.querySelector(".img-desktop");
    
    if (windowWidth <= 768) {
        // Si la ventana es pequeña, mostrar la imagen móvil y ocultar la imagen de escritorio
        imgMobile.style.display = "block";
        imgDesktop.style.display = "none";
    } else {
        // Si la ventana es grande, ocultar la imagen móvil y mostrar la imagen de escritorio
        imgMobile.style.display = "none";
        imgDesktop.style.display = "block";
    }

    // Ocultar el div ".parte2"
    document.querySelector(".parte2").style.display = "none";
    // Mostrar el div anterior (en este caso, ".izquierda")
    document.querySelector(".izquierda").style.display = "block";
}
