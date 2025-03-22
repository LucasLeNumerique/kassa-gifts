const btn = document.getElementById("triggerBtn");

btn.addEventListener("click", () => {
    const countdownDiv = document.getElementById("countdown");
    const imagesDiv = document.getElementById("images");
    const images = document.querySelectorAll(".image");

    // Hide the button with a fade-out effect
    btn.style.transition = "opacity 1s ease";
    btn.style.opacity = "0"; // Button starts fading out

    // Wait for 1 second before starting the countdown fade-in
    setTimeout(() => {
        btn.style.display = "none"; // After fading out, hide the button

        // Show the countdown and start fading it in
        countdownDiv.style.display = "block";
        countdownDiv.style.opacity = "0"; // Start with 0 opacity

        setTimeout(() => {
            countdownDiv.style.transition = "opacity 0.5s ease-in-out";
            countdownDiv.style.opacity = "1"; // Fade in the countdown
        }, 500); // Wait 0.5s before starting to fade in the countdown

        let countdown = 5;
        countdownDiv.textContent = countdown;

        let countdownInterval = setInterval(() => {
            countdown--;
            countdownDiv.textContent = countdown;

            if (countdown <= 0) {
                clearInterval(countdownInterval);

                // Wait for the fade-in to finish before fading out
                setTimeout(() => {
                    countdownDiv.style.transition = "opacity 0.5s ease-in-out";
                    countdownDiv.style.opacity = "0"; // Fade out the countdown

                    setTimeout(() => {
                        countdownDiv.style.display = "none"; // Hide the countdown after fade-out

                        // Show the image grid and fade it in
                        imagesDiv.style.display = "grid";
                        setTimeout(() => {
                            imagesDiv.style.opacity = "1"; // Fade-in the image grid
                        }, 50);

                        // Fade in each image sequentially
                        images.forEach((img, index) => {
                            setTimeout(() => {
                                img.style.visibility = "visible"; // Make image visible
                                img.style.opacity = "1"; // Fade in each image
                            }, (index + 1) * 750);
                        });

                    }, 500); // Wait for fade-out to finish before hiding the countdown

                }, 500); // Wait 0.5s to ensure countdown finishes fading in before fading out

            }
        }, 1000); // Decrease countdown every second

    }, 1000); // Wait 1 second before starting the countdown fade-in
});
