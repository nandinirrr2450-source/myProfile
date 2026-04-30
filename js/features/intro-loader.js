function initIntroLoader() {
    const loader = document.getElementById("intro-loader");
    const text = document.getElementById("intro-text");

    const messages = [
        "Welcome.",
        "Hi, I'm Nandini.",
        "Building modern web applications.",
        "Portfolio"
    ];

    let index = 0;

    function showNext() {
        if (index >= messages.length) {
            // fade out loader
            loader.style.opacity = "0";
            setTimeout(() => loader.style.display = "none", 600);
            return;
        }

        text.style.opacity = "0";

        setTimeout(() => {
            text.textContent = messages[index];
            text.style.opacity = "1";
            index++;
            setTimeout(showNext, 1200);
        }, 300);
    }

    showNext();
}

window.addEventListener("load", initIntroLoader);