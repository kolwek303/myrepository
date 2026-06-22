const dateSpan = document.getElementById("update-date");
const today = new Date();
dateSpan.textContent = today.toLocaleDateString("ru-RU");

// ===== ПОДСВЕТКА АКТИВНОГО ПУНКТА МЕНЮ =====
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});