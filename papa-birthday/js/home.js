// =========================
// ELEMENTS
// =========================

const movieCard = document.querySelector(".movie-card[data-movie='1']");

const movieDetails = document.getElementById("movie-details");
const fullscreenView = document.getElementById("fullscreen-view");

const closeButton = document.querySelector(".close-button");
const fullscreenClose = document.querySelector(".fullscreen-close");

const detailsPlay = document.querySelector(".details-play");



// =========================
// OPEN MOVIE DETAILS
// =========================

movieCard.addEventListener("click", () => {

    movieDetails.style.display = "flex";

});


// =========================
// CLOSE MOVIE DETAILS
// =========================

closeButton.addEventListener("click", () => {

    movieDetails.style.display = "none";

});


// =========================
// PLAY MOVIE
// =========================

detailsPlay.addEventListener("click", () => {

    movieDetails.style.display = "none";

    fullscreenView.style.display = "block";

});


// =========================
// CLOSE FULLSCREEN
// =========================

fullscreenClose.addEventListener("click", () => {

    fullscreenView.style.display = "none";

});





// =========================
// ESC KEY
// =========================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        movieDetails.style.display = "none";

        fullscreenView.style.display = "none";

    }

});