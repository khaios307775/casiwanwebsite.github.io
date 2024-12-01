document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

const userTrigger = document.getElementById("user-trigger");
const userInfoBox = document.getElementById("user-info-box");
const closeButton = document.getElementById("close-button");

userTrigger.addEventListener("click", () => {
    userInfoBox.classList.toggle("hidden");
    userInfoBox.setAttribute("aria-hidden", userInfoBox.classList.contains("hidden"));
});

closeButton.addEventListener("click", () => {
    userInfoBox.classList.add("hidden");
    userInfoBox.setAttribute("aria-hidden", "true");
});

window.addEventListener("click", (event) => {
    if (!userInfoBox.contains(event.target) && event.target !== userTrigger) {
        userInfoBox.classList.add("hidden");
        userInfoBox.setAttribute("aria-hidden", "true");
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !userInfoBox.classList.contains("hidden")) {
        userInfoBox.classList.add("hidden");
        userInfoBox.setAttribute("aria-hidden", "true");
    }
});

document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = button.getAttribute('data-link');
    });
});
