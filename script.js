const btn = document.getElementById("triggerBtn");

btn.addEventListener("click", () => {
    const countdownDiv = document.getElementById("countdown");
    const imagesDiv = document.getElementById("images");
    const images = document.querySelectorAll(".image");

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

            countdownDiv.style.opacity = "0";

            setTimeout(() => {
                countdownDiv.style.display = "none";

                imagesDiv.style.display = "grid";
                setTimeout(() => {
                    imagesDiv.style.opacity = "1";
                }, 50);

                images.forEach((img, index) => {
                    setTimeout(() => {
                        img.style.visibility = "visible";
                        img.style.opacity = "1";
                    }, (index + 1) * 750);
                });

            }, 500);
        }
    }, 1000);
});
