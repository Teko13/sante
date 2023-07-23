const navItems = document.querySelector("#nav__items");
const openBtn = document.querySelector("#open__nav-btn");
const closeBtn = document.querySelector("#close__nav-btn");
const body = document.querySelector("body");
const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer")
const containers = document.querySelectorAll(".container");
const themeToggler = document.querySelector(".dark-light-mode");
const nav = document.querySelector("nav");
let lightTheme = true;

const openNavBar = () => {
    navItems.style.display = "flex";
    closeBtn.style.display = "inline-block";
    openBtn.style.display = "none";
};

const closeNavBar = () => {
    navItems.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
};
openBtn.addEventListener("click", openNavBar);
closeBtn.addEventListener("click", closeNavBar);

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 600px
        600: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    }
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        if (!nav.classList.contains("onScroll")) {
            nav.classList.add("onScroll");
        }
    }
    else if (nav.classList.contains("onScroll")) {
        nav.classList.remove("onScroll")
    }
});
themeToggler.addEventListener("click", () => {
    lightTheme = !lightTheme;
    if (lightTheme === false) {
        body.classList.add('dark');
        body.classList.remove("light");
        nav.classList.add("dark");
        footer.classList.add("dark");
        sections.forEach(section => {
            section.classList.add("dark")
        });
        containers.forEach(container => {
            container.classList.add("dark");
        })
    }
    else {
        body.classList.add('light');
        nav.classList.remove("dark");
        body.classList.remove("dark");
        footer.classList.remove("dark");
        sections.forEach(section => {
            section.classList.remove("dark")
        });
        containers.forEach(container => {
            container.classList.remove("dark");
        })
    }
});

