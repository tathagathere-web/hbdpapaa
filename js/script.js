// =========================
// CINEMATIC INTRO
// =========================

const intro = document.getElementById("intro");
const papaLogo = document.querySelector(".papa-logo");
const profileScreen = document.getElementById("profile-screen");
const introSound = document.getElementById("introSound");


// Start intro when the page is clicked
document.addEventListener("click", startIntro, { once: true });


function startIntro() {

    // Play the 8-second cinematic sound
    introSound.currentTime = 0;
    introSound.play().catch(() => {
        console.log("Audio needs user interaction.");
    });


    // -------------------------
    // 0 - 3 SECONDS
    // Build-up
    // -------------------------

    setTimeout(() => {

        papaLogo.style.transition =
            "opacity 1.2s ease, transform 1.2s ease";

        papaLogo.style.opacity = "1";
        papaLogo.style.transform = "scale(1)";

    }, 1800);


    // -------------------------
    // 3 SECONDS
    // IMPACT 💥
    // -------------------------

    setTimeout(() => {

        papaLogo.style.transform = "scale(1.12)";

        setTimeout(() => {
            papaLogo.style.transform = "scale(1)";
        }, 180);

    }, 3000);


    // -------------------------
    // 6.5 SECONDS
    // Fade PAPA away
    // -------------------------

    setTimeout(() => {

        papaLogo.style.transition =
            "opacity 1s ease, transform 1s ease";

        papaLogo.style.opacity = "0";
        papaLogo.style.transform = "scale(1.15)";

    }, 6500);


    // -------------------------
    // 8 SECONDS
    // WHO'S WATCHING?
    // -------------------------

    setTimeout(() => {

        intro.style.transition = "opacity 1s ease";
        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

            profileScreen.style.visibility = "visible";
            profileScreen.style.transition = "opacity 1s ease";
            profileScreen.style.opacity = "1";
            profileScreen.style.transform = "scale(1)";

        }, 1000);

    }, 8000);
}