const aboutBtn = document.getElementById("about-btn");
const servicesBtn = document.getElementById("services-btn");
const contactBtn = document.getElementById("contact-btn");
const infoBtn = document.getElementById("info-btn");

const aboutModal = document.getElementById("about-modal");
const servicesModal = document.getElementById("services-modal");
const contactModal = document.getElementById("contact-modal");
const infoModal = document.getElementById("info-modal");

const closeAbout = document.getElementById("close-about");
const closeServices = document.getElementById("close-services");
const closeContact = document.getElementById("close-contact");
const closeInfo = document.getElementById("close-info");

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

aboutBtn.addEventListener("click", function (e) {
  e.preventDefault();
  openModal(aboutModal);
});

servicesBtn.addEventListener("click", function (e) {
  e.preventDefault();
  openModal(servicesModal);
});

contactBtn.addEventListener("click", function (e) {
  e.preventDefault();
  openModal(contactModal);
});

infoBtn.addEventListener("click", function (e) {
  e.preventDefault();
  openModal(infoModal);
});

closeAbout.addEventListener("click", function () {
  closeModal(aboutModal);
});

closeServices.addEventListener("click", function () {
  closeModal(servicesModal);
});

closeContact.addEventListener("click", function () {
  closeModal(contactModal);
});

closeInfo.addEventListener("click", function () {
  closeModal(infoModal);
});

const serviceVideos = document.querySelectorAll(".service-video");

serviceVideos.forEach((video) => {
  video.addEventListener("play", () => {
    serviceVideos.forEach((v) => {
      if (v !== video) v.pause();
    });
  });
});

const videoSources = [
  "video/tu_video.mp4",
  "video/fondo2.mp4",
  "video/fondo3.mp4"
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
