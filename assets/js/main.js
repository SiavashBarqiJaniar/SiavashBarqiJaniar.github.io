/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};

showMenu('nav-toggle', 'nav-menu');

document.addEventListener("DOMContentLoaded", () => {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });
});

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    document.getElementById('nav-menu')?.classList.remove('show');
}

navLinks.forEach(link => {
    link.addEventListener('click', linkAction);
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

        const link = document.querySelector(
            `.nav__menu a[href*="${sectionId}"]`
        );

        if (!link) return;

        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200
});

sr.reveal(
    '.home__data, .about__img, .skills__subtitle, .skills__text'
);

sr.reveal(
    '.home__img, .about__subtitle, .about__text, .skills__img',
    { delay: 400 }
);

sr.reveal('.home__social-icon', {
    interval: 200
});

sr.reveal(
    '.skills__data, .work__img, .contact__input',
    { interval: 20 }
);