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

document.getElementById("header").innerHTML = `
<header class="l-header">
    <nav class="nav bd-grid">
        <div class="nav__social">
            <a class="nav__social-icon" href="https://www.linkedin.com/in/siavashbarqijaniar/"><i class="bx bxl-linkedin"></i></a>
            <a class="nav__social-icon" href="https://github.com/SiavashBarqiJaniar"><i class="bx bxl-github"></i></a>
            <a class="nav__social-icon" href="mailto:siavashbarqi@gmail.com"><i class="bx bx-envelope"></i></a>
            <a class="nav__social-icon" href="https://scholar.google.com/citations?user=KQ82xw4AAAAJ&hl=en"><i class="bx bxl-google"></i></a>
            <a class="nav__social-icon" href="Siavash_Barqi_Janiar_cv.pdf"><i class='bx bx-file'></i></a>
            <!--a class="navButton" href="Siavash_Barqi_Janiar_resume.pdf">Resume</a-->
        </div>

        <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
                <li class="nav__item"><a href="#" class="nav__link active">About</a></li>
                <li class="nav__item"><a href="cv.html" class="nav__link">Curriculum Vitae</a></li>
                <li class="nav__item"><a href="publications.html" class="nav__link">Publications</a></li>
                <li class="nav__item"><a href="#projects" class="nav__link">Projects</a></li>
                <li class="nav__item"><a href="presentations.html" class="nav__link">Presentations</a></li>
                <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
            </ul>
        </div>

        <div class="nav__toggle" id="nav-toggle">
            <i class='bx bx-menu'></i>
        </div>
    </nav>
</header>
`;

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