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

  // Gestión de los videos de Streamable (service-video)
  const videoIframes = document.querySelectorAll(".service-video");

  if (videoIframes.length > 0) {
    videoIframes.forEach((iframe) => {
      iframe.addEventListener("click", () => {
        // Detener todos los demás videos (recargar iframes)
        videoIframes.forEach((otherIframe) => {
          if (otherIframe !== iframe) {
            const src = otherIframe.src; // Guarda la URL original del iframe
            otherIframe.src = ""; // Vacía el src para detener el video
            otherIframe.src = src; // Restaura el src para recargar el iframe
          }
        });
      });
    });
  }

  // Cerrar la modal de Portfolio y apagar todos los videos
  const closePortfolioButton = document.getElementById("close-services");
  closePortfolioButton.addEventListener("click", () => {
    closeModal(modals.servicesModal);

    // Apagar todos los videos de Streamable dentro de la modal
    videoIframes.forEach((iframe) => {
      const src = iframe.src; // Guarda la URL original del iframe
      iframe.src = ""; // Vacía el src para detener el video
      iframe.src = src; // Restaura el src para recargar el iframe
    });
  });
});





// Código existente
document.addEventListener("DOMContentLoaded", () => {
  // Gestión de los botones y modales
  const buttons = {
    aboutBtn: document.getElementById("about-btn"),
    servicesBtn: document.getElementById("services-btn"),
    contactBtn: document.getElementById("contact-btn"),
    infoBtn: document.getElementById("info-btn"),
  };

  const modals = {
    aboutModal: document.getElementById("about-modal"),
    servicesModal: document.getElementById("services-modal"),
    contactModal: document.getElementById("contact-modal"),
    infoModal: document.getElementById("info-modal"),
  };

  // Otras funcionalidades...
});

// Código para el pop-up flotante
document.addEventListener("DOMContentLoaded", () => {
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



// Obtener todas las ventanas modales
const modals = document.querySelectorAll('.modal');

// Para cada ventana modal
modals.forEach(modal => {
  // Obtener el botón de cierre de la ventana modal
  const closeButton = modal.querySelector('.close');

  // Si no existe el botón de cierre, salir
  if (!closeButton) return;

  // Agregar un evento de clic al botón de cierre
  closeButton.addEventListener('click', () => {
    // Obtener todos los iframes dentro de la ventana modal
    const iframes = modal.querySelectorAll('iframe');

    // Detener cada iframe
    iframes.forEach(iframe => {
      const iframeSrc = iframe.getAttribute('src');
      iframe.setAttribute('src', ''); // Detiene la reproducción
      iframe.setAttribute('src', iframeSrc); // Restaura la URL original
    });

    // Obtener todos los audios dentro de la ventana modal
    const audios = modal.querySelectorAll('audio');

    // Detener cada audio
    audios.forEach(audio => {
      audio.pause();
      audio.currentTime = 0; // Reiniciar el audio al principio
    });
  });
});