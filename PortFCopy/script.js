document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();

    const pageLinkMap = {
        "homepage.html": "home-link",
        "project.html": "project-link",
        "interest.html": "interest-link",
        "socials.html": "socials-link"
    };

    const activeLinkId = pageLinkMap[currentPage];

    if (activeLinkId) {
        document.getElementById(activeLinkId).classList.add("active");
    }
});

document.querySelectorAll(".box").forEach((box) => {
    let video = box.querySelector("video");
    let audioBtn = box.querySelector(".audio-btn");
    let volumeSlider = box.querySelector(".volume-slider");

    box.addEventListener("mouseenter", () => {
        video.play();
    });

    box.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });

    // Audio toggle functionality
    audioBtn.addEventListener("click", () => {
        if (video.muted) {
            video.muted = false;
            audioBtn.textContent = "🔊"; // Change icon to unmuted
        } else {
            video.muted = true;
            audioBtn.textContent = "🔇"; // Change icon to muted
        }
    });

    // Adjust volume based on slider input
    volumeSlider.addEventListener("input", () => {
        video.volume = volumeSlider.value;  // Set video volume to slider value
    });
});




