const text = "Hi, I'm Nandini 👋\nWelcome to my Portfolio";
const welcomeText = document.getElementById("welcome-text");
const enterBtn = document.getElementById("enter-btn");
const mainContent = document.getElementById("main-content");
const welcomeScreen = document.getElementById("welcome-screen");

let index = 0;

// Typing effect
function typeEffect() {
    if (index < text.length) {
        welcomeText.innerHTML += text[index] === "\n" ? "<br>" : text[index];
        index++;
        setTimeout(typeEffect, 50);
    } else {
        // Show button after typing
        enterBtn.classList.remove("opacity-0");
    }
}

typeEffect();

// Button click → show portfolio
enterBtn.addEventListener("click", () => {
    welcomeScreen.classList.add("opacity-0");

    setTimeout(() => {
        welcomeScreen.style.display = "none";
        mainContent.classList.remove("hidden");
    }, 500);
});