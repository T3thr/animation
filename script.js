document.addEventListener("DOMContentLoaded", function() {
    // Wait for the page to fully load

    // Simulate a delay for the animation (e.g., 3 seconds)
    setTimeout(function() {
        var introAnimation = document.querySelector(".intro-animation");
        var mainContent = document.querySelector(".main-content");

        // Fade out the animation
        introAnimation.style.opacity = "0";

        // Show the main content
        mainContent.style.display = "block";
    }, 3000); // Adjust the duration as needed
});
