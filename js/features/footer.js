function initFooter() {
    const links = document.querySelectorAll(".footer-link");

    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.transform = "translateY(-3px)";
        });

        link.addEventListener("mouseleave", () => {
            link.style.transform = "translateY(0)";
        });
    });
}

document.addEventListener("DOMContentLoaded", initFooter);