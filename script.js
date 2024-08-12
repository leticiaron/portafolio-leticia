document.addEventListener("DOMContentLoaded", function () {
  const mensajeBienvenida = document.getElementById("mensaje-bienvenida");
  const botonCerrar = document.querySelector(".cerrar-btn");

  // cerrar el mensaje
  function closeMessage() {
    mensajeBienvenida.style.visibility = "hidden"; // Oculta el mensaje
  }

  // cerrar con la cruz
  botonCerrar.addEventListener("click", closeMessage);

  // cerrar al hacer clic fuera del contenido del mensaje
  mensajeBienvenida.addEventListener("click", function (event) {
    if (event.target === mensajeBienvenida) {
      closeMessage();
    }
  });
});

// boton para volver al centro
document.addEventListener("scroll", () => {
  const scrollBtn = document.getElementById("scrollBtn");
  if (window.scrollY > 100) {
    // Muestra el botón cuando el desplazamiento es mayor de 100px
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

document.getElementById("scrollBtn").addEventListener("click", () => {
  document.getElementById("centro").scrollIntoView({ behavior: "smooth" });
});
