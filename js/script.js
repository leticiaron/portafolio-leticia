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
