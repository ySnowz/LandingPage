window.sr = ScrollReveal({ reset: true });
window.scrollSpeed = 1500;

const sections = document.querySelectorAll('section');
const divs = document.querySelectorAll('div');

sr.reveal(sections, { duration: 500 });
sr.reveal(divs, { duration: 1000 });

const navLinks = document.querySelectorAll('#navbarLinks > li > a');

navLinks.forEach(a => {
    a.addEventListener('click', () => {
        navLinks.forEach((navA) => {
            navA.classList.remove("azul");
            navA.classList.remove("bg-white");
            navA.classList.remove("px-4");
            navA.classList.remove("py-2");
            navA.classList.remove("rounded-full");
            navA.classList.remove("drop-shadow-sm");
            navA.classList.add("text-slate-400")
        })
        a.classList.remove('text-slate-400');
        a.classList.add("azul");
        a.classList.add("bg-white");
        a.classList.add("px-4");
        a.classList.add("py-2");
        a.classList.add("rounded-full");
        a.classList.add("drop-shadow-sm");
    })
})