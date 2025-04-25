document.addEventListener("DOMContentLoaded", () => {
  // Gestión de los botones y modales
  const buttons = {
    aboutBtn: document.getElementById("about-btn"),
    servicesBtn: document.getElementById("services-btn"),
    contactBtn: document.getElementById("contact-btn"),
    infoBtn: document.getElementById("info-btn"),
    misionBtn: document.getElementById("mision-btn"),
  };

  const modals = {
    aboutModal: document.getElementById("about-modal"),
    servicesModal: document.getElementById("services-modal"),
    contactModal: document.getElementById("contact-modal"),
    infoModal: document.getElementById("info-modal"),
    misionModal: document.getElementById("mision-modal"),
  };

  const closeButtons = {
    closeAbout: document.getElementById("close-about"),
    closeServices: document.getElementById("close-services"),
    closeContact: document.getElementById("close-contact"),
    closeInfo: document.getElementById("close-info"),
    closeMision: document.getElementById("close-mision"),
  };

  function openModal(modal) {
    modal.classList.add("show");
    modal.style.display = "block";
  }

  function closeModal(modal) {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 400);
  }

  // Abrir las modales al hacer clic en los botones
  buttons.aboutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(modals.aboutModal);
  });

  buttons.servicesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(modals.servicesModal);
  });

  buttons.contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(modals.contactModal);
  });

  buttons.infoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(modals.infoModal);
  });

  buttons.misionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(modals.misionModal);
  });

  // Cerrar las modales al hacer clic en los botones de cerrar
  closeButtons.closeAbout.addEventListener("click", () => {
    closeModal(modals.aboutModal);
  });

  closeButtons.closeServices.addEventListener("click", () => {
    closeModal(modals.servicesModal);
    stopAllVideos(modals.servicesModal); // Detener videos al cerrar la modal de Portfolio
  });

  closeButtons.closeContact.addEventListener("click", () => {
    closeModal(modals.contactModal);
  });

  closeButtons.closeInfo.addEventListener("click", () => {
    closeModal(modals.infoModal);
  });

  closeButtons.closeMision.addEventListener("click", () => {
    closeModal(modals.misionModal);
  });

  // Gestión de los videos de fondo
  const videoSources = [
    "video/bg1.mp4",
    "video/bg2.mp4",
    "video/bg3.mp4",
  ];

  let currentVideo = 0;
  const backgroundVideo = document.getElementById("background-video");
  const prevBtn = document.getElementById("prev-video");
  const nextBtn = document.getElementById("next-video");

  function changeVideo(index) {
    currentVideo = (index + videoSources.length) % videoSources.length;
    backgroundVideo.pause();
    backgroundVideo.querySelector("source").src = videoSources[currentVideo];
    backgroundVideo.load();
    backgroundVideo.play();
  }

  prevBtn.addEventListener("click", () => {
    changeVideo(currentVideo - 1);
  });

  nextBtn.addEventListener("click", () => {
    changeVideo(currentVideo + 1);
  });

  // Función para detener todos los videos dentro de una modal
  function stopAllVideos(modal) {
    const iframes = modal.querySelectorAll("iframe");
    iframes.forEach((iframe) => {
      const iframeSrc = iframe.getAttribute("src");
      iframe.setAttribute("src", ""); // Detiene la reproducción
      iframe.setAttribute("src", iframeSrc); // Restaura la URL original
    });
  }

  // Código para el pop-up flotante
  const popup = document.getElementById("floating-popup");
  const closePopup = document.getElementById("popup-close");

  // Mostrar el pop-up después de 10 segundos
  setTimeout(() => {
    popup.style.display = "block";
  }, 10000); // 10 segundos

  // Cerrar el pop-up al hacer clic en la cruz
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Código para mostrar el popup después de 10 segundos solo en la página de inicio
  const popup = document.getElementById("floating-popup");
  const closePopup = document.getElementById("popup-close");

  if (document.body.classList.contains("home")) {
    // Mostrar el pop-up después de 10 segundos
    setTimeout(() => {
      popup.style.display = "block";
    }, 10000); // 10 segundos
  }

  // Cerrar el pop-up al hacer clic en la cruz
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });
});