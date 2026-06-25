console.log("Привет! Скрипт подключен и работает.");

const dateSpan = document.getElementById("update-date");
if (dateSpan) {
    const today = new Date();
    dateSpan.textContent = today.toLocaleDateString("ru-RU");
}

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector("nav");

if (burgerBtn && nav) {
    burgerBtn.addEventListener("click", function() {
        nav.classList.toggle("open");
    });
}