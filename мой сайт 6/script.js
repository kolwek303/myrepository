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

const toggleBtn = document.getElementById("toggle-btn");
const extraInfo = document.getElementById("extra-info");

if (toggleBtn && extraInfo) {
    toggleBtn.addEventListener("click", function() {
        extraInfo.classList.toggle("expanded");
        toggleBtn.textContent = extraInfo.classList.contains("expanded") ? "Скрыть" : "Показать больше";
    });
}

const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-theme");
        const isDark = document.body.classList.contains("dark-theme");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

const form = document.getElementById("contact-form");
if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");

        let isValid = true;

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Введите имя";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Введите корректный email";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        if (isValid) {
            alert("Форма заполнена верно! (отправка на сервер не настроена)");
            form.reset();
        }
    });
}

const projects = [
    {
        id: 1,
        title: "Nissan Laurel C35 (Крокодейл)",
        category: "ремонт",
        description: "Перебрали электрику, довели двигатель до идеала. Заменили торпеду, ходовую, топливную систему.",
        image: "img/lavrik.jpg"
    },
    {
        id: 2,
        title: "Nissan X-trail (Беляш)",
        category: "ремонт",
        description: "Заменены стойки, шаровые, АКПП. Сделаны аксессуарные доработки.",
        image: "img/xtrail.jpg"
    },
    {
        id: 3,
        title: "Nissan R-Nessa (слева)",
        category: "ремонт",
        description: "Замена всей ходовки, двигателя и АКПП. Полностью доведена до идеала.",
        image: "img/rnesskafila.jpg"
    },
    {
        id: 4,
        title: "Toyota Fielder (справа)",
        category: "ремонт",
        description: "Ремонт ходовой, замена двери багажника и топливной системы.",
        image: "img/rnesskafila.jpg"
    },
    {
        id: 5,
        title: "ВЫ ДУМАЛИ Я ШУЧУ ПРО УНИЧТОЖЕНИЕ?",
        category: "аксессуары",
        description: "Ладно, она просто сгорела ((",
        image: "img/сгоревшаяnissangloriay33.jpg"
    },
    {
        id: 6,
        title: "Тюнинг выхлопной системы",
        category: "аксессуары",
        description: "Сварка прямоточного выхлопа с пламегасителями.",
        image: "img/lavrik.jpg"
    },
    {
        id: 7,
        title: "Замена проводки в Nissan X-Trail",
        category: "электрика",
        description: "Полная переборка электрики, устранение коротких замыканий.",
        image: "img/xtrail.jpg"
    }
];

function createCard(project) {
    return `
        <article data-category="${project.category}">
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </article>
    `;
}

function renderProjects(list) {
    const container = document.getElementById("projects-grid");
    if (container) {
        container.innerHTML = list.map(createCard).join("");
    }
}

renderProjects(projects);

const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        filterButtons.forEach(b => b.classList.remove("active"));
        this.classList.add("active");

        const filter = this.dataset.filter;
        const filtered = filter === "all"
            ? projects
            : projects.filter(p => p.category === filter);

        renderProjects(filtered);
    });
});

const searchInput = document.getElementById("search-input");

if (searchInput) {
    searchInput.addEventListener("input", function() {
        const query = this.value.trim().toLowerCase();
        const filtered = projects.filter(p =>
            p.title.toLowerCase().includes(query)
        );
        renderProjects(filtered);
    });
}