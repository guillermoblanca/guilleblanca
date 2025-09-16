/*=============== SCROLL ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.header nav a');

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 60;
    const sectionId = section.getAttribute('id');
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      navLinks.forEach(link => link.classList.remove('active-link'));
      const active = document.querySelector(`.header nav a[href="#${sectionId}"]`);
      if(active) active.classList.add('active-link');
    }
  });
});

/*=============== SCROLL REVEAL SIMPLE ===============*/
const srItems = document.querySelectorAll('.hero, .about, .proyectos-grid, .contact');

// Estado inicial: invisible y ligeramente desplazado
srItems.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "opacity 1s ease-out, transform 1s ease-out";
});

// Función que revisa qué elementos mostrar
function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;
  srItems.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < trigger){
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
}

// Ejecutar tanto al cargar como al hacer scroll
window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

/*=============== SMOOTH SCROLL FOR BUTTONS ===============*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});
