// Este script es opcional si deseas que el fondo cambie automáticamente
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  setInterval(() => {
    slides[currentIndex].style.opacity = "0";
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.opacity = "1";
  }, 5000); // Cambia cada 5 segundos
});