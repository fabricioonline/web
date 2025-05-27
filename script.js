document.addEventListener("DOMContentLoaded", () => {
  // =======================
  // MODALES Y SECCIONES
  // =======================

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
  if (buttons.aboutBtn) buttons.aboutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(modals.aboutModal);
  });

  if (buttons.servicesBtn) buttons.servicesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(modals.servicesModal);
  });

  if (buttons.contactBtn) buttons.contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(modals.contactModal);
  });

  if (buttons.infoBtn) buttons.infoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(modals.infoModal);
  });

  if (buttons.misionBtn) buttons.misionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(modals.misionModal);
  });

  if (closeButtons.closeAbout) closeButtons.closeAbout.addEventListener("click", () => {
    closeModal(modals.aboutModal);
  });

  if (closeButtons.closeServices) closeButtons.closeServices.addEventListener("click", () => {
    closeModal(modals.servicesModal);
    stopAllVideos(modals.servicesModal);
  });

  if (closeButtons.closeContact) closeButtons.closeContact.addEventListener("click", () => {
    closeModal(modals.contactModal);
  });

  if (closeButtons.closeInfo) closeButtons.closeInfo.addEventListener("click", () => {
    closeModal(modals.infoModal);
  });

  if (closeButtons.closeMision) closeButtons.closeMision.addEventListener("click", () => {
    closeModal(modals.misionModal);
  });

  // =======================
  // VIDEO DE FONDO
  // =======================

  const videoSources = [
    "video/bg1.mp4",
    "video/bg2.mp4",
    "video/bg3.mp4",
  ];

  let currentVideo = Math.floor(Math.random() * videoSources.length);
  const backgroundVideo = document.getElementById("background-video");
  const prevBtn = document.getElementById("prev-video");
  const nextBtn = document.getElementById("next-video");

  function loadCurrentVideo() {
    backgroundVideo.pause();
    backgroundVideo.querySelector("source").src = videoSources[currentVideo];
    backgroundVideo.load();
    backgroundVideo.play();
  }

  function changeVideo(index) {
    currentVideo = (index + videoSources.length) % videoSources.length;
    loadCurrentVideo();
  }

  loadCurrentVideo();

  if (prevBtn) prevBtn.addEventListener("click", () => {
    changeVideo(currentVideo - 1);
  });

  if (nextBtn) nextBtn.addEventListener("click", () => {
    changeVideo(currentVideo + 1);
  });

  // =======================
  // DETENER VIDEOS EN MODAL
  // =======================

  function stopAllVideos(modal) {
    const iframes = modal.querySelectorAll("iframe");
    iframes.forEach((iframe) => {
      const iframeSrc = iframe.getAttribute("src");
      iframe.setAttribute("src", ""); // Detiene la reproducción
      iframe.setAttribute("src", iframeSrc); // Restaura la URL original
    });
  }

  // =======================
  // POPUP FLOTANTE
  // =======================

  const popup = document.getElementById("floating-popup");
  const closePopup = document.getElementById("popup-close");

  // Mostrar el pop-up después de 10 segundos
  setTimeout(() => {
    if (popup) popup.style.display = "block";
  }, 10000);

  if (closePopup) closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // =======================
  // MODAL REPRODUCTOR DE VIDEO PORTFOLIO
  // =======================
  const videoPlayerModal = document.getElementById('video-player-modal');
  const videoPlayerContainer = document.getElementById('video-player-container');
  const servicesModal = document.getElementById('services-modal');

  document.querySelector('.video-gallery')?.addEventListener('click', function(e) {
    const thumb = e.target.closest('.portfolio-thumbnail');
    if (thumb) {
      e.preventDefault();
      const videoSrc = thumb.getAttribute('data-video-src');
      openVideoPlayerModal(videoSrc);
    }
  });

  function openVideoPlayerModal(src) {
    let finalSrc = src;
    if (finalSrc.includes("?")) {
      if (!/(\?|&)autoplay=1/.test(finalSrc)) {
        finalSrc += "&autoplay=1";
      }
    } else {
      finalSrc += "?autoplay=1";
    }

    videoPlayerContainer.innerHTML = '<span id="close-video-player" class="close">&times;</span>';
    const iframe = document.createElement('iframe');
    iframe.src = finalSrc;
    iframe.allow = "autoplay; fullscreen; picture-in-picture";
    iframe.setAttribute('allowfullscreen', '');
    iframe.style.width = '100%';
    iframe.style.height = '400px';
    iframe.style.border = 'none';
    videoPlayerContainer.appendChild(iframe);

    videoPlayerModal.classList.add('show');
    videoPlayerModal.style.display = 'block';

    videoPlayerContainer.onclick = function(ev) {
      ev.stopPropagation();
    };

    document.getElementById('close-video-player').onclick = closeVideoModal;
  }

  function closeVideoModal() {
    videoPlayerModal.classList.remove('show');
    setTimeout(() => {
      videoPlayerModal.style.display = 'none';
      videoPlayerContainer.innerHTML = '';
      // openModal(servicesModal); // Si quieres reabrir el portfolio
    }, 400);
  }

  videoPlayerModal.addEventListener('click', (e) => {
    if (e.target === videoPlayerModal) {
      closeVideoModal();
    }
  });

 
});
  
  