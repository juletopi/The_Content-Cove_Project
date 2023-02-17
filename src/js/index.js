const trailerButton = document.querySelector(".button-trailer");
const closeModalButton = document.querySelector(".close-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const videoLink = video.src;

const arrowContainer = document.querySelector(".arrow-container");

function alternateModal(){
    modal.classList.toggle("open");
}

trailerButton.addEventListener("click", () => {
    alternateModal();
    video.setAttribute("src", videoLink);
});

closeModalButton.addEventListener("click", () => {
    alternateModal();
    video.setAttribute("src", "");
});

arrowContainer.addEventListener("click", function() {
  window.location.href = "next-page.html";
});
