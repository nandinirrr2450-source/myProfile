function initModal() {
    console.log("Modal Init Running");

    const modal = document.getElementById("contact-modal");
    const modalContent = document.getElementById("modal-content");
    const modalTrigger = document.getElementById("modal-trigger");
    const formCancel = document.getElementById("form-cancel");

    if (!modal || !modalContent || !modalTrigger || !formCancel) {
        console.error("Modal elements missing");
        return;
    }

    // OPEN
    modalTrigger.onclick = function () {
        modal.classList.remove("hidden");
        modalContent.classList.remove("scale-95", "opacity-0");
    };

    // CLOSE (cancel button)
    formCancel.onclick = function () {
        modal.classList.add("hidden");
    };

    // CLOSE (click outside)
    modal.onclick = function (e) {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    };
}
function initContactValidation() {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const message = document.getElementById("form-message");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        // RESET MESSAGE
        message.textContent = "";
        message.classList.remove("text-green-500", "text-red-500");

        // ❌ EMPTY
        if (!name || !email) {
            message.textContent = "All fields are required";
            message.classList.add("text-red-500");
            return;
        }

        // ❌ NAME VALIDATION
        if (name.length < 5) {
            message.textContent = "Name must be at least 5 letters";
            message.classList.add("text-red-500");
            return;
        }

        // ❌ EMAIL VALIDATION
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            message.textContent = "Enter a valid email id";
            message.classList.add("text-red-500");
            return;
        }

        // ✅ SUCCESS
        message.textContent = "Message sent successfully!";
        message.classList.add("text-green-500");

        form.reset();
    });
}

document.addEventListener("DOMContentLoaded", initContactValidation);
window.onload = initModal;