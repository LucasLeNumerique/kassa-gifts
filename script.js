const btn = document.getElementById("triggerBtn");

btn.addEventListener("click", () => {
    const countdownDiv = document.getElementById("countdown");
    const imagesDiv = document.getElementById("images");
    const images = document.querySelectorAll(".image");

    // Hide button and show countdown
    btn.style.display = "none";
    countdownDiv.style.display = "block";
    countdownDiv.style.opacity = "1"; 

    let countdown = 3;
    countdownDiv.textContent = countdown;

    let countdownInterval = setInterval(() => {
        countdown--;
        countdownDiv.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(countdownInterval);

            // Fade out countdown smoothly
            countdownDiv.style.opacity = "0";

            setTimeout(() => {
                countdownDiv.style.display = "none";  // Hide it after fading out

                // Ensure the images container is visible before fading in
                imagesDiv.style.display = "grid";
                setTimeout(() => {
                    imagesDiv.style.opacity = "1";
                }, 50); // Slight delay for a smooth effect

                // Show images one by one with fade-in effect
                images.forEach((img, index) => {
                    setTimeout(() => {
                        img.style.visibility = "visible";
                        img.style.opacity = "1";
                    }, (index + 1) * 500);
                });

            }, 500); // Wait for countdown fade-out
        }
    }, 1000);
});
